/* Object builder to create all the password options */
var builder = {
    pwdLength : 8,
    specialChar: false,
    numbers : false,
    lowerCase : false,
    upperCase : false
};

/* Object charset with all the available characters */
var charset = {
    lowerCase : "abcdefghijklmnopqrstuvwxyz",
    upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special : " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    number : "0123456789"
};

/* Sets the password length */
function setLength() {
    var ans = prompt("How many characters do you want? Choose a number between 8 and 128.");
    
    var pwdLength = parseInt(ans);
    
    if (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
        alert("Please select a number between 8 and 128!");
    } else {
        builder.pwdLength = pwdLength;
    }
}

/* Define what kind of chars will be available for the password */
/* charType String                                              */
/* returns boolean                                              */ 
function allowChars(charType) {
    return confirm("Do you want to use "+charType+"?");
}

/* validate the password options and update the builder object  */
/* returns boolean                                              */
function validateOptions() {
    setLength();
    builder.specialChar = allowChars("Special Characters");
    builder.numbers = allowChars("Numbers");
    builder.lowerCase = allowChars("Lower Case");
    builder.upperCase = allowChars("Upper Case");
    
    return builder.specialChar || builder.numbers ||  builder.lowerCase 
        || builder.upperCase;
}

 /* Generates a random password with the options chosen by the user, if no option */
 /* is chosen an alert will pop up to the user and the pwd will not be created    */
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

/* Copy the password created to the clipboard */
function copyToClipboard() {
    var txtArea = document.getElementById("password");
    txtArea.select();
    document.execCommand("copy");

}