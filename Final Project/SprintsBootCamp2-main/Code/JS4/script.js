/*
Edit function
*/
const addTasks = () => {
  const str = document.getElementById("tasks").value;
  const arr = str.split(",");
  for (let task_name of arr) {
    task_name = task_name.trim();
    const task = {
      name: task_name,
    };
    if (task_name.startsWith("IMP:")) {
      task.name = task.name.replace("IMP:", "");
      task.priority = 1;
    } else {
      const startBrack = task.name.lastIndexOf("(");
      const endBrack = task.name.lastIndexOf(")");
      const priority = task.name.substring(startBrack + 1, endBrack);
      task.name = task.name.replace(`(${priority})`, "");
      task.priority = Number(priority);
    }
    task.task_date = new Date();
    task.status = "Pending";
    task.assignedTo = "Ahmed";
    addTaskToList(task);
    renderTaskTable(tasks);
  }
};

const copyTaskToEnd = (i) => {
  tasks.push({ ...tasks[i], task_date: new Date() });
};

const restFunctionTest = (a, ...values) => {
  debugger;
};
/*

Add Task datetime, task status, Assigned to
// split,trim,Replace,startsWith,endsWith,indexOf (-2),lastIndexOf,substring,join

Enter test "IMP:Task1, Task2(3), Task3(4)", If it starts with IMP: make it priority 1

Enter task in it's position in the array

Generate one line of code with task names separated by comma
// Rest (signature) and Spread Operators (pass)
// Destructing Arrays and Objects
// Reference Type and Value type copy

Copy task for today button


// indexOf, includes

// Array functions (filter, find, map,forEach,every,some)


reduce,flatMap
sort
Sort tasks by column
*/

const filterTasks = () => {
  const str = document.getElementById("taskName").value;
  const filteredTasks = filter(str);
  renderTaskTable(filteredTasks);
};
const filter = (str) => {
  return tasks.filter((item) =>
    item.name.toLowerCase().includes(str.toLowerCase())
  );
};

const getTaskNames = () => {
  return tasks.map((x) => x.name);
  tasks.map((x) => {
    return { ...x, assigned_to: "Ahmed" };
  });
};

tasks.forEach((x) => (x.task_date = new Date()));

/*
Filter tasks by name

Get tasks count for today
Check if some tasks are important (make it with other color)

// Maps and Sets
Get tasks count for each day
Talk about the HashSet and Dictionary


Add user as normal object
Change task status (Encapsulation Problem)
Balance Problem
// OOP
implement mark as done/undone using OOP
Add tasks with subtasks

// DOM and BOM
// Query Selector, byId, Tag, ClassName
Add checkbox for delete many


// APIs
// Async Await
// Micro and Macro task queues & Call stack

// IIFE
// Modules
// JQuery Intro
*/