var builder = {
    pwdLength : 8,
    specialChar: false,
    numbers : false,
    lowerCase : true,
    upperCase : true
};

var charset = {
    lowerCase : "abcdefghijklmnopqrstuvwxyz",
    upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special : " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    number : "0123456789"
};

function setLength() {
    var ans = prompt("How many characters do you want? Choose a number between 8 and 128.");
    
    var pwdLength = parseInt(ans);
    
    if (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
        alert("Please select a number between 8 and 128!");
    } else {
        builder.pwdLength = pwdLength;
    }
}

function allowChars(charType) {
    var result = prompt("Do you want to use "+charType+"? Answer Y to YES or N to NO.");
        
    if (result.toLowerCase() !== 'y' && result.toLowerCase() !== 'n') {
        alert("Invalid Value! Answer with Y or N.");
        
    } else {
         return result.toLowerCase() === 'y';
    }
}

function setOptions() {
    setLength();
    builder.specialChar = allowChars("Special Characters");
    builder.numbers = allowChars("Numbers");
    builder.lowerCase = allowChars("Lower Case");
    builder.upperCase = allowChars("Upper Case");
}

function generatePassword() {
    setOptions();

    var chars = "";
    if (builder.lowerCase) {
        chars = charset.lowerCase;
    } 
    if (builder.upperCase) {
        chars = chars + charset.upperCase;
    }
    if (builder.numbers) {
        chars = chars + charset.number;
    }
    if (builder.specialChar) {
        chars = chars + charset.special;
    }
    
    var pwd = "";
    for ( var i = 0; i < builder.pwdLength; i++ ) {
        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }

     console.log(pwd);
};