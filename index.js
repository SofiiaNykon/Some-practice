
const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 3;
const max = 10;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}

// let isStudent = false;
// if(isStudent){
//     console.log("You are a student");
// } else{
//     console.log("You are not a student");
// }

// let age = 18;
// let hasLense = false;
// if(age >= 16){
//     alert("You are enougth old");
//     if(hasLense) {
//         console.log("You have it");}
//         else{
// console.log("Unfortunately no!");
//         }
    
// }
// else{
//     alert("Tou are too young");
// }

let age = 13;
let isLoggened = true;
if(age>= 18){
    console.log("Welcome here");
}else{
    console.log("Sorry. you are not 18 y.o.:(");
}
if (isLoggened){
   window.log("You should sign up here")
} else {
    alert("You have alredy loggened person")
}