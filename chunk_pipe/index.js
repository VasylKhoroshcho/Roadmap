const fs = require('fs');

const testStream = async () => {
  const read = fs.createReadStream(`${__dirname}/test.txt`,  { highWaterMark: 8 });
  const write = fs.createWriteStream(`${__dirname}/output.txt`, 'utf-8');

  read.on('data', (chunk) => {
    console.log('chunk', chunk.toString())
    console.log(chunk.length);
  })

  read.pipe(write);
};


testStream();
