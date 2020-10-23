// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var passwordlength = prompt("choose a length of at least 8 characters and no more than 128 characters")

  while(passwordlength <8 || passwordlength >128){
    passwordlength = prompt("password needs to be at least 8 characters and no more than 128 characters")
   
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
