// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Criteria
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacter = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  " ' ",
  " ",
  ' " ',
  "\\",
];

var userChoice = "";
var finalPwd;
var length = 0;

// Initial Prompts
var lowerCaseLetters = confirm(
  "A strong password should include upper case letters."
);
var upperCaseLetters = confirm(
  "A strong password should include lower case letters."
);
var numbers = confirm("A strong password should include numbers.");
var specialCharacter = confirm(
  "A strong password should include special characters."
);

// Main Function to generate password
function generatePassword() {
  var length = prompt(
    "How long would you like your password to be? Please note, it must be between 8 - 128 characters"
  );
  if (length < 8 || length > 128) {
    alert("Password must be between 8 - 128!");
    return generatePassword();
  }
  var lowerCaseLetters = confirm(
    "Would you like to include lower case characters in your password?"
  );
  if (lowerCaseLetters == true) {
    userChoice = userChoice.concat(lowerCaseLetters);
    console.log(userChoice);
  }

  var upperCaseLetters = confirm(
    "Would you like to include upper case characters in your password?"
  );
  if (upperCaseLetters == true) {
    userChoice = userChoice.concat(upperCaseLetters);
    console.log(userChoice);
  }

  var specialCharacter = confirm(
    "Would you like to include special characters in your password?"
  );
  if (specialCharacter == true) {
    userChoice = userChoice.concat(specialCharacter);
    console.log(userChoice);
  }

  var number = confirm("Would you like to include numbers in your password?");
  if (number == true) {
    userChoice = userChoice.concat(number);
    console.log(userChoice);
  }

  // Option if neither of the minimum password requirements are selected
  if (
    lowerCaseLetters === false &&
    upperCaseLetters === false &&
    specialCharacter === false &&
    number === false
  ) {
    prompt(
      "Please note, the password must include at least one of the following: an upper case letter, a lower case letter, special character or number in order to be valid"
    );
  }

  var charAt = finalPwd;
  console.log(charAt);

  for (var i = 0; i < length; i++) {
    result += finalPwd.charAt(Math.floor(Math.random() * finalPwd.length));
  }

  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
