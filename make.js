const fs = require("fs");
const fileStream = fs.createWriteStream('./data/testdata.txt')
for (let i = 0; i <= 20000; i++) {
  fileStream.write("Realizando la prueba de Node.js\n"
  );
}