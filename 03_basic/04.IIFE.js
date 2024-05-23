// immediately onvoked function expression (iife)

(function hello(){
    console.log("i am online")
}) ();


((name)=>{
    console.log(`${name} i am offline`)
}) ("manas")

// this is how we write two iffe functions always focus on semicolon.. and it used to prevent from the pollution spread by the global scope
