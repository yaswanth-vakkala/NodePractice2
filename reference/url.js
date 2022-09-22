const url = require("url");

const myurl = new URL("http://mywebsite.com/hello.html?id=101&status=active"); //probably js class not related to url module

//serialize url
console.log(myurl.href);
console.log(myurl.toString());

//host (root domain) - includes port num
console.log(myurl.host);

//hostname - doesnt give port num
console.log(myurl.hostname);

//pathname
console.log(myurl.pathname);

//serialized query
console.log(myurl.search);

//params obj
console.log(myurl.searchParams);

//add params
myurl.searchParams.append("abc", "123");
console.log(myurl.searchParams);

//loop through params
myurl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
