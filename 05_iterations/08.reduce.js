// const mynum = [1,2,3]

// const newnum = mynum.reduce ((accumulator , currentvalue)=>{
//     console.log (accumulator,currentvalue)
//     return accumulator + currentvalue
// },0)

// console.log((newnum));


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalamt = shoppingCart.reduce((acc , item)=>{
    return  acc + item.price
},0)

console.log((totalamt));

