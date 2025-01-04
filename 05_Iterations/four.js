// There is another way to iterarte object
// using forin loop

const coding = {
    'js':'javascript',
    'py':'python',
    'java':'java',
    'c++':'c++',
    'c#':'c#',
}

for (const val in coding) {
    // console.log(val);
    // console.log(`${val} shortcut is for ${coding[val]}`);
    
}

const programming = ["js",'rb',"java","c#"]
for (const key in programming) {
    // console.log(key);  // key will return index of the array
    // console.log(`${key} of the array ${programming[key]}`);
}

// Difference b/w for of and for in loop: for of loop will have the value, for in will have the keys

const map = new Map()
map.set('name', 'John')
map.set('age',21)
map.set('address','Ludhiana')

for (const key in map) {
//   console.log(key);
}
// map is not iteratable