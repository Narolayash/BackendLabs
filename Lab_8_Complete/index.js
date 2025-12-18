const express = require('express');
const fs = require('fs');


// Lab 08: Create express server with basic routing. 
// 1. Create a hello world webapp using ExpressJS. (A) 
// const app = express();

// app.get('/', (req, res)=>{
//     res.send("Hello World!");
// });

// app.listen(3000, ()=>{
//     console.log("Server started at ", 3000);
// });



// 2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS. (B) 
// const app = express();

// app.get('/', (req, res)=>{
//     res.send(`<h1>I am home page </h1>`);
// });

// app.get('/about', (req, res)=>{
//     res.send("This is about page");
// });

// app.get('/contact', (req, res)=>{
//     res.send("This is contact page");
// });

// app.get('/student', (req, res)=>{
//     res.send("This is student page");
// });

// app.listen(3000, ()=>{
//     console.log("Server started at ", 3000);
// });



// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using 
// express (C ) 
// const app = express();

// app.get('/', (req, res) => {
//     fs.readFile('home.txt', 'utf8', (err, data) => {
//         if (err) console.error(err);
//         else {
//             res.send(data);
//         }
//     });
// });

// app.get('/about', (req, res) => {
//     fs.readFile('about.txt', 'utf8', (err, data) => {
//         if (err) console.error(err);
//         else {
//             res.send(data);
//         }
//     });
// });

// app.listen(3000, ()=>{
//     console.log("Server started at ", 3000);
// });



// extra ... 

const app = express();

app.get('/', (req, res) => {
    // res.send(`<h1>Hello Word! I am H1 Tag.</h1>`);   // pass html

    res.send({
        name: 'Yash',
        age: 18,
        college: 'darshan university'
    });
});

app.listen(3000, ()=>{
    console.log("Server started at ", 3000);
});