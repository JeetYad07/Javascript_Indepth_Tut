// Array specific loops
// for of

// ["","",""]
// [{},{},{}]


let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if(greet == " ") continue;
    // console.log(`Each char is ${greet}`);
    
}

// Data type map: is an object
// The Map object holds key-value pairs and remembers the original insertion order of the keys, contains unique value

const map = new Map()
map.set('name', 'John')
map.set('age',21)
map.set('address','Ludhiana')
// map.set('name', 'John')  // it will return unique values

// console.log(map)

// for (const key of map) {
//     // console.log(key);  // will return key value in an array
//     console.log(key[key]);
// }
for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}

const myObj = {
    'game1':'NFS',
    'game2':'football',
    'game3':'cricket'
}
// for (const obj of myObj) {
//     console.log(obj);
// }
// for (const [key,value] of myObj) {
//     console.log(key,':-',value)
// }
// Object is not iterable