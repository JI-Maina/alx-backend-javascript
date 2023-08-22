const express = require('express');
const fs = require('fs');

const app = express();
const path = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.send('This is the list of our students');
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error(err);
    }

    const lines = data.split('\n');
    const newLines = lines.filter((line) => line !== '');
    const finalLines = newLines.splice(1);
    const items = [];

    for (const line of finalLines) {
      const [firstname, lastname, age, field] = line.split(',');
      const item = {
        firstname, lastname, age, field,
      };
      items.push(item);
    }

    res.write(`Number of students: ${finalLines.length}`);

    const fields = {};
    for (const item of items) {
      const key = item.field;

      if (!fields[key]) {
        fields[key] = [];
      }

      fields[key].push(item);
    }

    for (const [key, value] of Object.entries(fields)) {
      const len = value.length;

      const names = () => {
        let nameString = '';
        for (const idx of value) {
          nameString += `${idx.firstname}, `;
        }
        return nameString.trim().slice(0, -1);
      };

      res.write(`Number of students in ${key}: ${len}. List: ${names()}`);
    }

    res.end();
  });
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
