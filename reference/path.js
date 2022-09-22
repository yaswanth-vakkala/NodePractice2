const path = require("path"); //node core module comes with node

//base file name
console.log(__filename);
console.log(path.basename(__filename))

//directory name
console.log(__dirname)
console.log(path.dirname(__filename))

//file extension
console.log(path.extname(__filename))

//create path obj
console.log(path.parse(__filename))

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))
