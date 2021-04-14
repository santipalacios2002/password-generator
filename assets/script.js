// Assignment Code
var generateBtn = document.querySelector("#generate");
//special caracter string declared
var specialCharacterStr = ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
//number string declared
var numbersStr = '0123456789';
//alphabet lowercase string declared
var alphabetLowerCaseStr = 'abcdefghijklmnopqrstuvwxyz'
//alphabet uppercase string declared
var alphabetUpperCaseStr = alphabetLowerCaseStr.toUpperCase();
//random string declared
var rndStr = '';

//function that generates the password
function generatePassword() {
  requestLength();
  
  // === if use hits cancel, this changes the placeholder info to Please try again ===////
  if (lengthPassword === null) {                                                      ////
    var x = document.getElementById('password').placeholder;                          ////
    x = 'Please try again';                                                           ////
    return x                                                                          ////
  }                                                                                   ////
  //==================================================================================////

  requestSC();
  requestNumbers();
  requestLowerCase();
  requestUpperCase();

  if (rndStr.length === 0) {
    alert('You must choose at least one character type');
    generatePassword();
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

// initializes length of password
var lengthPassword;
//function request character length
function requestLength() {
  lengthPassword = prompt('Please choose the length of the password (between 8-128)');
  // If user pressed Cancel, immediately end function
  if (!lengthPassword) {
    return;
  }else if ( lengthPassword > 128 || lengthPassword < 8 || isNaN(lengthPassword) ) {
    requestLength();
  }
}

// initializes spacialCaracters boolean
var specialCharacters;
//funtion request if special characters
function requestSC() {
    specialCharacters = confirm('Press OK if you want special characters on your password')
    if (specialCharacters) {
      rndStr = rndStr + specialCharacterStr;
      console.log(rndStr);
    } 
}

// initializes numbers boolean
var numbers;
//funtion request if numbers
function requestNumbers() {
    numbers = confirm('Press OK if you want numbers on your password')
    if (numbers) {
      rndStr = rndStr + numbersStr;
      console.log(rndStr);
    }
}

// initializes numbers boolean
var lowerCase;
//funtion request if lowercase
function requestLowerCase() {
    lowerCase = confirm('Press OK if you want lowercase on your password')
    if (lowerCase) {
      rndStr = rndStr + alphabetLowerCaseStr;
      console.log(rndStr);
    }
}

// initializes numbers boolean
var upperCase;
//funtion request if uppercase
function requestUpperCase() {
    upperCase = confirm('Press OK if you want uppercase on your password')
    if (upperCase) {
      rndStr = rndStr + alphabetUpperCaseStr;
      console.log(rndStr);
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

