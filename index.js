var builder = {
    pwdLength : 8,
    specialChar: false,
    numbers : false,
    lowerCase : false,
    upperCase : false
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
    return confirm("Do you want to use "+charType+"?");
}

function validateOptions() {
    setLength();
    builder.specialChar = allowChars("Special Characters");
    builder.numbers = allowChars("Numbers");
    builder.lowerCase = allowChars("Lower Case");
    builder.upperCase = allowChars("Upper Case");
    
    return builder.specialChar || builder.numbers ||  builder.lowerCase 
        || builder.upperCase;
}

function generatePassword() {
    if ( validateOptions() ) {
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
    
        document.getElementById("password").innerHTML = pwd;
    
    } else {
        alert("Please confirm at least one of the Characters options!");
    }
}

function copyToClipboard() {
    var txtArea = document.getElementById("password");
    txtArea.select();
    document.execCommand("copy");

}