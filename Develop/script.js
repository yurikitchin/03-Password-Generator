// Assignment Code
var generateBtn = document.querySelector("#generate");
//List variables
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUV"
var numericalChar = "0123456789"
var specialChar = "!@#$%^&*()_+{}[]:;<>,.?/"
var userSelectLength;
var userConfirmLower;
var userConfirmUpper;
var userConfirmNumber;
var userConfirmsymbol;
var generateArray = '';

//add function to define parameters requried uppercase, lowercase, number, symbol
function defineParameters (){
  //user confirms if lower case is required, boolean answer is generated, if true, lowercase charactes are added to the generate array
  userConfirmLower = confirm("do you want to use lowercase characters")
  if (userConfirmLower === true) {
  generateArray = generateArray.concat(lowercaseChar); 
  };
  //user confirms if upper case is required, boolean answer is generated, if true, uppercase charactes are added to the generate array
  userConfirmUpper = confirm("do you want to use uppercase characters")
  if (userConfirmUpper === true){
  generateArray = generateArray.concat(uppercaseChar);
  };
  //user confirms if numbers are required, boolean answer is generated, if true, number charactes are added to the generate array
  userConfirmNumber = confirm("do you want to use numeric characters")
  if (userConfirmNumber === true) {
  generateArray = generateArray.concat(numericalChar)
  };
  //user confirms if special characters are required, boolean answer is generated, if true, special charactes are added to the generate array
  userConfirmsymbol = confirm("do you want to use Symbols")
  if  (userConfirmsymbol === true) {
   generateArray = generateArray.concat(specialChar)
  }
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
