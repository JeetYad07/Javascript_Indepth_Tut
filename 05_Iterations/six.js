// Limitation of forEach loop: By default it is not returning any values

const myArr = [1,2,3,4,5,6,7,8,9,10]

// const justArr =  myArr.forEach((item)=>{
//     // console.log(item)
//     return item
// });

//   console.log(justArr);

// some other methods: filter(callback fun => return an arr): it takes a callback fun and based on the conditions it perform operations and return val in array
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const val = myNums.filter( (item) => {
//     return item > 3
// } )
// console.log(val);

// using forEach loop,we can also achieve above fun
// const newNums = []
// myArr.forEach((num)=> {
//     if(num > 3){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const Books = [
    {name:'Book1',genere:"History",price:200},
    {name:'Book2',genere:"Novel",price:100},
    {name:'Book3',genere:"Scific",price:900},
    {name:'Book4',genere:"History",price:800},
    {name:'Book5',genere:"Geography",price:300},
    {name:'Book6',genere:"Maths",price:1000},
    {name:'Book7',genere:"History",price:1200}
]

const myBooks = Books.filter(
    (bk)=> 
  {  return bk.genere === 'History' && bk.price >= 1000
   }
    )
// console.log(myBooks);