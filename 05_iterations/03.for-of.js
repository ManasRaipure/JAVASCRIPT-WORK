// for of 

const arr = [1,2,3,4,5]

for (const array of arr) {
    // console.log(array)
}

const greeting = "helloworld!"

for (const greet of greeting) {

    // console.log(greet)
    
}

const map = new Map()

map.set('in', 'india')
map.set('us', 'united')
map.set('fr', 'france')

for (const [ key , value] of map) {

    // console.log(key, value)
    
}


const myobject = {
    game : "NFS",
    game2:"spiderman"
}

for (const games of myobject) {

    console.log(games);
    
}