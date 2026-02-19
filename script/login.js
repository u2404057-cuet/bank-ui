console.log("login successful");
document.getElementById("login-btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number");
  const number = inputNumber.value;
  const inputPassword = document.getElementById("input-password");
  const password = inputPassword.value;
  console.log(number, password);

  if (number == "01797678762" && password == "1234") {
    window.location.assign("./home.html");
  } else {
    alert("login failed");
    return;
  }
});
