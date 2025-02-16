let userAgeConfirmation = confirm("Please you confirm you are 18 years old and you are eligible to view this");

let askUserName = prompt("What is your name?", "");
let askUserAge = prompt ("What is your age", "");

if(askUserAge < 18){
  alert("Come next time, the page is for Adults ");
  }
else{
  alert(`You are welcome ${askUserName}`);
}