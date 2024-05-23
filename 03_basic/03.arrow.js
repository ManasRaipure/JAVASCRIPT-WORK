const user = {
    username: "manas",
    price: 999,

    welcomemessage: function (){
        console.log(`${this.username} , thanks for login`)
        // console.log(this); //this keyword refers to current context
    }
}

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// console.log(this)

// function chai (){
//      let username = "manas"
//     console.log(this)
// }

// chai()


// const addnum = (num1 , num2)=>{
// return num1 +num2
// }

// console.log(addnum(2,2));


const addnum = (num1 , num2)=>(num1 +num2) //implecit return in this there's no need of writing thr return keyword and in explecit we need to write the return keyword.
    
    
    // console.log(addnum(2,2));


    const myname = ()=>({username:"manas"})

console.log(myname())
