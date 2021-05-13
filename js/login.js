const username = document.getElementById("username");
const password = document.getElementById("password");

form.onsubmit = function login(event) {
  event.preventDefault();
  if (username.value == "user" && password.value == "admin") {
    location.href = "dont-cry.html";
  } else {
    alert("Invalid username/password!");
  }
  username.value = "";
  password.value = "";
};
