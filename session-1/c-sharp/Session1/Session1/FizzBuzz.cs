namespace Session1;

public static class FizzBuzz
{
    public static string GetNumber(int number)
    {
        if (number % 3 == 0)
        {
            return "Fizz";
        }
        return number.ToString();
    }
}
