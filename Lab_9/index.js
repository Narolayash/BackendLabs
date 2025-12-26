const express = require('express');

const app = express();

// ------- 1 ----------
// const demoMiddleWare = (req, res, next) => {
//     console.log("Middleware kam kare chhe!");
//     console.log(req.path);
//     next();
// };

// app.get('/', demoMiddleWare, (req, res) => {
//     res.send("HhhhhW!");
// });

// app.get('/about', demoMiddleWare, (req, res) => {
//     res.send("this is about page!");
// });

// app.listen(3000, ()=>{
//     console.log("Server chalu chhe bhai!");
// });




// ---------------2--------------------
// const authAdmin = (req, res, next) => {
//     if(req.query.admin == "iAmAdmin") {
//         console.log("Access chhe");
//         next();
//     }
//     else console.log("Access denied");
// };

// app.get('/admin', authAdmin, (req, res) => {
//     res.send("Welcome kaka!");
// });

// app.listen(3000, ()=>{
//     console.log("Server chalu chhe bhai!");
// });



// ---------------------- 3 ----------------------
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send("Home page!"); 
}); 


app.listen(3000, ()=>{
    console.log("Server chalu chhe bhai!");
});