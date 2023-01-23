const removeFromArray = function(array, ...values) {
    let newArray= [];

    array.forEach((item) => {
        // push every element into the new array
        // UNLESS it is included in the function arguments
        // so we create a new array with every item, except those that should be removed
        if (!values.includes(item)) {
          newArray.push(item);
        }
      });
      // and return that array
      return newArray;

}   

// Do not edit below this line
module.exports = removeFromArray;
