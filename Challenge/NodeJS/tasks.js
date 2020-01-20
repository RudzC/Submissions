/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var arr = text.split(/(\s+)/);
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (arr[0] === "hello") {
    if (arr[2] == " ") {
      hello(" ");
    } else {
      hello(arr[2]);
    }
  } else if (text === "help\n") {
    help();
  } else if (text === "lists\n") {
    lists();
  } else if (arr[0] === "add") {
    if (arr[2] != "") add(arr[2]);
    else console.log("error");
  } else if (arr[0] === "remove") {
    remove(arr[2]);
  } else {
    unknownCommand(text);
  }
}

/**
 * lists all possible commands
 */
function help() {
  var list =
    "Please enter one of these commands:" +
    "\n" +
    "quit/exit: exits the application." +
    "\n" +
    "hello: returns hello! or hello plus name." +
    "\n" +
    "add <task>: adds a task to your input." +
    "\n" +
    "help: lists all commands." +
    "\n" +
    "remove: deletes last task from input." +
    "\n" +
    "remove 1: deletes the first task from input." +
    "\n" +
    "remove 2: deletes the second task from input.";
  console.log(list);
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Say hello
 *
 * @returns {void}
 */
function hello(name) {
  if (name == "") {
    console.log("hello!");
  } else console.log("hello " + name + "!");
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

var tasks = ["Potato", "Tomato", "Carrot", "Cherry"];
function lists() {
  for (let i = 0; i < tasks.length; i++) console.log(i + 1 + "- " + tasks[i]);
}

function add(x) {
  tasks.push(x);
  lists();
}

function remove(x) {
  if (x == 0) {
    tasks.splice(-1, 1);
  } else if (x == 1) {
    tasks.splice(0, 1);
  } else if (x == 2) {
    tasks.splice(1, 1);
  }
  lists();
}

// The following line starts the application
startApp("Rudy Chakhroura");
