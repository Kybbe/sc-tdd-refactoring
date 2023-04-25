using Session1;

namespace Session1Tests;

[TestClass]
public class FizzBuzzSpecs
{
    public static IEnumerable<object[]> CommonNumbers => new[]
{
        new object[] { 1 },
        new object[] { 2 },
        new object[] { 4 },
        new object[] { 7 },
        new object[] { 8 },
        new object[] { 11 },
        new object[] { 13 },
        new object[] { 14 },
        new object[] { 16 },
        new object[] { 17 },
        new object[] { 19 },
    };

    public static IEnumerable<object[]> FizzNumbers => new[]
    {
        new object[] { 3 },
        new object[] { 6 },
        new object[] { 9 },
        new object[] { 12 },
        new object[] { 18 },
    };

    public static IEnumerable<object[]> BuzzNumbers => new[]
{
        new object[] { 5 },
        new object[] { 10 },
        new object[] { 20 },
    };
    public static IEnumerable<object[]> FizzBuzzNumbers => new[]
{
        new object[] { 15 },
        new object[] { 30 },
        new object[] { 45 },
    };


    [TestMethod]
    [DynamicData(nameof(CommonNumbers))]
    public void GetNumber_GivenNotMultipleOfThreeOrFive_ReturnsThatNumber(int number)
    {
        var expected = $"{number}";

        var result = FizzBuzz.GetNumber(number);

        Assert.AreEqual(expected, result);
    }

    [TestMethod]
    [DynamicData(nameof(FizzNumbers))]
    public void GetNumber_GivenMultipleOfThree_ReturnsFizz(int number)
    {
        var expected = "Fizz";

        var result = FizzBuzz.GetNumber(number);

        Assert.AreEqual(expected, result);
    }

    [TestMethod]
    [DynamicData(nameof(BuzzNumbers))]
    public void GetNumber_GivenMultipleOfFive_ReturnsBuzz(int number)
    {
        var expected = "Buzz";

        var result = FizzBuzz.GetNumber(number);

        Assert.AreEqual(expected, result);
    }


    [DataTestMethod]
    [DataRow(15)]
    [DataRow(30)]
    public void GetNumber_GivenMultipleOfThreeAndFive_ReturnsFizzBuzz(int number)
    {
        var expected = "FizzBuzz";

        var result = FizzBuzz.GetNumber(number);

        Assert.AreEqual(expected, result);
    }

    [TestMethod]
    [DynamicData(nameof(CommonNumbers))]
    public void PrintNumber_GivenNotMultipleOfThreeOrFive_PrintsThatNumber(int number)
    {
        StringWriter stringWriter = new StringWriter();
        Console.SetOut(stringWriter);
        var expected = number.ToString();

        FizzBuzz.PrintNumber(number);
        var actuall = stringWriter.ToString().Trim();

        Assert.AreEqual(expected, actuall);
    }

    [TestMethod]
    [DynamicData(nameof(FizzNumbers))]
    public void PrintNumber_GivenMultipleOfThree_PrintsFizz(int number)
    {
        StringWriter stringWriter = new StringWriter();
        Console.SetOut(stringWriter);
        var expected = "Fizz";

        FizzBuzz.PrintNumber(number);
        var actuall = stringWriter.ToString().Trim();

        Assert.AreEqual(expected, actuall);
    }

    [TestMethod]
    [DynamicData(nameof(BuzzNumbers))]
    public void PrintNumber_GivenMultipleOfFive_PrintsBuzz(int number)
    {
        StringWriter stringWriter = new StringWriter();
        Console.SetOut(stringWriter);
        var expected = "Buzz";

        FizzBuzz.PrintNumber(number);
        var actuall = stringWriter.ToString().Trim();

        Assert.AreEqual(expected, actuall);
    }

    [TestMethod]
    [DynamicData(nameof(FizzBuzzNumbers))]
    public void PrintNumber_GivenMultipleOfThreeAndFive_PrintsFizzBuzz(int number)
    {
        StringWriter stringWriter = new StringWriter();
        Console.SetOut(stringWriter);
        var expected = "FizzBuzz";

        FizzBuzz.PrintNumber(number);
        var actuall = stringWriter.ToString().Trim();

        Assert.AreEqual(expected, actuall);
    }

    [TestMethod]
    [DynamicData(nameof(CommonNumbers))]
    public void PrintInputNumber_GivenNotMultipleOfThreeOrFive_PrintsInputNumber(int number)
    {
        StringReader stringReader = new StringReader(number.ToString());
        Console.SetIn(stringReader);
        StringWriter stringWriter = new StringWriter();
        Console.SetOut(stringWriter);
        var expected = number.ToString();

        FizzBuzz.PrintInputNumber();
        var actuall = stringWriter.ToString().Trim();

        Assert.AreEqual(expected, actuall);
    }

    [TestMethod]
    [DynamicData(nameof(FizzNumbers))]
    public void PrintInputNumber_GivenMultipleOfThree_PrintsFizz(int number)
    {
        StringReader stringReader = new StringReader(number.ToString());
        Console.SetIn(stringReader);
        StringWriter stringWriter = new StringWriter();
        Console.SetOut(stringWriter);
        var expected = "Fizz";

        FizzBuzz.PrintInputNumber();
        var actuall = stringWriter.ToString().Trim();

        Assert.AreEqual(expected, actuall);
    }

    [DataTestMethod]
    [DynamicData(nameof(BuzzNumbers))]
    public void PrintInputNumber_GivenMultipleOfFive_PrintsBuzz(int number)
    {
        StringReader stringReader = new StringReader(number.ToString());
        Console.SetIn(stringReader);
        StringWriter stringWriter = new StringWriter();
        Console.SetOut(stringWriter);
        var expected = "Buzz";

        FizzBuzz.PrintInputNumber();
        var actuall = stringWriter.ToString().Trim();

        Assert.AreEqual(expected, actuall);
    }

    [DataTestMethod]
    [DynamicData(nameof(FizzBuzzNumbers))]
    public void PrintInputNumber_GivenMultipleOfThreeAndFive_PrintsFizzBuzz(int inputNumber)
    {
        StringReader stringReader = new StringReader(inputNumber.ToString());
        Console.SetIn(stringReader);
        StringWriter stringWriter = new StringWriter();
        Console.SetOut(stringWriter);
        var expected = "FizzBuzz";

        FizzBuzz.PrintInputNumber();
        var actuall = stringWriter.ToString().Trim();

        Assert.AreEqual(expected, actuall);
    }
}