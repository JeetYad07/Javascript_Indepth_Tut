const accountId = 11343;
let accountEmail = "jeetb.yadav11@gmail.com";
var accountPassword = "1234";
accountCity = "Bengaluru" // not a good way to assign

let accountState;

// accountId = 32132 : TypeError: Assignment to constant variable. :  This is not allowed
// accountEmail = "jeet@gmail.com"
// accountPassword = "12121211213"
// accountCity = "Ludhiana"
/*  
    Prefer not to use var
    : Because of issue in block scope and functional scope 
*/

// console.log(accountId);
// console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

for(let i = 0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    },2000)
}

// for(var i = 0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }