const fs = require('fs');

const readStream = fs.createReadStream('./docs/large.txt');
const writeStream = fs.createWriteStream('./docs/largewrite.txt');


// readStream.on('data',(data)=>{
//     writeStream.write(data.toString());
//     writeStream.write('____chunk_____')
// })

//pipe
readStream.pipe(writeStream);