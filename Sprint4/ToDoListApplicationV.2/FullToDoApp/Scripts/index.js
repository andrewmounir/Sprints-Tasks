let taskList = [];

let addTask = function () {
  const taskName = document.getElementById(`taskName`).value;
  const priority = document.getElementById(`priority`).value;

  let taskObject = {
    Name: taskName,
    order: priority
  };

  if (validate(taskObject)) {
    addtoArray(taskObject);
    renderTable();
  } else {
    alert(`again `);
  }
};

let validate = function (taskObject) {
  if (taskObject.Name && taskObject.order !== null) {
    return true;
  } else {
    return false;
  }
};

let addtoArray = function (taskObject) {
  taskList.push(taskObject);
};

let renderTable = function () {
  let tb = document.getElementById(`myTable`);
  let tbody = "";
  for (let i = 0; i < taskList.length; i++) {
    tbody += `<tr> <td>${i + 1}</td> <td>${taskList[i].Name}</td> <td>${
      taskList[i].order
    }</td> <td><button onclick= "editText(${i})"> edit</button></td>  <td><button onclick="deleteRow(${i})">Delete</button></td></tr>`;
  }
  document.getElementById("myTable").innerHTML = tbody;
};

// Delete Button

deleteRow = function (i) {
  taskList.splice(i, 1);
  renderTable();
};

//Sort Button

sortTable = function () {
  taskList.sort((a, b) => {
    return b.order - a.order;
  });
  renderTable();
};



