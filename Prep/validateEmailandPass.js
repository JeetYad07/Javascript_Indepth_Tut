function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

function validatePassword(pass){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(pass);
}

console.log(validateEmail('jeetb.yadav11@.gmail.com'));
console.log(validatePassword('Jeet@123'));
