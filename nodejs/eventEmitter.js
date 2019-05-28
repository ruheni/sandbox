/**
 * Provide a way to emit and listen to events
 */
const EventEmitter = require("events");

/**
 * To work with the EventEmitter, we create a class extending
 * EventEmitter.
 * Emitter objects are what we instantiate from the EventEmitter-based
 * classes.
 * Emitting an event is the signal that some condition has occured
 * The condition is usually about a state change in the emitting object
 */
class MyEmitter extends EventEmitter {
  execute(task) {
    console.log("The beginning of the shout-out");
    this.emit("shout-out");
    task();
    this.emit("silence");
    console.log("The end of the shout-out");
  }
}

const myEmitter = new MyEmitter();
myEmitter.on("shout-out", () => console.log("There will be a shout out"));
myEmitter.on("silence", () => console.log("Done with the shout outs"));
myEmitter.execute(() => console.log("*** Carrying out the shout outs ***"));

myEmitter.emit("shout-out");

const EventEmitter = require("events");
class WithLog extends EventEmitter {
  execute(taskFunc) {
    console.log("Before executing");
    this.emit("begin");
    taskFunc();
    this.emit("end");
    console.log("After executing");
  }
}
const withLog = new WithLog();
withLog.on("begin", () => console.log("About to execute"));
withLog.on("end", () => console.log("Done with execute"));
withLog.execute(() => console.log("*** Executing task ***"));



class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    this.emit("begin");
    console.time("execute");
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit("error", err);
      }
      this.emit("data", data);
      console.timeEnd("execute");
      this.emit("end");
    });
  }
}
const withTime = new WithTime();
withTime.on("begin", () => console.log("About to execute"));
withTime.on("end", () => console.log("Done with execute"));
withTime.execute(fs.readFile, __filename);
