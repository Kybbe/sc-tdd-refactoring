const getNumber = (number) => {
  const firstContraint = number % 3 === 0;
  const secondContraint = number % 5 === 0;
  const thirdContraint = number % 7 === 0;
  const fourthContraint = number % 11 === 0;

  let returnMessage = "";

  if (firstContraint) {
    returnMessage += "Fizz";
  }
  if (secondContraint) {
    returnMessage += "Buzz";
  }
  if (thirdContraint) {
    returnMessage += "Whizz";
  }
  if (fourthContraint) {
    returnMessage += "Bang";
  }

  if (returnMessage === "") return number;
  return returnMessage;
};

const printNumber = (number) => {
  if (typeof number != "number") {
    console.log(`${number} is not a number`);
    return;
  }

  const result = getNumber(number);
  console.log(result);
};

module.exports = { getNumber, printNumber };
