namespace Session1;

public static class FizzBuzz
{
    public static string GetNumber(int number)
    {
        if (number % 15 == 0)
        {
            return "FizzBuzz";
        }

        if (number % 3 == 0)
        {
            return "Fizz";
        }

        if (number % 5 == 0)
        {
            return "Buzz";
        }

        return number.ToString();
    }

    public static void PrintNumber(int number)
    {
        if (number % 15 == 0)
        {
            Console.WriteLine("FizzBuzz");
        }
        else if (number % 3 == 0)
        {
            Console.WriteLine("Fizz");
        }
        else if (number % 5 == 0)
        {
            Console.WriteLine("Buzz");
        }
        else
        {
            Console.WriteLine(number);
        }
    }
}
