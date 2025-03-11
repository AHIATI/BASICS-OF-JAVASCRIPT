let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Peter";
delete user.name;

let isEmpty = function (obj){
  for(let key in user){
    return false;
  }
  return true;
};

let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = alert(salaries.John + salaries.Ann + salaries.Pete);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  };
}