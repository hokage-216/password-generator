// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create Password Option Object
var passOptions = {
  specialChar: ["!", "@", "#", "$", "^", "&", "*"],
  upperAlpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerAlpha: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

// Write password to the #password input
function generatePassword() {

  // create empty array to store selected options
  var userOptions = [];

  // grab the users password preferences
  var includedSpecialChar = confirm("Would you like to include Special Characters?");
  var includedUpperLetter = confirm("Would you like to include upper case letters?");
  var includedLowerLetter = confirm("Would you like to include lower case letters?");
  var includedNumbers = confirm("Would you like to include numbers?");

  // check that at least one option is selected
  if (!includedSpecialChar && !includedUpperLetter && !includedLowerLetter && !includedNumbers) {
    alert("No option selected. Please select at least one option.");
    generatePassword();
  }

  // add options to array
  if (includedLowerLetter) {
    userOptions = userOptions.concat(passOptions.lowerAlpha);
  }
  if (includedUpperLetter) {
    userOptions = userOptions.concat(passOptions.upperAlpha);
  }
  if (includedSpecialChar) {
    userOptions = userOptions.concat(passOptions.specialChar);
  }
  if (includedNumbers) {
    userOptions = userOptions.concat(passOptions.nums);
  }

  // request amount of characters from user (between 12 - 99 , return number)
  var userPassLength = window.prompt("Choose a number between 12 - 99: ", "Minimum: 12 Characters");
  var userNum = Number(userPassLength); // convert user input to number

  // check user input
  if (isNaN(userNum) || userNum < 12 || userNum > 99) {
    alert("Invalid Input. Enter a number between 12 - 99.")
    return;
  }
  
  // generate the password based on selected characters and length
  var password = "";
  for (var i = 0; i < userNum; i++) {
    var randomIndex = Math.floor(Math.random() * userOptions.length);
    password += userOptions[randomIndex];
  }

  // look for password textarea and display new password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
