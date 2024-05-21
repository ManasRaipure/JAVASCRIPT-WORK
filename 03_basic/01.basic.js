
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username){
    if(username=== undefined){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())



// function calculatecart (...args){ // rest parameter
//     return args

// }
// console.log(calculatecart(100,200,300,400,500));


// const myobj = {
//     username:"manas",
//     price:100


// }

// function getobject (anyobject){
//     console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
// }
// getobject(myobj)



// function getobject (anyobject){
//     console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
// }
// getobject({
//     username:"kill",
//     price:"100"
// })


const myarray = [100,200,300,400]

function Findarray(anyarray){

    return anyarray[1]

}
console.log(Findarray([100,300,400]))



