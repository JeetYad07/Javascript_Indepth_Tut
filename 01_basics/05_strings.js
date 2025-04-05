const name = "Jeet-yadav"
// console.log(name1.toUpperCase());


const num = 51;

// console.log(name + num + " Ludhiana"); // string concat  // this type of concat should be avoid
// we should use literals
// console.log(`Hi My name is ${name} and my house number is ${num}`)

// another way to initilize string is using new keyword

const gameName = new String('jeet.pc');
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// const newGame = gameName.includes('j');
// console.log(newGame);

// trim method: remove extra spaces
const myNewGame = "  jeet   "
// console.log(myNewGame);
// console.log(myNewGame.trim());

//replace method :
// const url = "https://jeet_12_%20.com";
// console.log(url.replace("jeet", "heer"));

//find a specific char at any index
// const urlName = "jeet11@23.com";
// console.log(urlName.charAt(0));
// console.log(urlName.indexOf('@'));
// console.log(urlName.lastIndexOf('@'));
// console.log(urlName.substring(0,3)); // In substring it will not go the the last mentioned Index
// console.log(urlName.charCodeAt(0)); // char code ASCAII value
// console.log(urlName.repeat(3)); // if repeat(count),based on count, it will repeat the string, if passed count = 0,return empty string''

//split:if we wanted to convert a string in array: 
const urlName = "jeet-bahadur-yadav";
// console.log(urlName.split("-",1)); // it will return array of string

// const urlName = "";
// console.log(urlName.split('@')); // it will return empty string

const str1 = '    Saturday night plans';
// console.log(str1.startsWith('Sat',0));
// console.log(str1.endsWith('S', str1.length-1));
// console.log(str1.trimEnd())
// console.log(str1.trimStart())


const str = "Jeet"
// function removeDuplicates(str){



// }

// removeDuplicates(str)