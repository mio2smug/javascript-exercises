const fibonacci = function(integer) {
//use ==, test will throw string must use type conversion
if (integer < 0 ) return 'OOPS';
let fibonacci = [0,1];

for(let i = 2; i < integer+1; i++){
    fibonacci[i] = fibonacci[i-2] + fibonacci[i - 1];
}
return fibonacci[integer];

};

// Do not edit below this line
module.exports = fibonacci;
