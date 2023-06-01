let taskName = document.getElementById("input1");
let priority = document.getElementById("input2");
let table = document.getElementById("myTable");
let presistData = [];
let counter = 0;

document.getElementById("beginApp").addEventListener("click", function () {
  let obj1 = {};
  obj1.name = taskName.value;
  obj1.pri = priority.value;
  presistData.push(obj1);

  addRow(counter, presistData[counter].name, presistData[counter].pri);

  counter++;
});

function addRow(counter, name, pri) {
  let row = document.createElement("tr");
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");

  c1.innerText = counter + 1;
  c2.className = "taskName"; // Add class name to identify the task name cell
  c2.innerText = name;
  c3.innerText = pri;
  c4.innerHTML = `<button class="editButton" data-row="${counter}">Edit</button> <button class="deleteButton" data-row="${counter}">Delete</button>`;

  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);

  table.appendChild(row);
}

$(document).on("click", ".deleteButton", function () {
  let row = this.getAttribute("data-row");
  let a = parseInt(row);
  presistData.splice(a, 1);
  counter--;
  table.deleteRow(a + 1); // Adjust row index to account for the table header

  // Update row numbers after deletion
  let rows = table.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    rows[i].cells[0].innerText = i;
  }
});

$(document).on("click", ".editButton", function () {
  let row = this.getAttribute("data-row");
  let number = parseFloat(row);

  let taskNameTd = table.rows[number + 1].cells[1]; // Get the task name cell of the corresponding row
  if (taskNameTd) {
    let input = document.createElement("input");
    let saveButton = document.createElement("button");

    input.type = "text";
    input.value = taskNameTd.innerText;
    taskNameTd.innerText = "";
    taskNameTd.appendChild(input);

    saveButton.type = "button";
    saveButton.innerHTML = "Save";
    taskNameTd.appendChild(saveButton);

    saveButton.addEventListener("click", function () {
      let updatedName = input.value;
      taskNameTd.innerText = updatedName;
    });
  }
});
