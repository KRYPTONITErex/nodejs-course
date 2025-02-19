// console.log('app is start running')
let morgan = require('morgan');

const express = require('express');
const { title } = require('process');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

// let dev = 'dev';
// let logger = (env)=>{
//     return (req,res,next)=>{
//         if(env === 'dev'){
//         console.log(`${req.method} ${req.originalUrl} --`);
//     }
//         next();
//     }
// }
// app.use(logger());

//package name - morgan
app.use(morgan('dev'));
app.use(express.static('public'));


app.get('/', (req, res) => {
    // res.write('<h1>HOME PAGE</h1>');
    // res.end();
    // res.send('<h1>HOME PAGE hello world</h1>');
    // res.sendFile('./views/index.html', {root: __dirname});

    let blogs = [
        {title: 'blog 1', snippet: 'blog 1 snippet updated'},
        {title: 'blog 2', snippet: 'blog 2 snippet'},
        {title: 'blog 3', snippet: 'blog 3 snippet'}
    ]

    res.render('index',{
        blogs : blogs,
        title : 'Home'
    });
})

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', {root: __dirname});
    res.render('about',{
        title : 'About'
    });
})
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

// app.use((req,res,next)=>{
//     console.log('2nd middleware is running');
//     next();
// })

app.get('/contact', (req, res) => {
    // res.sendFile('./views/contact.html', {root: __dirname});
    res.render('contact',{
        title : 'Contact'
    });
})

app.use((req, res) => {
    res.status(404).render('404',{
        title : '404 NOT FOU'
    });
    // res.sendFile('./views/404.html', {root: __dirname});
})