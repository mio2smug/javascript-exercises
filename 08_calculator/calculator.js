const add = function(integerA,integerB) {
	return integerA+integerB;
};

const subtract = function(integerA, integerB) {
	return integerA-integerB;
};

const sum = function(array) {
  if (array[0] == "" ){return 0 ;}

  let sumTotal = array.reduce((partialSum, a) => partialSum + a, 0);
  return sumTotal;
};

const multiply = function(array) {
    return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0 ;
};

const power = function(base, exponent) {
  return base ** exponent;
};



const factorial = function(integer) {
  let factorialTotal = 1;
  if (integer == 0){
    return 1;
  }
  else{
  for (let i = integer; i>0 ;i--){
    factorialTotal *= i;
  }
  return factorialTotal;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
