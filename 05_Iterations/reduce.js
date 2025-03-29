// reduce : method :mainly used in cart

const arr = [1,2,3,4,5]

const initialVal = 0

// const sumWithInitial = arr.reduce((acc,curVal)=> acc + curVal, initialVal)
// .reduce(callback fun=>(acc,curVal)=> operation, initialVal)
// for the first time only we have to give initial/prev val, next time onward it will take the operation val, after iterating the whole array it will return 

// const sumWithInitial = arr.reduce(function (acc,curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal} `);
//     return acc + curVal
// }, 0)


const sumWithInitial = arr.reduce((acc,curVal)=> {
    console.log(`acc: ${acc} and curVal: ${curVal} `);
    return acc + curVal
}, initialVal)
console.log(sumWithInitial);