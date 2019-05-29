/**
 * child_process module provides the ability to spawn child processes
 * in a manner that is similar but not identical to popen(3)
 */

/**
 * child_process enables access to OS functionalities by running
 * any system command inside a, well, child process.
 * Ways of creating a child process: spawn(), fork(), exec() execFile()
 * 1. spawn()
 * launches a command in a new process
 * 2. fork()
 * 3. exec()
 * 4. execFile()
 */

const { spawn } = require("child_process");
const ls = spawn("ls", ["-lh", "/usr"]);
const pwd = spawn("pwd");

const child = spawn("find", [".", "-type", "f"]);
// Inheritance from parent objects
const childOne = spawn("find . -type f | wc -l", {
  stdio: "inherit",
  shell: true,
  cwd: '/Users/User/Downloads'
});

const py = spawn("py", ["--version"]);

const wc = spawn("wc");

process.stdin.pipe(wc.stdin);
wc.stdout.on("data", data => {
  console.log(`child stdout: ${data}`);
});

py.stdout.on("data", data => console.log(`Python version: ${data}`));

py.on("exit", (code, signal) => {
  console.log(`child process exited with ${code} and signal ${signal}`);
});

pwd.stdout.on("data", data => console.log(`path: ${data}`));

pwd.on("exit", (code, signal) => {
  console.log(`child process exited with ${code} and signal ${signal}`);
});

child.stdout.on("data", data => {
  console.log(`child stdout:\n${data}`);
});
child.stderr.on("data", data => {
  console.error(`child stderr: ${data}`);
});

ls.stdout.on("data", data => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", data => {
  console.log(`stderr: ${data}`);
});

ls.on("close", code => {
  console.log(`child process exited with code ${code}`);
});
