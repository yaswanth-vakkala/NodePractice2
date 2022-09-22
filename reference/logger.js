const EventEmitter = require("events");
const uuid = require("uuid"); //creates random id

// console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg: msg });
  }
}

module.exports = Logger;
