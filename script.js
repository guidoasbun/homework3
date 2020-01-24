// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

let passwordLength = prompt('please enter a password length from 8 - 128')
passwordLength = +passwordLength
let includeLower = confirm('include lower case?')
let includeUpper = confirm('include upper case?')
let includeNumber = confirm('include numbers?')
let includeSymbols = confirm('include Symbols?')


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

function passwordGenerator(length) {
  let password= ''
  let i=0
    while (i < length){
      password += getRandomUpper()
      i++
      password += getRandomLower()
      i++
      password += getRandomNumber()
      i++
      password += getRandomSymbol()
    }
    return password
}
console.log(passwordGenerator(passwordLength))
