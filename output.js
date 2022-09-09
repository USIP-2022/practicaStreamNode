const fs = require("fs");
const { Transform } = require("stream");
const fileStream= fs.createReadStream("./data/testdata.txt");
const transformedData= fs.createWriteStream("./data/transformedData.txt");

const uppercase = new Transform({

  transform(chunk, encoding, callback) {
    console.log(chunk)
    callback(null, chunk.toString().toUpperCase());
  },
});

fileStream.pipe(uppercase).pipe(transformedData);