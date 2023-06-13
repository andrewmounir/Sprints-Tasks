const tasks = [];

const addTask = function () {
  const taskName = document.getElementById("taskName").value;
  const priority = document.getElementById("priority").value;
  //Validation
  const task = { name: taskName, priority: priority };
  const isValid = validate(task);

  if (!isValid) {
    alert("Please enter a valid data");
    return;
  }

  addTaskToList(task);
  renderTaskTable(tasks);
};
const validate = function (task) {
  if (!task.name.trim()) return false;
  if (isNaN(Number(task.priority)) || Number(task.priority) < 1) return false;
  return true;
};

const addTaskToList = function (task) {
  let itemAdded = false;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].priority > task.priority) {
      tasks.splice(i, 0, task);
      itemAdded = true;
      break;
    }
  }
  if (!itemAdded) tasks.push(task);
};

const renderTaskTable = function (tasks) {
  let tbody = "";
  for (let i = 0; i < tasks.length; i++) {
    tbody += getTableRow(i, tasks[i]);
  }
  document.getElementById("task-list").innerHTML = tbody;
};

const getTableRow = function (i, task) {
  let tr = getRowContent(i, task);
  return tr;
};

const deleteTask = function (i) {
  if (!confirm("Are you sure ?")) {
    return;
  }
  tasks.splice(i, 1);
  renderTaskTable(tasks);
};

// const func1 = () => {
//   if (a > b) return "text1";
//   else return "text2";

//   return a > b ? "text1" : "text2";
// };
const renderTaskRow = (i) => {
  document.getElementById(`row_${i}`).outerHTML = getRowContent(i, tasks[i]);
};
const getRowContent = (i, task) => {
  return `<tr id="row_${i}">
    <td>${i + 1}</td><td>${
    task.editMode
      ? `<input id="name_${i}" value="${task.name}" />`
      : task.name.trim()
  }</td>
    <td>${
      task.editMode
        ? `<input id="priority_${i}" value="${task.priority}" />`
        : task.priority
    }</td>
    <td>${
      task.editMode
        ? `<button onclick="save(${i})">Save</button><button onclick="cancel(${i})">Cancel</button>`
        : `<button onclick="editTask(${i})">Edit</button>`
    }</td>
    <td><button onclick="deleteTask(${i})">Delete</button></td>
    </tr>`;
};

const cancel = (i) => {
  tasks[i].editMode = false;
  renderTaskRow(i);
};

const save = (i) => {
  tasks[i].name = document.getElementById(`name_${i}`).value;
  tasks[i].priority = document.getElementById(`priority_${i}`).value;
  tasks[i].editMode = false;
  renderTaskRow(i);
};

const saveAll = () => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].editMode) save(i);
  }
};

const editTask = (i) => {
  tasks[i].editMode = true;
  renderTaskRow(i);
};

const getHighestPriority = () => {
  if (tasks.length == 0) return null;
  let min = tasks[0].priority;
  let minI = 0;
  for (let i = 1; i < tasks.length; i++) {
    if (min > tasks[i].priority) {
      min = tasks[i].priority;
      minI = i;
    }
  }
  return tasks[minI];
};
