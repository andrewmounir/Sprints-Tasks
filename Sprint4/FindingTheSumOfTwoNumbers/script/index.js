let a = document.getElementById("firstNum");
let b = document.getElementById("secondNum");

document.getElementById("processValues").addEventListener("click", function () {
  let finalResult = parseInt(a.value) + parseInt(b.value);

  document.getElementById("result").innerHTML = finalResult;
  if (isNaN(finalResult)) {
    alert(`please input a number in and b`);
  }
});
