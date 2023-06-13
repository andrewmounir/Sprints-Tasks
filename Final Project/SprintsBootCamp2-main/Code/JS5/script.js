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


  
  Talk about the HashSet and Dictionary
  
  Get tasks count for each day
  
  Add user as normal object
  Change task status (Encapsulation Problem)
  Balance Problem


  */
const task = {
  name: "Task 1",
  priority: 2,
  assignedTo: "Ahmed",
  subTasks: [],
  increasePriority: function () {
    if (this.priority > 1) this.priority--;
  },
  decreasaePriority: function () {
    this.priority++;
  },
  displayTaskData: function () {
    console.log(`${this.name} - ${this.priority} - ${this.assignedTo}`);
  },
  getHTMLRow: function () {
    return `<tr></tr`;
  },
}; // Object of type Object

const task2 = {
  name: "Task 2",
  priority: 2,
  assignedTo: "Ahmed",
  subTasks: [],
  increasePriority: task.increasePriority,
  decreasaePriority: task.decreasaePriority,
  displayTaskData: task.displayTaskData,
  getHTMLRow: task.getHTMLRow,
}; // Object of type Object

const task3 = new Object();
const task4 = {};

class Task {
  name;
  _priority;
  assignedTo;
  subTasks;

  constructor(name, priority, assignedTo = "Guest") {
    this.name = name;
    this._priority = priority;
    this.assignedTo = assignedTo;
    this.subTasks = [];
  }

  getCurrentPriority() {
    return this._priority;
  }

  increasePriority() {
    if (this._priority > 1) this._priority--;
  }

  decreasaePriority() {
    this._priority++;
  }

  displayTaskData() {
    console.log(`${this.name} - ${this._priority} - ${this.assignedTo}`);
  }
  getHTMLRow() {
    return `<li></li>`;
  }
}

class SubTask extends Task {
  parentTask;
  constructor(name, priority, parentTask, assignedTo = "Guest") {
    super(name, priority, assignedTo);
    this.parentTask = parentTask;
  }
}

const taskObj = new Task("Task1", 5, "Ahmed");
const taskObj2 = new Task("Task2", 2);

const subTask1 = new SubTask("SubTask1", 4, taskObj, "Ibrahim");

/*
  // OOP
  
  // DOM and BOM
  // Query Selector, byId, Tag, ClassName
*/
//Old way
// const request = new XMLHttpRequest();
// request.open("GET", "http://localhost:5000/api/categories/");
// request.send();
// request.addEventListener("load", loadCategories);

// function loadCategories(){
//   const response = JSON.parse(this.responseText);
//   console.log(response.data.map(x=>x.name));
// }

// const request = fetch("http://localhost:5000/api/categories/");
// request
//   .then((response) => {
//     response.json().then((data) => {
//       const prequest = fetch("http://localhost:5000/api/products/");
//       prequest
//         .then((response) => {
//           response.json().then((data) => {
//             console.log(data);
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//         .finally(() => {});
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {});
 // APIs
// Async Await

const getRequest = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/categories/");
    console.log(await response.json());
    const presponse = await fetch("http://localhost:5000/api/products/");
    console.log(await presponse.json());
  } catch (e) {
    console.log(e);
  }
  finally{

  }

  /////////
};

getRequest();

