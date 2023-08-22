const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (data, err) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
