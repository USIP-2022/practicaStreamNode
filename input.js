const fs = require("fs");
const fileStream = fs.createReadStream("./data/testdata.txt");
fileStream
  .on("data", (data) => {
    console.log("Leyendo los datos:", data.toString());
  })
  .on("end", () => { console.log("No se tiene  datos."); });