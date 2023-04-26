const getNumber = require("./fizzBuzz");
const printNumber = require("./printNumber");
const printInputNumber = require("./printInputNumber");

const commonNumbers = [[1], [2], [4], [8], [13]];
const fizzNumbers = [[3], [6], [9], [12], [18]];
const fizzBuzzNumbers = [[15], [30], [45], [60], [75]];
const fizzBuzzWhizzNumbers = [[105]];
const fizzBuzzWhizzBangNumbers = [[1155]];
const fizzBuzzBangNumbers = [[165]];
const fizzWhizzNumbers = [[21], [42]];
const fizzWhizzBangNumbers = [[231]];
const fizzBangNumbers = [[33]];
const buzzNumbers = [[5], [10], [20], [25], [40]];
const buzzWhizzNumbers = [[35]];
const buzzWhizzBangNumbers = [[385]];
const buzzBangNumbers = [[55]];
const whizzNumbers = [[7], [14], [28]];
const whizzBangNumbers = [[77]];
const bangNumbers = [[11], [22], [44]];

describe("fizzBuzz", () => {
  describe("getNumber", () => {
    test.each(commonNumbers)(
      "returns the number as is when not divisible by 3, 5, 7 or 11",
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

    test.each(whizzNumbers)(
      "returns 'Whizz' when the number is divisible by 7",
      (number) => {
        const expected = "Whizz";

        const actual = getNumber(number);

        expect(actual).toEqual(expected);
      }
    );

    test.each(whizzNumbers)(
      "returns 'Whizz' when the number is divisible by 7",
      (number) => {
        const expected = "Whizz";

        const actual = getNumber(number);

        expect(actual).toEqual(expected);
      }
    );

    test.each(fizzBuzzWhizzNumbers)(
      "returns 'FizzBuzzWhizz' when the number is divisible by 3 and 5",
      (number) => {
        const expected = "FizzBuzzWhizz";

        const actual = getNumber(number);

        expect(actual).toEqual(expected);
      }
    );

    test.each(fizzBuzzWhizzBangNumbers)(
      "returns 'FizzBuzzWhizzBang' when the number is divisible by 3 and 5",
      (number) => {
        const expected = "FizzBuzzWhizzBang";

        const actual = getNumber(number);

        expect(actual).toEqual(expected);
      }
    );

    test.each(fizzBuzzBangNumbers)(
      "returns 'FizzBuzzBang' when the number is divisible by 3 and 5",
      (number) => {
        const expected = "FizzBuzzBang";

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
