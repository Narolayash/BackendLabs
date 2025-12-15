const fs = require('fs');
const http = require('http');


// 1. Create a hello world webapp using “http” core module in NodeJS. (A) 
// const server = http.createServer((req, res) => {
//     res.write("Hello World");
//     res.end();
// });
// server.listen(3000, () => {
//     console.log("Server chalu thay gyu!");
// });




// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS. (B)
// const server = http.createServer((req, res) => {
//     res.statusCode = 500;
//     if(req.url === '/' || req.url === '/home') res.write("This is home page");
//     else if(req.url === '/about') res.write("This is about page");
//     else if(req.url === '/contact') res.write("This is contact page");
//     else if(req.url === '/profile') res.write("This is profile page");
//     else res.write("This is not valid url");

//     res.end();
// });  

// server.listen(3000, () => {
//     console.log("Server chalu thay gyu!");
// });




// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using 
// http core module (C) 

const server = http.createServer((req, res) => {
    // const data = fs.readFileSync('my_file.txt');
    // res.write(data);
    // fs.readFile('my_file.txt', (err, data) => {
    //     res.end(data);
    //     return;
    // });

    if(req.url === '/' || req.url === '/home') {
        fs.readFile('my_file.txt', (err, data) => {
            if (err) console.error(err);
            else {
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url === '/about') {
        fs.readFile('about.txt', (err, data) => {
            if (err) console.error(err);
            else {
                res.write(data);
                res.end();
            }
        });
    }
    else {
        res.write("Not valid url");
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server chalu thay gyu!");
});