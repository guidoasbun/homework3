// Assignment Code
  var generateBtn = document.querySelector("#generate");

let passwordGenerator = function () {
  let passwordLength = prompt('Please enter a password length between 8 - 128')
  passwordLength = +passwordLength
  let includeLower = confirm('Include lower case?')
  let includeUpper = confirm('Include upper case?')
  let includeNumber = confirm('Include numbers?')
  let includeSymbols = confirm('Include Symbols?')
  let passwordString = ''
  let password = ''

  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt('I said enter a password lenght between 8 - 128')
    passwordLength = +passwordLength
  }

  function getRandomUpper() {
    const lowerLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)]
  }
  function getRandomLower() {
    const upperLetter = 'abcdefghijklmnopqrstuvwxyz'
    return upperLetter[Math.floor(Math.random() * upperLetter.length)]
  }
  function getRandomNumber() {
    const randomNumber = '0123456789'
    return randomNumber[Math.floor(Math.random() * randomNumber.length)]
  }
  function getRandomSymbol() {
    const randomSymbol = '!@#$%^&*()_+'
    return randomSymbol[Math.floor(Math.random() * randomSymbol.length)]
  }
  
  for (let i = 0; i < passwordLength; i){
    if (includeLower){
      passwordString = passwordString.concat(getRandomLower())
      i++
    }
    if (includeUpper){
      passwordString = passwordString.concat(getRandomUpper())
      i++
    }
    if (includeNumber){
      passwordString = passwordString.concat(getRandomNumber())
      i++
    }
    if (includeSymbols){
      passwordString = passwordString.concat(getRandomSymbol())
      i++
    }
  } 
  
  for (let i = 0; i < passwordLength; i++){
    password = password.concat(passwordString[Math.floor(Math.random() * passwordString.length)])
  }
  return password
}

 

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generator function



// console.log(passwordGenerator(passwordLength, includeLower, includeUpper, includeNumber, includeSymbols))

