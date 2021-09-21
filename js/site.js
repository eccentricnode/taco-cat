// entry function 
function getValue() {

    document.getElementById("alert").classList.add("invisible");
    let inputValue = document.getElementById("inputValue").value;

    // let palindromeValue = checkForPalindrome(inputValue);
    let palindromeValue = checkPalindrome(inputValue);

    // displayPalindrome(palindromeValue);
    displayMessage(palindromeValue);
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

function checkPalindrome(inputValue) {
    inputValue = inputValue.toLowerCase();

    let regex = /[^a-zA-Z0-9]/gi;
    inputValue = inputValue.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let index = inputValue.length - 1; index >= 0; index--) {
        revString += inputValue[index];
    }
    
    console.log(revString);
    console.log(inputValue);

    if(revString == inputValue){
        returnObj.msg = "Well done! You entered a palindrome!"
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!"
    }

    returnObj.reversed = revString;

    console.log(returnObj);

    return returnObj;
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

function displayMessage(returnObj) {
    
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}