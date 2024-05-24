const useremail = true
if(useremail){
    console.log("user has email")
}
else {
    console.log("user does not has email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


const emptyarray = []
if(emptyarray.length===0){
    console.log("array is empty")
}

const emptyobj = {}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty")  // object.keys converts the object into string
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// terniary operator

// condition ? true : false

const score = 300 

score < 100 ? console.log("score is greater than 100"): console.log("score is less than 100")




