const number = document.getElementById("numberContainer");
const btnSubmit = document.getElementById("submitOne");
const result = document.getElementById("result");
let age;

 btnSubmit.onclick = function(){
age = number.value;
age = Number(age);
if (age >= 18) return result.textContent = `You are of legal age`;
if(age == 0) return  result.textContent =`You wrote incorrect`;
if(age < 0) return result.textContent =`It is false number of your age `;
if(age< 18) return result.textContent =`You are too young`;
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
        payResult.textContent = `You paid with a Visa`; 
    }else if(payPal.checked=== true){
        payResult.textContent = `You have paid PayPal`;
    } else if(masterCard.checked=== true){
        payResult.textContent = `You paid with a MasterCard`; 
    }else{
        payResult.textContent = `You have not paid yet`;  
    }

 };


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
    if(money >= 200) summeResult.textContent = `You get 20% discount, your amount: ${(money-(money * discountTwelve /100))}$`;
    return `You get no discount`;
    };

// // with Text 
// if(money >= 100){
//     summeResult.textContent= "You get 10% discount";
// }else if(money< 100) {
//     summeResult.textContent = "For discount you should  buy something for 100$";
// } if(money >= 200){
//     summeResult.textContent= "You get 25% discount";
// }};
// if(money >= 100){
//     summeResult = money - money * (discountTen/100);
// }else if(money< 100) {
//     summeResult.textContent = "For discount you should buy something for 100$";
// } if(money >= 200){
//     summeResult = money - money * (discountTwelve/100);
// }};




// //Console

let amount = 111;
let discount = amount >= 100 ? 10 : 0;
console.log(`Your total is $${amount - amount * (discount/100)}`);


//generatePassword
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
