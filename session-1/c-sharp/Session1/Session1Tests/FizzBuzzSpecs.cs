using Session1;

namespace Session1Tests;

[TestClass]
public class FizzBuzzSpecs
{
    [DataTestMethod]
    [DataRow(1)]
    [DataRow(2)]
    [DataRow(4)]
    [DataRow(7)]
    [DataRow(8)]
    [DataRow(11)]
    [DataRow(13)]
    [DataRow(14)]
    [DataRow(16)]
    [DataRow(17)]
    [DataRow(19)]
    public void GetNumber_GivenNotMultipleOfThreeOrFive_ReturnsThatNumber(int number)
    {
        var expected = $"{number}";

        var result = FizzBuzz.GetNumber(number);

        Assert.AreEqual(expected, result);
    }

    [DataTestMethod]
    [DataRow(3)]
    [DataRow(6)]
    [DataRow(9)]
    [DataRow(12)]
    [DataRow(18)]
    [DataRow(21)]
    public void GetNumber_GivenMultipleOfThree_ReturnsFizz(int number)
    {
        var expected = "Fizz";

        var result = FizzBuzz.GetNumber(number);

        Assert.AreEqual(expected, result);
    }
}