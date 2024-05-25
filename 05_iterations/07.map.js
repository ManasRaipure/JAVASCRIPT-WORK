const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnum = myNumers.map((num)=>{
    return num + 1
}).map((num)=>{
    return num+1
}).filter((num)=>{
    return num>=5
})

console.log(newnum)