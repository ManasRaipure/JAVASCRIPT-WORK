// const promiseone= new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("promise is created")
//         resolve()
//     },1000)
// })

// promiseone.then(function(){
//     console.log("promise is consumed");
// })

// new Promise (function( resolve , reject){

//     setTimeout(()=>{
       
//         console.log("promisetwo is created")
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("promise two is consumed")
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//     console.log("promise three is created");
//     resolve({username: 'manas' , email:'manas@gmail.com'})
//     },1000)

// }).then(function(user){
// console.log(user);
// })


// const promisefour = new Promise(function(resolve , reject){
//   let error = false
//   if (!error) {
    
//     resolve({usename:'manas' , password : 123})
//   }
//   else{
//     reject("ERROR is detected")
 
//  }
// })

// promisefour
// .then(function(user){
//     console.log(user)
//     return user.password

// })
// .then(function(usename){
//   console.log(usename)
// })
// .catch(function(error){

//     console.log(error)

// })
// .finally(()=> console.log('finally something is printing'))   it is a example of promise chaining



const promisefive = new Promise(function(resolve , reject){
    let error = false
    if (!error) {
      
      resolve({usename:'manas' , password : 123})
    }
    else{
      reject("ERROR is detected")
   
   }
  })

  async function promisefiveconsumed (){

   try {
    const response = await promisefive

    console.log(response)
   } catch (error) {
    console.log(error)
   }

  }
  promisefiveconsumed()


  async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            const data = await response.json()
        } catch (error) {
            console.log("E: ", error);
        }
    }
    
    getAllUsers()
    
    // fetch('https://api.github.com/users/hiteshchoudhary')
    // .then((response) => {
    //     return response.json()
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((error) => console.log(error))
    

