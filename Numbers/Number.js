let enterFirstNumber = +prompt("Enter the first number", "");
let enterSecondNumber = +prompt("Enter the second number", "");

let sum = () => {
  return enterFirstNumber + enterSecondNumber;
};
alert(sum(enterFirstNumber, enterSecondNumber).toFixed(2));

let readNumber = () => {
  let userNumber;
  do {
    userNumber = +prompt("Enter a number", "");
  } while (userNumber === "" && userNumber);
};
