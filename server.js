const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log("request made from client");

    // console.log(req.url);

    let filename;
    switch(req.url){
        case '/':
            filename = 'index.html';
            res.statusCode = 200;
        break;

        case '/contact':
            filename = 'contact.html';
            res.statusCode = 200;
        break;

        case '/about':
            filename = 'about.html';
            res
        break;

        default:
            filename = '404.html';
            res.statusCode = 404;
        break;
    }

    res.setHeader('Content-type', 'text/html');
    
    fs.readFile('./views/' + filename, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();

        }
    })

})

server.listen(3000,'localhost',()=>{
    console.log("listening on port 3000");
});