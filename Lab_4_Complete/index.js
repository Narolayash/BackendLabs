const path = require("path");
const os = require("os");

// 1)
console.log("Directory Name: ", __dirname);
console.log("File Name: ", __filename);
console.log("File Extension: ", path.extname(__filename));
console.log("Base of File Name: ", path.basename(__filename));
console.log("Base of Directory Name: ", path.basename(__dirname));

// 2)
console.log("using join:", path.join("users", "arjun", "document", "project"));

// 3)
const wrongPath = "//folder//subfolder////file.txt";
const rightPath = path.normalize(wrongPath);
console.log("Wrong Path: ", wrongPath);
console.log("Right Path: ", rightPath);

// 4)
const absolutePath = __filename;
const relativePath = "Lab_4\index.js"; 

function checkAbsolutePath(filePath) {
    if(path.isAbsolute(filePath)) console.log("Absolute Path");
    else console.log("Relative Path");
}
checkAbsolutePath(absolutePath);
checkAbsolutePath(relativePath);

// 5)
// console.log(path.resolve());
console.log(path.resolve("folder", "subfolder", "app.js"));

// 6)
console.log("6 --------------------->");
console.log(os);
console.log(os.type());
console.log(os.release());
console.log(os.platform());
console.log(os.arch());

// 7) Write a program that prints the total memory and free memory in GB (B)
console.log("7 --------------------->");

console.log(os.freemem());
console.log(os.totalmem());

function bytesINTOgb(memory) {
    return (memory / (1024 * 1024 * 1024)).toFixed(2);
}

console.log("Total in GB = ", bytesINTOgb(os.totalmem()));
console.log("Free memory in GB = ", bytesINTOgb(os.freemem()));

// 8) Write a Node.js program that prints details about the currently logged-in user in operating system. (B)
console.log("8 --------------------->");
console.log(os.userInfo());
console.log((os.userInfo()).username);

// 9) Write a program that prints how long the system has been running (uptime) in seconds and in hours. (B)
console.log("9 --------------------->");
console.log(os.uptime());
console.log(((os.uptime()) / 3600).toFixed(2));

// 10) Write a Node.js program that prints: (B)
console.log("10 --------------------->");
console.log(os.cpus());
// • Number of CPU cores
console.log((os.cpus()).length);

// • Model name of each core
(os.cpus()).forEach((core, index) => {
    console.log(`${index + 1}`, core.model);
})

// • Network interface details
console.log("Network interface details : ")
console.log(os.networkInterfaces());