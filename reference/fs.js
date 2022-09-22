const fs = require("fs");
const path = require("path");

//create folder
//by default async -- takes in callback | most of these funcs has sync alternatives like mkdirSync()
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created");
// });

//create and write to file
// fs.writeFile(path.join(__dirname, "test", "t1.txt"), 'Hello world', (err) => {
//     if (err) throw err;
//     console.log("file created and written to");
//   });

//to overwrite file
// fs.writeFile(path.join(__dirname, "test", "t1.txt"), 'I love node js', (err) => {
//     if (err) throw err;
//     console.log("file created and written to");
//   });

//append file
// fs.appendFile(path.join(__dirname, "test", "t1.txt"), "Hello world", (err) => {
//   if (err) throw err;
//   console.log("file created and written to");
// });

//we can also write it in callback as they are async
// fs.writeFile(path.join(__dirname, "test", "t1.txt"), "Hello world", (err) => {
//   if (err) throw err;
//   console.log("file created and written to");

//   fs.appendFile(
//     path.join(__dirname, "test", "t1.txt"),
//     " I love node js",
//     (err) => {
//       if (err) throw err;
//       console.log("file created and written to");
//     }
//   );
// });

//read file
// fs.readFile(path.join(__dirname, "test", "t1.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//rename file
// fs.rename(
//   path.join(__dirname, "test", "t1.txt"),
//   path.join(__dirname, "test", "hello.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("file renamed");
//   }
// );
