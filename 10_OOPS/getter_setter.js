class User {
    constructor(email,password){
        this.email = email,
        this.password = password
    }
    get email(){
        return `${this._email}@jeet`
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const chai = new User("chai@gmail.com","absh")
console.log(chai.email)