const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log("request made from client");

    // console.log(req.url);

    let filename;
    switch(req.url){
        case '/':
            console.log('home page is requesting now');
            filename = 'index.html';
            res.statusCode = 200;
        break;
        case '/home':
            filename = 'index.html';
            res.statusCode = 301;
            res.setHeader('Location','/');
        break;

        case '/contact':
            filename = 'contact.html';
            res.statusCode = 200;
        break;
        case '/contact-us':
            filename = 'contact.html';
            res.statusCode = 301;
            res.setHeader('Location','/contact');
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