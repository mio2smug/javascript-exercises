const palindromes = function (input) {
    let string = input.toLowerCase().
    replace(/[^a-z]/g, "");

    let reverseString = string.split("").reverse().join("");
    return (string === reverseString); 
};

// Do not edit below this line
module.exports = palindromes;
