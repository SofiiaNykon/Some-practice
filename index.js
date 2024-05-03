
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
const btnSubmit = document.getElementById("submit");
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
 const card = document.getElementById(`card`);
 const payPal = document.getElementById(`pal`);
 const submit = document.getElementById(`submit`);
 const textResult = document.getElementById(`textresult`);

 submit.onclick = function(){
    if(subscribe.checked){
        textResult.textContent = `You are subscribe`;
        console.log( `You are subscribe`);
    } else{
        textResult.textContent = `You are not sunscribe`;
        console.log(`You are not sunscribe`);
    }
     if(visa.checked){
        textResult.textContent = `You have Visa`; 
        console.log(`You have Visa`);
    }else if(payPal.checked){
        textResult.textContent = `You have payPal`;
        console.log(`You have payPal`); 
    } else if(card.checked){
        textResult.textContent = `You have MasterCard`; 
        console.log(`You have MasterCard`); 
    }else{
        textResult.textContent = `You have not choose`;  
        console.log(`You have not choose`);  
    }

 }
 console.log(submit.onclick());