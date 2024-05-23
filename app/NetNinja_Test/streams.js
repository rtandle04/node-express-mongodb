const fs = require('fs');
//Streams to read the files and write use pipes

const readStream = fs.createReadStream('./streams.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./writestreams.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log(' ----- NEW CHUNK ----------')
    console.log(chunk);
    writeStream.write(chunk);
})

readStream.pipe(writeStream);