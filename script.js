// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCaseLetter = ['a', 'b','c' ,'d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetter = lowerCaseLetter.map(letter => letter.toUpperCase());
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];

function generatePassword() {
  let charArray = [];
  let newPwArray = [];
  let pwLength = prompt('How many characters do you want in your password?  Please enter a number between 8 and 128:');
  if (pwLength === null) {
    return '';
  }
  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    pwLength = prompt('You must choose a password length of at least 8 and no more than 128:');
    if (pwLength === null) {
      return '';
    }
  }
  
  while (charArray.length === 0 ) {
    if (confirm('Please choose at least one of the following types of characters to use in you password:')) {
      if (confirm('Do you want lowercase letters in you password?')) {
        charArray.push.apply(charArray, lowerCaseLetter);
      }
      if (confirm('Do you want uppercase letters in you password?')) {
        charArray.push.apply(charArray, upperCaseLetter);
      }
      if (confirm('Do you want numbers in you password?')) {
        charArray.push.apply(charArray, number);
      }
      if (confirm('Do you want special characters in you password?')) {
        charArray.push.apply(charArray, specialChar);
      } 
    } else {
      return '';
    }
  }
  
  for (let i = 0; i < pwLength; i++) {
    let randomIndex = Math.floor(Math.random() * charArray.length);
    newPwArray.push(charArray[randomIndex]);
  }
  return newPwArray.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

