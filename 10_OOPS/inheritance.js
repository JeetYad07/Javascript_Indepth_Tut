class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserLogged in ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        // super(): this will take care of bind with parent along with current context
        super(username)
        this.email = email,
        this.password = password
    }

    addUser(){
        console.log(`A new course was added by user : ${this.username}`);
        
    }

    
}

const chai = new Teacher("chai","chai@gmail.com","123")
chai.logMe()
chai.addUser()
const masalaChai = new Teacher("masalaChai","masalaChai@gmail.com","1234")
masalaChai.logMe()
masalaChai.addUser()

console.log(chai === masalaChai)

console.log(chai instanceof Teacher)
console.log(masalaChai instanceof Teacher)