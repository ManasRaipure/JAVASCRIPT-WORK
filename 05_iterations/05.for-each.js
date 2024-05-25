const  coding = ['js','py','cpp','ruby']

// coding.forEach((item) => {
    // console.log(item)
// })

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)


coding.forEach((item, index , arr)=>{
    // console.log(item,index,arr)
})


const mypbject = [
    {
        languagename : "python",
        languageextension:"py"
    },
    
    {
        languagename : "javascript",
        languageextension:"js"
    },
    
    {
        languagename : "ruby",
        languageextension:"rb"
    }
    
    

]

mypbject.forEach((items)=>{
    console.log(items.languagename )
})