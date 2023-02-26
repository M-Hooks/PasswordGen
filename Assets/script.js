// Assignment code here
var Letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
Letters.sort();
var CapLetters = Letters.map(function(x){return x.toUpperCase()});
var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var S_Char = ["!", "#", "@", "%", "^", "&", "*", "<", ">", ",", "/", "?"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var Length = prompt("How long would you like your password? (It must be at least 8 Characters and no bigger than 20 Characters");
  while (Length < 8 || Length > 20) {
    prompt("Number is too low or too high. Pick a number between 8 and 20");
  }
  alert("You Password will have " + Length + " Characters in it");
  
  // Confirm Creteria
  var CLetters = confirm("Would you like lower case letters in your password?")
  var CCapLetters = confirm("Would you like lower Capital letters in your password?")
  var CNumbers = confirm("Would you like lower Numbers in your password?")
  var CS_Char = confirm("Would you like lower Special Characters in your password?")
  while (!CLetters && !CCapLetters && !CNumbers && !CS_Char) {
    prompt("Choose at least ONE Creteria to generate a password");
    return;
  }

  var CharacterSet = [];
  if (CLetters) {
    CharacterSet += Letters
  }
  if (CCapLetters) {
    CharacterSet += CapLetters
  }
  if (CNumbers) {
    CharacterSet += Numbers
  }
  if (CS_Char) {
    CharacterSet += S_Char
  }

  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var password = "";
    for (var i = 0; i < Length; i++) {
      var randomChar = CharacterSet[Math.floor(Math.random() * CharacterSet.length)];
      password += randomChar;
    }
    return password;
  }

  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
