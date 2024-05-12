
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
const discountTen = 10;
const discountTwelve = 20;
submitButton.onclick = () =>{
money =price.value;
money =Number(money);
console.log(money);
 if(money >= 100 && money< 200) summeResult.textContent = `You get 10% discount, your amount:  ${(money-(money * discountTen / 100))}`;
    if(money >= 200) summeResult.textContent = `You get 20% discount, your amount: ${(money-(money * discountTwelve /100))}`;
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

// const email = "sofinik@gmail.com";
// userName = email.slice(0, email.indexOf(`@`));
// extension = email.slice(email.indexOf(`@`) )
// console.log(userName);
// console.log(extension);
 
//Method one
// const message = "Good nignt Mau";
// let  first = message.slice(11, 14);
// console.log(first);

// let userName = window.prompt("Enter your user name");
// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();


// let chap = userName.slice(1);

// chap =chap.toLowerCase();
// userName= letter+chap;
// console.log(userName);

//Mehtod 2

// let userName = window.prompt("Enter your user name");
// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);

// let name = ``;
// while(name === `` || name === Number) {
//     name = window.prompt(`Enter your name  `);
// }
// console.log(name);

// let isUserLoggined =false;
// let usersname;
// let password;
// while(!isUserLoggined){
//     usersname = window.prompt("Your user name");
//     password = window.prompt("Your password");
//     if(usersname==="myUser" && password==="mypassword"){
//         isUserLoggined = true;
//         console.log(`you did it`);} else{
//             console.log(`Please try again`);
//         }

// }

// for(let i = 10; i>0; i-=3){
//     console.log(i);
// }
// console.log(`Hurrey`);

for(let i = 0; i <= 20,i++;){
    if(i==13){
        continue;
    }else{
        console.log(i);
    }
}

let numb = [1, 2, 6, 3, 4, 5];
numb.reverse();
console.log(numb);

let myName = "Sofiia Nykonov";
let separate = [...myName].join("/");
console.log(separate);
let fruits  = [ "apple", "orange", "banana"];
let veget = ["carrot", "potato"];
// let foods =  [...fruits, ...veget, "egs"];
// console.log(foods);


// function openFridge(...foods){
//     console.log(...foods);
// }
function getFood(...foods){
    return foods;
}
const food1 ="pizza";
const food2 ="hamburger";
const food3 ="cushi";
const food4 ="soup";
// openFridge(food1, food2, food3);
const foods = getFood(food1, food2, food3);
console.log(foods);


// function sum(...numbers){
//     let result = 0;
//     for (let number of numbers){
//         result += number;
//     }
//     return result;
// }
function getAvarge(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result  / numbers.length;
}
const total = getAvarge(10, 110, 23, 70);
console.log(total);

function combineStrings(...strings){
    return strings.join(" -");
}
const fullMyName = combineStrings("Mr.", "Spongbpb", "Mauri");
console.log(fullMyName);

function generatePassword(length, includeSymbols, includeNumbers, includeUperCase, includeLowerCase){
   const lowercaseChars = "qwertyuioplkjhgfdsazxcvbnm";
   const uppercaseChars = "QWERTYUIOPLKJHGFDSAZXCVBNM";
   const numberChars = "0123456789";
   const symbolChars = "@/$%&*-=_+()!";
   let allowedChars = "";
   let password = "";
   allowedChars += includeLowerCase ? lowercaseChars : "";
   allowedChars += includeUperCase ? uppercaseChars : "";
   allowedChars += includeNumbers ? numberChars : "";
   allowedChars += includeSymbols ? symbolChars : "";
if(length<= 0){
return `(password length mist be at least 1)`;
}
if(allowedChars.length === 0){
    return `(At least 1)`;
}
for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars [randomIndex];
}
    return password;}


const passwordLength  = 10;
const includeNumbers = true;
const includeUperCase = true;
const includeLowerCase = true;
const includeSymbols = true;
const password = generatePassword(passwordLength,
     includeNumbers,
      includeUperCase,
       includeLowerCase, 
       includeSymbols);
console.log(`generate Password: ${password}`);