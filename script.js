function validateForm(event) {
    let password = document.getElementById("password").value;

    if (!isPasswordValid(password)) {
        alert("Password must be exactly 9 characters long, with 4 chars contain and 3 numbers, 1 symbol (@#$%^&*), and have one uppercase letter.");
        event.preventDefault();
    }

}


function isPasswordValid(password) {
    if (password.length != 9) return false;

    let numberOfLowerCaseChars = 0;
    let numberOfUpperCaseChars = 0;
    let numberOfDigits = 0;
    let numberOfSymbols = 0;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (/[a-z]/.test(char)) {
            numberOfLowerCaseChars++;
        } else if (/[A-Z]/.test(char)) {
            numberOfUpperCaseChars++;
        } else if (/\d/.test(char)) {
            numberOfDigits++;
        } else {
            numberOfSymbols++;
        }
    }
    return numberOfLowerCaseChars == 4 
    && numberOfUpperCaseChars == 1 
    && numberOfDigits == 3 && 
    numberOfSymbols == 1;
}




