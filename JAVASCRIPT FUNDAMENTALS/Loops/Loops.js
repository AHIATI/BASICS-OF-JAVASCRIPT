//outputing even numbers from 2 to 10
for(i=2;i<10;i++){
  if(i%2 === 0){
    alert(i);

  }
}

 // outputing numbers from 0 to 3
let i = 0;
while (i < 3){
  alert(`number ${i}!`);
  i++
}

let askUserForInput;
do {
  askUserForInput = prompt("Enter a number greater than 100", "");
} while (askUserForInput <= 100 && askUserForInput) ;

