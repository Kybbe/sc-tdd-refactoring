const getNumber = require("./fizzBuzz");
const printNumber = require("./printNumber");
const printInputNumber = require("./printInputNumber");
const readline = require("readline");

const commonNumbers = [[1], [2], [4], [7], [8], [11], [13]];
const fizzNumbers = [[3], [6], [9], [12], [18]];
const buzzNumbers = [[5], [10], [20]];
const fizzBuzzNumbers = [[15], [30], [45]];

describe("fizzBuzz", () => {
  describe("getNumber", () => {
    test.each(commonNumbers)(
      "returns the number as is when not divisible by 3 or 5",
      (number) => {
        const expected = number;

        const actual = getNumber(number);

        expect(actual).toEqual(expected);
      }
    );

    test.each(fizzNumbers)(
      "returns 'Fizz' when the number is divisible by 3",
      (number) => {
        const expected = "Fizz";

        const actual = getNumber(number);

        expect(actual).toEqual(expected);
      }
    );

    test.each(buzzNumbers)(
      "returns 'Buzz' when the number is divisible by 5",
      (number) => {
        const expected = "Buzz";

        const actual = getNumber(number);

        expect(actual).toEqual(expected);
      }
    );

    test.each(fizzBuzzNumbers)(
      "returns 'FizzBuzz' when the number is divisible by 3 and 5",
      (number) => {
        const expected = "FizzBuzz";

        const actual = getNumber(number);

        expect(actual).toEqual(expected);
      }
    );
  });

  describe("printNumber", () => {
    const consoleMock = jest.spyOn(console, "log");

    test.each(commonNumbers)(
      "logs the number when not divisible by 3 or 5",
      (number) => {
        const expected = number;

        printNumber(number);

        expect(consoleMock).toHaveBeenCalledWith(expected);
      }
    );

    test.each(fizzNumbers)("logs 'Fizz' when divisible by 3", (number) => {
      const expected = "Fizz";

      printNumber(number);

      expect(consoleMock).toHaveBeenCalledWith(expected);
    });

    test.each(buzzNumbers)("logs 'Buzz' when divisible by 5", (number) => {
      const expected = "Buzz";

      printNumber(number);

      expect(consoleMock).toHaveBeenCalledWith(expected);
    });

    test.each(fizzBuzzNumbers)(
      "logs 'FizzBuzz' when divisible by 3 and 5",
      (number) => {
        const expected = "FizzBuzz";

        printNumber(number);

        expect(consoleMock).toHaveBeenCalledWith(expected);
      }
    );
  });

  describe("printInputNumber", () => {
    test.each(commonNumbers)(
      "logs the number when not divisible by 3 or 5",
      (number) => {
        global.prompt = jest.fn(() => number);
        const consoleMock = jest.spyOn(console, "log");

        printInputNumber();

        expect(consoleMock).toHaveBeenCalledWith(number);

        jest.restoreAllMocks();
      }
    );

    test.each(fizzNumbers)("logs 'Fizz' when divisible by 3", (number) => {
      global.prompt = jest.fn(() => number);
      const consoleMock = jest.spyOn(console, "log");

      printInputNumber();

      expect(consoleMock).toHaveBeenCalledWith("Fizz");

      jest.restoreAllMocks();
    });

    test.each(buzzNumbers)("logs 'Buzz' when divisible by 5", (number) => {
      global.prompt = jest.fn(() => number);
      const consoleMock = jest.spyOn(console, "log");

      printInputNumber();

      expect(consoleMock).toHaveBeenCalledWith("Buzz");

      jest.restoreAllMocks();
    });

    test.each(fizzBuzzNumbers)(
      "logs 'FizzBuzz' when divisible by 3 and 5",
      (number) => {
        global.prompt = jest.fn(() => number);
        const consoleMock = jest.spyOn(console, "log");

        printInputNumber();

        expect(consoleMock).toHaveBeenCalledWith("FizzBuzz");

        jest.restoreAllMocks();
      }
    );
  });
});
