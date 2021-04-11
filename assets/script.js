// Assignment Code
var generateBtn = document.querySelector("#generate");

//function that generates the password
function generatePassword() {
  requestLength();
  requestSC();
  requestNumbers();
  console.log(`${lengthPassword}, ${specialCharacters} and ${numbers}`);
  return 'yourpassword';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// initializes length of password
var lengthPassword;
//function request character length
function requestLength() {
  lengthPassword = prompt('Please choose the length of the password (between 8-128)');
  if ( lengthPassword > 128 || lengthPassword < 8 ) {
    requestLength();
  }
}

// initializes spacialCaracters boolean
var specialCharacters;
//funtion request if spacial characters
function requestSC() {
    specialCharacters = confirm('Press OK if you want special characters on your password')
}

var numbers;
//funtion request if numbers
function requestNumbers() {
    numbers = confirm('Press OK if you want numbers on your password')
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

