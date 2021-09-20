// entry function 
function getValue() {
    let inputValue = document.getElementById("inputValue").value;

    let palindromeValue = checkForPalindrome(inputValue);

    displayPalindrome(palindromeValue);
}

// logic function
function checkForPalindrome(inputValue) {
    // reverse the received value
    let noSpacingString = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    let newArrayString = [...noSpacingString];
    let palindromeValue = newArrayString.reverse().join("").toLowerCase();

    // check the string, if it's a palindrome
    if(palindromeValue == inputValue) {
        console.log(palindromeValue)
        return palindromeValue;
    } else {
        alert("Please put enter a value, that is a palindrome.");
    }

}

// display function

function displayPalindrome(palindromeValue) {
    alert("It worked.")
}