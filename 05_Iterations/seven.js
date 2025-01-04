// map: it automatically returns the value

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNum = myNums.map((num)=> num + 10)
// console.log(newNum);


// same thing todo using forEach
// const numArr = []
// myNums.forEach((num)=>{
//    numArr.push(num+10)

// })
// console.log(numArr);


// chaining
const newNum = myNums.
                    map((num)=>num*10)
                    .map((num)=> num + 2)
                    .filter((num)=> num >=40)

                    console.log(newNum);

                
                    