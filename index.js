// const Person = require("./person"); //common js importing syntax
// const p1 = new Person("jane", 22);
// p1.greeting();

//creating a server
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     // res.end("<h1>Hello world</h1>");
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       "utf-8",
  //       (err, data) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(data);
  //       }
  //     );
  //   }
  //   if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       "utf-8",
  //       (err, data) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(data);
  //       }
  //     );
  //   }
  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "john", age: 23 },
  //       { name: "karl", age: 45 },
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }
  //build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  //extension of file
  let extname = path.extname(filePath);
  //initial content type
  let contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //some server error
        res.writeHead(500);
        res.end(`Server Error : ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000; //env variable

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
