/**
 * worker_threads module enables the
 * use of threads that execute Js in parallel.
 * Workers are useful for performing CPU-intensive
 * Js ops. Don't help much with I/O intensive work.
 *
 * The example spawns a worker thread for each parse()
 */
const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require("worker_threads");

if (isMainThread) {
  module.exports = function parseJsAsync(script) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, { workerData: script });
      console.log("woker thread ops right here!");
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", code => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  };
} else {
  const { parse } = require("some-parsing-library");
  const script = workerData;
  parentPort.postMessage(parse(script));
}
