
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
        textResult.textContent = `You are not subscribe`;
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

//  const submitTwo.onclick = (subscribe.checked)={
//     if(subscribe.checked) textResult.textContent = `You are subscribe`{
//         return `You are not subscribe`;
//     }
//     if(visa.checked) payResult.textContent = `You have paid with Visa`; 
//     if(payPal.checked) payResult.textContent =  `You have paid payPal`; 
//     if(masterCard.checked) payResult.textContent =  `You have paid with MasterCard`; 
//  }


// let user = false;
// let isYouserLoggined = user ? 'yes' : `no`;
// console.log(isYouserLoggined);


const price = document.getElementById(`price`);
let submitButton = document.getElementById(`submitButton`);
const summeResult = document.getElementById(`summeResult`);
let money;
const discountTen = 100;
const discountTwelve = 200;
submitButton.onclick = () =>{
money =price.value;
money =Number(money);
console.log(money);
 if(money >= 100 && money< 200) summeResult.textContent = `${money / discountTen - money}`;
    if(money >= 200) summeResult.textContent = `${money - (money / discountTwelve)}`;
    return `You get no discount`;
    };

// //Text 
// if(money >= 100){
//     summeResult.textContent= "You get 10% discount";
// }else if(money< 100) {
//     summeResult.textContent = "For discount you should  buy somrthing on 100$";
// } if(money >= 200){
//     summeResult.textContent= "You get 25% discount";
// }};
// if(money >= 100){
//     summeResult = money - money * (discountTen/100);
// }else if(money< 100) {
//     summeResult.textContent = "For discount you should  buy somrthing on 100$";
// } if(money >= 200){
//     summeResult = money - money * (discountTwelve/100);
// }};




// //Console

let amount = 111;
let discount = amount >= 100 ? 10 : 0;
console.log(`Your total is $${amount - amount * (discount/100)}`);

let phonenumber = `123456`;
phonenumber=phonenumber.padStart("15", " 0");
console.log(phonenumber);

const fullName = `Sofiia Nykonovych`;
let firstName = fullName.slice(0, 5);
let lastName =fullName.slice(7, 17);
let firstChar = fullName.slice(1,4);
let lastChar = fullName.slice(6);

console.log(firstName);
console.log(lastChar);

const email = "sofinik@gmail.com";
userName = email.slice(0, email.indexOf(`@`));
extension = email.slice(email.indexOf(`@`) )
console.log(userName);
console.log(extension);
 

const message = "Good nignt Mau";
let  first = message.slice(11, 14);
console.log(first);