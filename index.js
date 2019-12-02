var builder = {
    pwdLength : 8,
    specialChar: true,
    numbers : true,
    lowerCase : true,
    upperCase : true,
    setLength : function() {
        var pwdLength = prompt("How many characters do you want? Choose a number between 8 and 128.");
        builder.pwdLength = parseInt(pwdLength);
        if (isNaN(builder.pwdLength) || builder.pwdLength < 8 || builder.pwdLength > 128) {
            alert("Please select a number between 8 and 128!");
        }
    },

    allowSpecialChars : function() {
        var specialChar = prompt("Do you want to use special characters? Answer Y to YES or N to NO.");
        
        if (specialChar.toLowerCase() !== 'y' && specialChar.toLowerCase() !== 'n') {
            alert("Invalid Value! Answer with Y or N.");
            
        } else {
            builder.specialChar = specialChar.toLowerCase() === 'y';
        }
       
    },

    allowNumbers : function() {
        var numbers = prompt("Do you want to use Numbers? Answer Y to YES or N to NO.");
        
        if (numbers.toLowerCase() !== 'y' && numbers.toLowerCase() !== 'n') {
            alert("Invalid Value! Answer with Y or N.");
            
        } else {
            builder.numbers = numbers.toLowerCase() === 'y';
        }
    },

    allowLowerCase : function() {
        var lowerCase = prompt("Do you want to use lower Case? Answer Y to YES or N to NO.");
        
        if (lowerCase.toLowerCase() !== 'y' && lowerCase.toLowerCase() !== 'n') {
            alert("Invalid Value! Answer with Y or N.");
            
        } else {
            builder.lowerCase = lowerCase.toLowerCase() === 'y';
        }
    },

    allowUpperCase : function() {
        var upperCase = prompt("Do you want to use upper Case? Answer Y to YES or N to NO.");
        
        if (upperCase.toLowerCase() !== 'y' && upperCase.toLowerCase() !== 'n') {
            alert("Invalid Value! Answer with Y or N.");
            
        } else {
            builder.upperCase = upperCase.toLowerCase() === 'y';
        }
    }
};

var charset = {
    lowerCase : "abcdefghijklmnopqrstuvwxyz",
    upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special : " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    number : "0123456789"
};

function setOptions() {
    builder.setLength();
    builder.allowSpecialChars();
    builder.allowNumbers();
    builder.allowLowerCase();
    builder.allowUpperCase();
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
