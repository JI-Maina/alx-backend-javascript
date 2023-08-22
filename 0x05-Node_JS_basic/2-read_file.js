const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
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

      console.log(`Number of students: ${finalLines.length}`);

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

        console.log(`Number of students in ${key}: ${len}. List: ${names()}`);
      }
    });
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
