let a = parseInt(document.getElementById("firstNum").value);
let b = parseInt(document.getElementById("secondNum").value);

document.getElementById("processValues").addEventListener("click", function () {
  let finalResult = a + b;

  document.getElementById("result").innerHTML = finalResult;
});
