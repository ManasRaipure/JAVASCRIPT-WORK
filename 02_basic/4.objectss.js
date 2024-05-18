const tinder = {} // singleton object declaration (constructor)
tinder.name = "manas"
tinder.email = "manas@gmail.com"
tinder.age = 21
tinder.isloggedin = false


// // console.log(tinder)

// const Anotheruser = {
//     email:"manas@google.com",
//     name: {
//         fullname: {
//             firstname:"manas",
//             lastname:"raipure"
//         }
//     }

// }
// console.log(Anotheruser.name.fullname.firstname); nested objects



const obj1 = { a: 1, b: 2 }
const obj2 = { c: 1, d: 2 }
// const obj3 = {obj1 , obj2}

// const obj3 = {...obj1 ,...obj2} // spread method is used to concate the objects together
const obj3 = Object.assign({}, obj1, obj2) // another method for concating the objects
// console.log(obj3)


const user = [
    {
        id: 0,
        name: "akash"
    },
    {
        id: 1,
        name: "akshay"
    },
    {
        id: 2,
        name: "arjun"
    }
]
// console.log(user[1])


// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

// console.log(tinder.hasOwnProperty ('name')) // checks wheather the object contain the following values or not


// Object Destructuring


const course = {
    coursename: "javascript",
    price: 2000,
    courseteacher: "Manas"
}

// console.log(course.coursename)

const {coursename : name , price}= course // this is a method of object destructuring.
console.log(name , price)
// console.log(price)






