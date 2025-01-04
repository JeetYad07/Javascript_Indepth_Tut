// let myName = "Jeet       "
// let changeMyName = "chai       "
// console.log(myName.truelength)

const myHeros = ["thor","spiderman"]

const heroPower = {
    "thor":"hammer",
    "spiderman":"sling",

    getSuperPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// heroPower.protoype.jeet : without this
Object.prototype.jeet = function(){
    console.log(`Jeet is present in all objects`);
    
}

// heroPower.jeet()
// myHeros.jeet()

// Prototype: (Array, function, String) --> Object --> null

// Now I wanted to inject superpowe one step above
Array.prototype.heyJeet = function(){
    console.log(`Hey jeet is present in myHero`);  
}

// myHeros.heyJeet()
// heroPower.heyJeet()

// Inheritence
const User = {
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modernsyntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "chaiaurcode"

String.prototype.trueLength =  function(){
    console.log(`${this}`)
    // console.log(`${this.name}`);
    console.log(`True Length is ${this.trim().length}`)
    
}
anotherUserName.trueLength()
"jeetyadav".trueLength()
"chai".trueLength()