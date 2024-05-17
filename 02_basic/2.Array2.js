// const marvelheros= ["spiderman", "dr.strange","hulk"]

// const dcheros =["groot", "batman","superman"]

// const newarry = marvelheros.concat(dcheros)
// // console.log(newarry[0]);

// const allheros= [...marvelheros,...dcheros] // another method of concating array
// console.log(allheros);


// const another_array= [1,2,3,4,[2,3],[4,5],[5,7]] // compress all the arrays into one
// console.log(another_array.flat(Infinity));

console.log(Array.isArray("Hitesh")) // isarray is use to check wheather the following data is array or not
console.log(Array.from("Hitesh")) // array.from is used to convert the data of any datatype into array
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// combine 2 or more variables into one array for that array.of method is used