const repeatString = function(string, num) {
    let value = "";
    if (num < 0){
        return 'ERROR';
    }
    for (let i=0; i < num; i++){
        value = value.concat(string);
    }
    return value;
    
}

// Do not edit below this line
module.exports = repeatString;
