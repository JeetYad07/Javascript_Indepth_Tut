function setUsername (username){
    this.username  = username
    console.log(`Called`);  
}

// Above method afterexecution, getting removed from call stack, also it is wipping the username which has been passed,
// to remember the refernec after completion: we need to user call()
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("Chai","chai@fb.com","123")
console.log(chai);
