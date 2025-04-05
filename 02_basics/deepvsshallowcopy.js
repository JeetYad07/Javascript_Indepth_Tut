// Shallow Copy → Copies only the references of nested objects, not the actual objects.
// Deep Copy → Creates a completely new copy, including all nested objects.

// shallowCopy example
const original = {
    name:"Jeet",
    details:{age:25,city:"Ludhiana"}
  }
  
  console.log('firstO',original)
  
  const shallowCopy = {...original}
  shallowCopy.details.age = 26
  
  console.log('shall: ',shallowCopy)
  
  // Deep copy
  const deepCopy = JSON.parse(JSON.stringify(original))
  
  deepCopy.details.age = 27
  console.log('Original',original)
  console.log('deepcopy',deepCopy)


  let originalArr = [1,2,[3,5]];

// Shallow copy
// const shallowCopy = originalArr.slice()
// shallowCopy[2][0] = 99

// deep copy


// let deepCopy = JSON.parse(JSON.stringify(originalArr));
// deepCopy[2][0] = 88;
// console.log(originalArr)
// console.log(deepCopy)