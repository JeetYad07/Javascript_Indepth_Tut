//array

const myArr = [0,1,2,3,4,5];
// javascript array are resizable
// console.log(myArr[0]);
// array object follow the Shallow copy pattern/ meaning original and copy array both shares the same reference.
const myHeros = ['Shaktiman','joy']
// console.log(myHeros);
const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);
// array methods
myArr.push(6) // insret the value in original array
// console.log(myArr);
myArr.pop();  // remove the last value of array
// console.log(myArr);
// console.log(myArr.length);

myArr.unshift(0) // insert the value at the begining of the array because of this other value of array shifts right
// console.log(myArr);
myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

const newArr = myArr.join()  // add all elements of array into strings
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice
// console.log("A ",myArr);
const myArr3 = myArr.slice(1,4) // return the value of array from the original arr
// console.log(myArr3);
// console.log("B ",myArr);
const myArr4 = myArr.splice(1,3)
console.log(myArr4);
// console.log("C ",myArr);
// Key difference: Slice: return the copy of original array based on the index, start and end, donot includes the last index: donot change the original array
// Splice:remove the elements from the original array, based on the index start and end