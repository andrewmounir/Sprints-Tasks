let tasksArray = [
  ["Nathalie Nader Nabil", "Task 01", "Option 2"],
  ["Nathalie Nader Nabil", "Task 01", "Option 2"],
  ["Youssef Mohamed Ahmed Mohamed Youssef", "Task 01", "Option 1"],
  ["Salma Nasreldin", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy ahmed mostafa ", "Task 01", "Option 1"],
  ["Abdelhay Nader Abdelhay Abozayed", "Task 01", "Option 1"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Youssef Fathy Mahmoud", "Task 01", "Option 1"],
  ["Mark Bassem", "Task 01", "Option 1"],
  ["Anas Ahmed", "Task 01", "Option 1"],
  ["Adham Hesham", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["rola wafi", "Task 01", "Option 1"],
  ["Moataz Youssef", "Task 01", "Option 2"],
  ["Ahmad Salama", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["Ahmad Salama Abdelaziz", "Task 01", "Option 2"],
  ["Kareem Ramzi El-Tahlawi", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["rola wafi", "Task 01", "Option 2"],
  ["Mohamed Fahmi", "Task 01", "Option 1"],
  ["Mohamed Fahmi", "Task 01", "Option 2"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
  ["Nathalie Nader Nabil", "Task 01", "Option 1"],
  ["Mariam Ahmed", "Task 01", "Option 1"],
];

///get Unique names from the array of array using

const studentNames = [];
const studentNamesSet = new Set();
for (let i = 0; i < tasksArray.length; i++) {
  studentNamesSet.add(tasksArray[i][0]);
  //if (!studentNames.includes(tasksArray[i][0]))
  //studentNames.push(tasksArray[i][0]);
}
/* O(n * (2n)) = O(2n^2) = O(n2) */

console.log(studentNamesSet);

const studentsMap = new Map();
tasksArray.forEach((e) => {
  if (!studentsMap.has(e[0])) studentsMap.set(e[0], 0);
  studentsMap.set(e[0], studentsMap.get(e[0]) + 1);
});

console.log(studentsMap);
