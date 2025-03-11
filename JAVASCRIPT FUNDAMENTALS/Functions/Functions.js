/* Rewrite the function using '?' or '||'
importance: 4
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||*/


let age = +prompt("Enter your age",'');

function checkAge(age){
 return (age > 18)? true :  confirm('Did parents allow you?');
}


let a = +prompt("Enter your first number");
let b = +prompt("Enter your second number");
function min(a,b){
 return  (a < b) ? a  : b;
}
alert("The minimum number is : " + min(a,b));


let base  = +prompt('Enter the base of the number');
let exponent = +prompt('Enter the number to be the exponent');

function calculatePower(base,exponent){
  return base**exponent;
}
alert(`The results of ${base} to the power ${exponent} is : ${calculatePower(base,exponent)}`);