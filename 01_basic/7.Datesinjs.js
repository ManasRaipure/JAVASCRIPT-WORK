const date= new Date()
// console.log(date);
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());


const mydate = new Date(2024 , 4 , 17)
// console.log(mydate.toDateString())

// let mytimestamp = new Date()
// console.log(mytimestamp.getTime());
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.toLocaleDateString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
