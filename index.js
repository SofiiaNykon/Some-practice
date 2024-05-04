
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

// let age = 13;
// let isLoggened = true;
// if(age>= 18){
//     console.log("Welcome here");
// }else{
//     console.log("Sorry. you are not 18 y.o.:(");
// }
// if (isLoggened){
//    window.log("You should sign up here")
// } else {
//     alert("You have alredy loggened person")
// }


const number = document.getElementById("numberContainer");
const btnSubmit = document.getElementById("submitOne");
const result = document.getElementById("result");
let age;

 btnSubmit.onclick = function(){
age = number.value;
age = Number(age);

if (age >= 18){
    result.textContent = `You suit to this work`;
}else if(age == 0 ){
    result.textContent =`You wrote incorrect`;
}else if(age < 0){
    result.textContent =`It is false number of your age `;
}else if(age< 18){
    result.textContent =`You are too young`;
}
 }


 const subscribe = document.getElementById(`checkbox`);
 const visa = document.getElementById(`visa`);
 const masterCard = document.getElementById(`mascard`);
 const payPal = document.getElementById(`pay`);
 const submitTwo = document.getElementById(`submitTwo`);
 const textResult = document.getElementById(`textresult`);
 const payResult = document.getElementById(`payresult`);

 submitTwo.onclick = function(){
    if(subscribe.checked === true){
        textResult.textContent = `You are subscribe`;
    } else{
        textResult.textContent = `You are not sunscribe`;
    }
     if(visa.checked === true){
        payResult.textContent = `You have paid with Visa`; 
    }else if(payPal.checked=== true){
        payResult.textContent = `You have paid payPal`;
    } else if(masterCard.checked=== true){
        payResult.textContent = `You have paid with MasterCard`; 
    }else{
        payResult.textContent = `You have not paid yet`;  
    }

 };
 console.log(submitTwo.onclick());