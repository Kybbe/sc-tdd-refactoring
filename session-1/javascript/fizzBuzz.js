const getNumber = (number) => {
  let modifiedNumber = "";

  if (number % 3 === 0) {
    modifiedNumber += "Fizz";
  }
  if (number % 5 === 0) {
    modifiedNumber += "Buzz";
  }
  if (number % 7 === 0) {
    modifiedNumber += "Whizz";
  }
  if (number % 11 === 0) {
    modifiedNumber += "Bang";
  }
  if (modifiedNumber === "") {
    return number;
  }
  return modifiedNumber;
};

module.exports = getNumber;
