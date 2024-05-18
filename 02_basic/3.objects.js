
// object literals


const mysym = Symbol("key1")

const jsuser = {
    name : "Manas",
    email: "www.manas@gmail.com",
    [mysym] : "key1",
    age: 21,
    userloggedIn : false,
    lastlogged: ["sunday", "saturday"]
}
jsuser.email = "www.mans@yahoo.com"
// console.log(jsuser.name); // 1st way pf calling the object 
// console.log(jsuser["email"]) // another way calling the objects
// console.log(jsuser["age"])
// console.log(jsuser[mysym])

// console.log(jsuser.email);

// Object.freeze(jsuser)

// jsuser.email = "www.mans@skype.com"
// console.log(jsuser.email);

// console.log(jsuser);

   jsuser.greeting = function(){
    console.log("how are you");
 }

 jsuser.greetingtwo = function(){
    console.log(`hello my name is ${this.name}`);
 }
 console.log(jsuser.greeting());
 console.log(jsuser.greetingtwo());

 


