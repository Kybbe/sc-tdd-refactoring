const { getNumber, printNumber } = require("./fizzBuzz");

/* test("Function under test doex X when Y", () => {
  // Arrange and act
  const result = true;

  // Assert
  expect(result).toBe(true);
}); */

const myNumbers = [[3], [6], [9]];
test.each(myNumbers)(
  "Function returns Fizz when number is divisible by 3",
  (number) => {
    // Arrange and act
    const result = getNumber(number);

    // Assert
    expect(result).toBe("Fizz");
  }
);

const myNumbers2 = [[5], [10], [25]];
test.each(myNumbers2)(
  "Function returns buzz when number is divisible by 5",
  (myNumber) => {
    // Arrange and act
    const result = getNumber(myNumber);

    // Assert
    expect(result).toBe("Buzz");
  }
);

test("Function returns FizzBuzz when number is divisible by 3 and 5", () => {
  // Arrange and act
  const result = getNumber(15);

  // Assert
  expect(result).toBe("FizzBuzz");
});

const myNumbers3 = [[1], [2], [4]];
test.each(myNumbers3)(
  "Function returns number when number is not divisible by 3 or 5",
  (myNumber) => {
    // Arrange and act
    const result = getNumber(myNumber);

    // Assert
    expect(result).toBe(myNumber);
  }
);

const myNumbers4 = [[3], [6], [9], [12], [18], [21], [24]];
test.each(myNumbers4)("logMessage writes message to the console", (number) => {
  const consoleMock = jest.spyOn(console, "log");
  const expected = "Fizz";
  printNumber(number);

  expect(consoleMock).toHaveBeenCalledWith(expected);
});

test("Function returns error when number is not a number", () => {
  const consoleMock = jest.spyOn(console, "log");
  const expected = "a is not a number";

  printNumber("a");

  expect(consoleMock).toHaveBeenCalledWith(expected);
});

const myNumbers5 = [[14]];
test.each(myNumbers5)("logMessage writes message to the console", (number) => {
  const consoleMock = jest.spyOn(console, "log");
  const expected = "Whizz";
  printNumber(number);

  expect(consoleMock).toHaveBeenCalledWith(expected);
});
