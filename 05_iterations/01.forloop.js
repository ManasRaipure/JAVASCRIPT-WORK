// for loop

// for (let index = 0; index <=10; index++) {

//     console.log(index)
    
// }

// for (let index = 0; index <=10; index++) {


//     if(index == 5){
//         console.log("5 is better")
//     }
//     console.log(index)
    
// }

// for (let i = 1; i<=10 ; i++) {
//     console.log(`outter loop: ${i}`)
    
//     for (let j = 1; j <=10; j++) {
//         console.log(`inner loop : ${j}`);

        
//     }
// }
// for (let i = 1; i<=10 ; i++) {
//     // console.log(`outter loop: ${i}`)
    
//     for (let j = 1; j <=10; j++) {
//         console.log(i + '*' + j +'=' + i*j);

        
//     }
// }

// const myaray = ["hulk","dr.strange", "spidy"]

// for (let index = 0; index < myaray.length ; index++) {
//     const element = myaray[index]
//     console.log(element);
    
// }


// break and continue

// for (let index = 0; index <=10; index++) {

//     if(index == 5){
//         break
//     }
//     console.log(index);    // in break the loop will stop before 5
// }
for (let index = 0; index <=10; index++) {

    if(index == 5){
        continue
    }
    console.log(index);    // in continue the loop will skip the 5 and continue the loop
}