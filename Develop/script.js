// Assignment Code
var generateBtn = document.querySelector("#generate");

// Main Function to return password

var generatePassword = () => {
  return "hb89IKlw@sp1!";
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
