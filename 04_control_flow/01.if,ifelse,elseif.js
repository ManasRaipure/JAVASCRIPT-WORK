// const userisloggedin = true

// if (userisloggedin){
//     console.log("user is logged in")
// }

// const temperature = 40

// if(temperature !== 41){
//     console.log("temperature is less than 40")
// }
// else{
//     console.log("temperature is greater than 40")
// }

// <, >, <=, >=, ==, !=, ===, !== 

// != : means not equal too , 

// const score = 200

// if (score>100){
//     const power = "immortal"
//     console.log(`super power: ${power}`)
// }

// console.log(power)  concept of scope

// const balance = 1000

// // if (balance > 500) console.log("test"),console.log("test2"); you can write code in this way too but it is not the right way

// if(balance < 500){
//     console.log("balance is less than 1000");
// }else if (balance <650){
//     console.log("balance is less than 1000");

// }else if(balance <800){
//     console.log("balance is less than 1000");

// }
// else{
//     console.log("balance is greater than 1000")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("user is logged in")   // in && operator both the conditons must be true
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user is logged in");  // in || (or) operator any conditon needs to be true
}