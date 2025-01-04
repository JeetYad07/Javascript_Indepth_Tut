class User{
    constructor(username){
        this.username  = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    // static prevent child to access parent prop
   static createID(){
        return `1232`
    }
}

const chai = new User("chai","chai@gmail.com","123")
// chai.logMe()
// console.log(chai.createID())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }

}

const iphone = new Teacher("iphone","i@iphone.com")
// console.log(iphone);
iphone.logMe()
// console.log(iphone.createID())
