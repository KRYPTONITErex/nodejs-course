const fs = require('fs');

//read

// fs.readFile('./docs/creativecoder.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString());
// })


//write

// if(!fs.existsSync('./docs/creativecoder123.txt')){

//     fs.writeFile('./docs/creativecoder123.txt', 'Hello World',(err,data)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('after Writing Files')
//     })
// }else{
//     // console.log('file exist')
//     fs.unlink('./docs/creativecoder123.txt',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// }

// console.log('latest line of codes')


if(fs.existsSync('./new-folder')){

    //folder delete
    fs.rmdir('./new-folder',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })

}else {

     //folder create
     fs.mkdir('./new-folder',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })

}

