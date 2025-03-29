const marvel_heroes = ["thor","Ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

marvel_heroes.push(dc_heroes); // push in the original arr
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); // not recomended to use

// const all_heroes = marvel_heroes.concat(dc_heroes) // concat returns a new array
// console.log(all_heroes);

//spread operator: A glass if it fell down, it will be broken into pieces, spread will take out the values of array into single elements
// const all_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes);
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] // to convert above nested array into a single array
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Jeet"))
// console.log(Array.from("Jeet")) // convert any value into Array
// console.log(Array.from({name:"Jeet"})) // intersting case/ Interview : It will return empty[], because we didn't specify the key value array type

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


