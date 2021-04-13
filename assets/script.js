// Assignment Code
var generateBtn = document.querySelector("#generate");

//special caracter string declared
var specialCharacterStr = ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

//number string declared
var numbersStr = '0123456789';

//alphabet string declared
var alphabetLowerCaseStr = 'abcdefghijklmnopqrstuvwxyz'

//alphabet uppercase string declared
var alphabetUpperCaseStr = alphabetLowerCaseStr.toUpperCase();

//function that generates the password
function generatePassword() {
  requestLength();
  if (lengthPassword === null) {
    // writePasswordAgain(); trying to define a message to avoid undefined
    return;
  }
  requestSC();
  requestNumbers();
  console.log(`${lengthPassword}, ${specialCharacters} and ${numbers}`);
  if (specialCharacters && numbers) { //if user wants special characters and numbers
    var rndStr = specialCharacterStr.concat(numbersStr, alphabetLowerCaseStr, alphabetUpperCaseStr); //concatenates all the characters
    console.log (rndStr);
  } else if (specialCharacters) { //if user wants only special characters
    var rndStr = specialCharacterStr.concat(alphabetLowerCaseStr, alphabetUpperCaseStr); //concatenates characters
    console.log (rndStr);
  } else if (numbers) { // if user wants only numbers
    var rndStr = numbersStr.concat(alphabetLowerCaseStr, alphabetUpperCaseStr); //concatenates characters
    console.log (rndStr);
  } else {  //if user only wants letters
    var rndStr = alphabetLowerCaseStr.concat(alphabetUpperCaseStr); //concatenates characters
    console.log(rndStr); // to be deleted soon
  }
  //build the password string
  password =  rndStr.charAt(Math.floor(Math.random() * rndStr.length));
  for (var i = 0; i < lengthPassword-1; i++) {
     password = password + rndStr.charAt(Math.floor(Math.random() * rndStr.length));
  }


  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//  ==========================================================
//  Ask in class. trying to give a message or avoid undefined
//  ==========================================================
// function writePasswordAgain() {
//   console.log('this ran');
//   document.getElementById('#password').innerHTML = 'please generate password again';
// }
// if (typeof passwordText.value !== "undefined") {
// }

// initializes length of password
var lengthPassword;
//function request character length
function requestLength() {
  lengthPassword = prompt('Please choose the length of the password (between 8-128)');
  // If user pressed Cancel, immediately end function
  if (!lengthPassword) {
    return;
  }
  if ( lengthPassword > 128 || lengthPassword < 8 || isNaN(lengthPassword) ) {
    requestLength();
  }
}

// initializes spacialCaracters boolean
var specialCharacters;
//funtion request if special characters
function requestSC() {
    specialCharacters = confirm('Press OK if you want special characters on your password')
}

// initializes numbers boolean
var numbers;
//funtion request if numbers
function requestNumbers() {
    numbers = confirm('Press OK if you want numbers on your password')
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

