// entry function 
function getValue() {
    let inputValue = document.getElementById("inputValue").value;

    let palindromeValue = checkForPalindrome(inputValue);

    displayPalindrome(palindromeValue);
}

// logic function
function checkForPalindrome(inputValue) {
    // reverse the received value
    let noSpacingString = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let newArrayString = [...noSpacingString];
    let palindromeValue = newArrayString.reverse().join("");

    // check the string, if it's a palindrome
    if(palindromeValue == noSpacingString) {
        return palindromeValue;
    } else {
        return;
    }
}

// display function

function displayPalindrome(palindromeValue) {
    if(palindromeValue) {
        document.getElementById("msg").innerHTML = `Your word ${palindromeValue} is a palindrome!`;
        document.getElementById("alert").classList.remove("invisible");
    } else {
        alert("Your word is not a valid palindrome. Please try again!");
        document.getElementById("inputValue").value = "";
    }
}