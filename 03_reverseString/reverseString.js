const reverseString = function(string) {  //Assuming string is hello
    let reverseString = "";  
    for(let i = string.length; i + 1 > 0 ; i--){ //set index to length of hello (6), 
        reverseString += string.charAt(i);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
