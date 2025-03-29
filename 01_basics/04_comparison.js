 // Basic comparison
//  console.log(2>1);
//  console.log(2<1);
//  console.log(2 <= 4);
//  console.log("2" > 1);
//  console.log(typeof("2" > 1));
//  console.log("02" > 1);

// we have to avoid this type of comparison and conversion
// console.log(null > 0); // false  // because relational operator convert null into 0 so 0 > 0 : false
// console.log(null == 0); // false  // but here equality operator works differently it didn't convert it to 0
// console.log(null >= 0); // true  // again relational operator convert null : 0

/**
 * The reason why line 12 prints true : It is because equality check == and comparison > < >= <=
 * work differently.
 * Comparisons convert null to a number, treating it as 0.
 * That's why (3) null >=0 is true and (1) null > 0 is false
 */
// console.log(undefined == 0);  false
// console.log(undefined > 0); false
// console.log(undefined < 0); false

// === stict check (check value and data types)
