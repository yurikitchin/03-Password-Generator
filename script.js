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

//add function to generate password
function generatePassword() {
  //user selectes length, number is parsed to an integer
 userSelectLength = prompt("How many characters would you like, please select a number between 8-126")
    userSelectLength = parseInt(userSelectLength, 10);
    console.log(userSelectLength)
    if (userSelectLength < 8) {
      alert("you must select a number between  8 and 126")
      userSelectLength = prompt("How many characters would you like, please select a number between 8-126")
    }
    if (userSelectLength > 126){
      alert("you must select a number between  8 and 126")
      userSelectLength = prompt("How many characters would you like, please select a number between 8-126")
    }

    if (userSelectLength === NaN){
      alert("you must select a number between  8 and 126")
      userSelectLength = prompt("How many characters would you like, please select a number between 8-126")
    }
  defineParameters()

  if (userConfirmsymbol === false && userConfirmNumber === false && userConfirmUpper === false && userConfirmLower === false) {
    alert("you must select at least one parameter")
    defineParameters();}

//only true boolean answers are concated onto the generateArray
 
  var newPassword = '';
  for (let index = 0; index < userSelectLength; index++) {
    debugger
    const characters = Math.floor(Math.random() * generateArray.length)
    newPassword += generateArray.charAt(characters)
  }
  
 //new password is made
 return newPassword
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
