/* Object builder to create all the password options */
var builder = {
    pwdLength: 8,
    specialChar: {
        inUse : false,
        chars :  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    },
    numbers: {
        inUse : false,
        chars : "0123456789"
    },
    lowerCase: {
        inUse : false,
        chars : "abcdefghijklmnopqrstuvwxyz"
    },
    upperCase:{
        inUse : false,
        chars : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
};

/* Sets the password length */
function setLength() {
    var ans = prompt("How many characters do you want? Choose a number between 8 and 128.");
    builder.pwdLength = parseInt(ans);
}

/* Validate if the length is set between 8 and 128 */
/* return boolean                                  */
function isLengthSet() {
    return (!isNaN(builder.pwdLength) && builder.pwdLength >= 8 && builder.pwdLength <= 128);
}

/* Define what kind of chars will be available for the password */
/* charType String                                              */
/* returns boolean                                              */
function allowChars(charType) {
    return confirm("Do you want to use " + charType + "?");
}

/* validate the password options and update the builder object  */
/* returns boolean                                              */
function setCharOptions() {
    builder.specialChar.inUse = allowChars("Special Characters");
    builder.numbers.inUse = allowChars("Numbers");
    builder.lowerCase.inUse = allowChars("Lower Case");
    builder.upperCase.inUse = allowChars("Upper Case");
}

/* Validate if at least one char option is true */
/* return boolean                               */
function validateCharOptions() {
    return builder.specialChar || builder.numbers || builder.lowerCase
        || builder.upperCase;
}

/* Generate  the charset to be used to create the password */
/* return  String                                    */
function generatePwdCharset() {
    setLength(); 
    // validate the length 
    if (isLengthSet()) {
        
        setCharOptions();
        //validate the char options
        if (validateCharOptions()) {
            var chars = "";
            var keys = Object.keys(builder);
            keys.forEach(k => {
                if (k !== "pwdLength") {
                    if (builder[k].inUse) {
                        chars += builder[k].chars;
                    }
                }
            });
            
            return chars;

        } else {
            alert("Please confirm at least one of the Characters options!");
        }
    } else {
        alert("Please select a number between 8 and 128!");
    }
}

/* Generates a random password with the options chosen by the user, if no option */
/* is chosen an alert will pop up to the user and the pwd will not be created    */
function generatePassword() {
    var charset = generatePwdCharset();

    var pwd = "";
    for (var i = 0; i < builder.pwdLength; i++) {
        pwd += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById("password").innerHTML = pwd;
}

/* Copy the password created to the clipboard */
function copyToClipboard() {
    var txtArea = document.getElementById("password");
    txtArea.select();
    document.execCommand("copy");
}