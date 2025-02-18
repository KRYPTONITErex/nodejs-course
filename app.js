// console.log('app is start running')

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000');
});



app.get('/', (req, res) => {
    // res.write('<h1>HOME PAGE</h1>');
    // res.end();
    // res.send('<h1>HOME PAGE hello world</h1>');
    res.sendFile('./views/index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
})  

app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', {root: __dirname});
})