// Singleton way to define object
// const user1 = new Object();
// console.log(user1);

const tinderUser = {}
tinderUser.name = "Jeet";
tinderUser.age = 25;
tinderUser.location = "Ludhiana";
// console.log(tinderUser);

// nested objects
const userFullName = {
    // email:"jeet@hmai.com",
    // password:"jeet123",
    fullName:{
        userName:{
            firstName:"Jeet",
            lastName:"Yadav"
        }
    }
    
}
// console.log(userFullName.fullName.userName.firstName);

// multiple objects concatenation
const user1 = {1:'a',2:'b'}
const user2 = {3:'a',4:'b'}
const user3 = {5:'a',6:'b'}
// const user4 = {user1,user2,user3} // it will be having nested objects
// another way is using Object.assign() method: syntax:
//  Object.assign(target,source): return a new object with all key values of all the
//  object and take consider obj1 as target object
// const user4 = Object.assign(user1,user2,user3)
// const user4 = Object.assign({},user1,user2,user3) //{}:target object,source: user1,user2,user3
//another is using spread operator
const user4 = {...user1,...user2,...user3}
// console.log(user4);

// access someparticular values from a nested objects
const user = [
    {name:"Jeet",age:25,location:"Ludhiana"},
    {name:"Jeet",age:25,location:"Ludhiana"},
    {name:"Jeet",age:25,location:"Ludhiana"},
    {name:"Jeet",age:25,location:"Ludhiana"},
    {name:"Jeet",age:25,location:"Ludhiana"},
]
// console.log(user[0].location)
// console.log(tinderUser);
// some other method
// console.log(Object.keys(tinderUser)); // it will return all the keys in a new array
// console.log(Object.values(tinderUser)); // it will return all the values in a new array
// console.log(Object.entries(tinderUser)); // it will return all the key value pairs in a new array
// console.log(tinderUser.hasOwnProperty('IsLogg'))

// destructuring

const course = {
    courseName:"Java",
    courseInstructor:"Jeet",
    courseDuration:"6 months",
}

// access individual value of object
// course.courseDuration  :normal way
// const {courseName,courseInstructor,courseDuration} = course //destructuring way
// console.log(courseDuration);