const EventEmitter = require("events");

//create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on("event", () => console.log("event fired"));

//init event
myEmitter.emit("event");

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("called listener", data));
logger.log("hello world");
