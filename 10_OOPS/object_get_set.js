const User = {
    _email:"j@gamil.com",
    _password:"jeet@123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

// factory func
const tea = Object.create(User)
console.log(tea.email);
