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
    if (arr[2] != "") add(arr);
    else console.log("error");
  } else if (arr[0] === "remove") {
    remove(arr[2]);
  } else if (arr[0] === "edit") {
    if (arr[2] != "") edit(arr[2], arr);
    else console.log("error");
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
    "quit/exit:" +
    "\t" +
    "exits the application." +
    "\n" +
    "hello:" +
    "\t" +
    "\t" +
    "returns hello! or hello plus name." +
    "\n" +
    "add <task>:" +
    "\t" +
    "adds a task to your input." +
    "\n" +
    "help:" +
    "\t" +
    "\t" +
    "lists all commands." +
    "\n" +
    "remove:" +
    "\t" +
    "\t" +
    "deletes last task from input." +
    "\n" +
    "remove 1:" +
    "\t" +
    "deletes the first task from input." +
    "\n" +
    "remove 2:" +
    "\t" +
    "deletes the second task from input." +
    "\n" +
    "edit:" +
    "\t" +
    "\t" +
    "logs error" +
    "\n" +
    "edit <name>:" +
    "\t" +
    "edits the last task in array." +
    "\n" +
    "edit <number>:" +
    "\t" +
    "edits tasks by number in array.";
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
  let result = "";
  for (let i = 0; i < tasks.length; i++) {
    result += `${i + 1}- ${tasks[i]}\n`;
  }
  console.log(result);
}

function add(x) {
  x.shift();
  x.shift();
  tasks.push(x.join("").replace(/(\r\n|\n|\r)/gm, ""));
  lists();
}

function remove(x) {
  if (x == 0 || x <= 2) {
    tasks.splice(x - 1, 1);
    lists();
  } else console.log("remove number does not exist");
}

function edit(id, newtext) {
  if (!parseInt(id)) {
    newtext.shift();
    newtext.shift();

    newtext.pop();
    newtext.pop();
    console.log(id);
    console.log(newtext);
    tasks.splice(-1, 1, newtext.join("").replace(/(\r\n|\n|\r)/gm, ""));
    lists();
  } else {
    newtext.shift();
    newtext.shift();
    newtext.shift();
    newtext.shift();
    tasks.splice(id - 1, 1, newtext.join("").replace(/(\r\n|\n|\r)/gm, ""));
    lists();
  }

  // x.shift();
  // x.shift();
  // tasks.splice(-1,1, x.join("").replace(/(\r\n|\n|\r)/gm, ""));
  // lists();
}

// The following line starts the application
startApp("Rudy Chakhroura");
