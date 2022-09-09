const fs = require("fs");
const fileStream = fs.createReadStream("./data/file.txt");
fileStream
  .on("data", (data) => {
    console.log("Leyendo los datos:", data.toString());
  })
  .on("end", () => { console.log("No se tiene mas datos."); });