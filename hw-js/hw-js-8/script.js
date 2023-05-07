//1//
function upperCase(string) {
    return string[0] === string[0].toUpperCase()
        ? "String's starts with uppercase character"
        : "String's not starts with uppercase character";
}


//2//
function checkEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  }

//3//
const inputString = "Java Script";
const outputString = inputString.replace(/^(\w+)\s+(\w+)$/, "$2, $1");
console.log(outputString); 

//4//
function validateCardNumber(cardNumber) {
    const regex = /^(\d{4}-){3}\d{1,4}$/;
    return regex.test(cardNumber);
  }

//5//
function checkEmail(email) {
    const regex = /^[A-Za-z0-9]+([_\-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    
    if (regex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  }

//6//
function checkLogin(str) {
    const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    const isLoginValid = loginRegex.test(str);
  
    const numbersRegex = /[0-9]+(\.[0-9]+)?/g;
    const numbersArray = str.match(numbersRegex);
  
    return isLoginValid && numbersArray !== null;
  }