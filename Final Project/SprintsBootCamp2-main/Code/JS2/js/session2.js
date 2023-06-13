"use strict";
let trials = 3;
const checkPassword = () => {
  const password = document.getElementById("password").value;
  if (password === "123") {
    document.getElementById("result").innerHTML = "Login Succeeded";
    document.getElementById("result").classList.add("success");
  } else {
    trials -= 1;
    //Login (3 trials)
    // let x = "Login (" + trials + " trials)";
    // x = `Login (${trials} trials)`
    document.getElementById("login").innerHTML = `Login (${trials} trials)`;
    if (trials <= 0) {
      document.getElementById("result").innerHTML = "Login Failed";
      document.getElementById("result").classList.add("danger");
      document.getElementById("login").setAttribute("disabled", "disabled");
    }
  }
};
