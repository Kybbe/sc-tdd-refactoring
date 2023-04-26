const getNumber = require("./fizzBuzz");

const printInputNumber = () => {
  const input = prompt();
  console.log(getNumber(input));
};

module.exports = printInputNumber;
