
const arr = [10,2,3,4];
// map((val,index, arr)=> return new arr with values)
// arr.map((val,i,arr)=>{
// return val;
  
// })

// console.log(arr)
// polyfill: own implementation of js in built functions

// Array.prototype.myMap = function(cb){
//   // map -> return new Array
//   let temp = []
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i],i,this));
//   }
  
//   return temp;
  
// }

// arr.myMap((val,index, arr)=>{
//   return val;
// })

// filter((val,index,arr)=>return the res based on condition into a new arr)
// filter((val,index,arr)=>{
//   condition -> return res
// })
// const filterVal = arr.filter((val,index,arr)=>{
//   return val > 2
// })

// prototype for filter
// Array.prototype.myFilter = function(cb){
//   let temp = [];
// for(let i = 0; i<this.length;i++){
//   if(cb(this[i],i,this)) temp.push(this[i])
// }
// return temp;
// }


// console.log(arr.myFilter((val,index,arr)=>{
//   return val > 1
// }))


// Polyfill for reduce

// reduce((acc,curr,i,arr)=>{},initialVal) => return res of computation
// if acc = 0
// const res = arr.reduce(((acc,curr,i,arr)=> {
//   return acc + curr
// }), 0)

Array.prototype.myReduce = function(cb,initialVal){
  var accumulator = initialVal;
  for(let i = 0;i <this.length;i++){
    // if initialVal is not define then acc = first val of arr
    accumulator = accumulator?cb(accumulator,this[i],i,this):this[i];
  }
  return accumulator;
}
const res = arr.myReduce(((acc,curr,i,arr)=> {
  return acc + curr
}), 0)
console.log(res)









