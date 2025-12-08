const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello World! My name is Jojo");

    res.end();
});

server.listen(3000, () => {
    console.log("Server star at @3000");
});