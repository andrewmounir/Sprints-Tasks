const oldArray = [
  "Andrew",
  "Ahmed",
  "Hesham",
  "Andrew",
  "Hesham",
  "Andrew",
  "Ahmed",
  "Hesham",
  "Andrew",
  "Hesham"
];
const newArray = [];
let convertToUniqueArray = function (oldArray) {
  let enhancedHashSet = {};

  for (let i = 0; i < oldArray.length; i++) {
    addToHashSet(oldArray[i]);
  }

  for (const element in enhancedHashSet) {
    // console.log(element);
    newArray.push(element);
  }
  function addToHashSet(element) {
    enhancedHashSet[element] = true;
  }
  console.log(newArray);
  return newArray;
};

convertToUniqueArray(oldArray);
