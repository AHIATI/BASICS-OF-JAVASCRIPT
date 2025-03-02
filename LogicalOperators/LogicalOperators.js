let askUserToLogin = prompt("Login with your details.", "");

if (askUserToLogin === "Admin") {
  let passWord = prompt("Enter your password", "");
  if (passWord === "TheMaster") {
    alert("You're welcome");
  } else if (passWord === "" || null) {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (askUserToLogin === "" || null) {
  alert("Cancelled");
} else {
  alert("I dont know you");
}
