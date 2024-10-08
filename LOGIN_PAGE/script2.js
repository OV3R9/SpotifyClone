function alercik() {
  alert("Not my problem :))");
}

let login = document.getElementById("login");
let psswd = document.getElementById("password");

function granted() {
  if (login.value == "User" && psswd.value == "123") {
    window.location.href = "../MAIN/index.html";
  } else {
    alert("Podaj poprawne dane!");
  }
}
