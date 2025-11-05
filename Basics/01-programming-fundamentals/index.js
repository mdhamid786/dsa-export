
// Question
// Declare three variables: name (string), age (integer), and salary (float). Initialize them with appropriate values.
// What will be the output: print(type(10), type(10.5), type('10'), type(True))?
// Convert the string '123' to integer, then to float. What are the results?
// What is the difference between x = 5 and x = '5'?
// Calculate: int('100') + int('200'). What is the result?
// Calculate: 17 // 5 and 17 % 5. Explain the difference.
// What is 2 ** 10?
// Evaluate: (5 > 3) and (10 < 20)
// What is the result of: not (5 > 10)?
// Given x = 10, what is x after x += 5 and then x *= 2?
// Evaluate: (10 > 5) or (20 < 15)
// What is the difference between == and =?
// Write if-else to check if a number is positive, negative, or zero.
// Check if a number is even or odd using modulus operator.
// Write a program to find the maximum of three numbers.
// Use ternary operator to assign 'Adult' if age >= 18, else 'Minor'.
// Write if-elif-else to assign grades: A(>=90), B(>=80), C(>=70), D(>=60), F(<60).
// Check if a year is a leap year (divisible by 4, except century years unless divisible by 400).
// Print numbers from 1 to 10 using a for loop.
// Print numbers from 10 to 1 in reverse using a for loop.
// Calculate sum of first 100 natural numbers using a loop.
// Print all even numbers from 2 to 20.
// Use while loop to print numbers 1 to 5.
// Print multiplication table of 5 (5x1 to 5x10).
// Use break to exit loop when i equals 5 in range(1, 10).
// Use continue to skip printing 5 in range(1, 10).
// Write nested loops to print a 3x3 matrix pattern.
// Calculate factorial of 5 using a loop.
// Write a function that takes two numbers and returns their sum.
// Write a function to check if a number is even. Return True or False.
// Create a function with default parameter: greet(name='Guest').
// Write a function that returns multiple values: min and max of two numbers.
// Create a function to calculate area of rectangle (length, width).
// Write a function to find the maximum of three numbers.
// What is the difference between parameters and arguments?
// Write a void function that prints a message (no return).
// Write a recursive function to calculate factorial of n.
// Write recursive function for Fibonacci number at position n.
// Write recursive function to calculate sum of digits of a number.
// Write recursive function to calculate power: pow(base, exp).
// What is a base case in recursion and why is it important?
// Write recursive function to print numbers from n to 1.
// Find the largest element in a list without using max() function.
// Count how many times a specific element appears in a list.
// Reverse a string using a loop.
// Check if a string is a palindrome.
// Find sum of all even numbers in a list.
// Swap two variables without using a third variable.
// Print the Fibonacci series up to n terms.
// Check if a number is prime.
// Convert temperature from Celsius to Fahrenheit: F = C * 9/5 + 32.
// Find GCD of two numbers using Euclidean algorithm.


// # Create detailed code solutions for all practice questions

// solutions_code = """
// # ============================================================================
// # PROGRAMMING FUNDAMENTALS - COMPLETE SOLUTIONS
// # ============================================================================
// # Total: 52 Practice Problems with Detailed Solutions
// # ============================================================================

// # ====================
// # VARIABLES AND DATA TYPES
// # ====================

// # Q1: Declare three variables: name, age, salary
// name = "John Doe"
// age = 25
// salary = 50000.50
// print(f"Name: {name}, Age: {age}, Salary: ${salary}")

// # Q2: Type identification
// print(type(10))     
// print(type(10.5))      
// print(type('10'))     
// print(type(True))     

// # Q3: Type conversion
// string_num = '123'
// int_num = int(string_num)      # 123
// float_num = float(string_num)  # 123.0
// print(f"Integer: {int_num}, Float: {float_num}")

// # Q4: Difference between x = 5 and x = '5'
// x = 5      # Integer type - can do math operations
// y = '5'    # String type - text character
// print(type(x), type(y))  # <class 'int'> <class 'str'>

// # Q5: String to int conversion and addition
// result = int('100') + int('200')  # 300
// print(f"Result: {result}")


// # ====================
// # OPERATORS
// # ====================

// # Q6: Floor division and modulus
// print(17 // 5)  # 3 (quotient - floor division)
// print(17 % 5)   # 2 (remainder - modulus)

// # Q7: Exponentiation
// print(2 ** 10)  # 1024

// # Q8: Logical AND
// print((5 > 3) and (10 < 20))  # True

// # Q9: Logical NOT
// print(not (5 > 10))  # True (negation of False)

// # Q10: Compound assignment operators
// x = 10
// x += 5   # x = 10 + 5 = 15
// x *= 2   # x = 15 * 2 = 30
// print(x) # 30

// # Q11: Logical OR
// print((10 > 5) or (20 < 15))  # True

// # Q12: Assignment vs Comparison
// a = 5      # Assignment: stores value 5 in variable a
// b = (a == 5)  # Comparison: checks if a equals 5, returns True
// print(f"a = {a}, b = {b}")


// # ====================
// # CONDITIONALS
// # ====================

// # Q13: Check positive, negative, or zero
// def check_number(num):
//     if num > 0:
//         return "Positive"
//     elif num < 0:
//         return "Negative"
//     else:
//         return "Zero"

// print(check_number(10))   # Positive
// print(check_number(-5))   # Negative
// print(check_number(0))    # Zero


// # Q14: Check even or odd
// def check_even_odd(num):
//     if num % 2 == 0:
//         return "Even"
//     else:
//         return "Odd"

// print(check_even_odd(10))  # Even
// print(check_even_odd(7))   # Odd


// # Q15: Maximum of three numbers
// def max_of_three(a, b, c):
//     if a >= b and a >= c:
//         return a
//     elif b >= a and b >= c:
//         return b
//     else:
//         return c

// # Alternative using built-in max
// def max_of_three_alt(a, b, c):
//     return max(a, b, c)

// print(max_of_three(10, 25, 15))  # 25


// # Q16: Ternary operator for Adult/Minor
// age = 20
// status = "Adult" if age >= 18 else "Minor"
// print(status)  # Adult


// # Q17: Grade assignment
// def assign_grade(score):
//     if score >= 90:
//         return 'A'
//     elif score >= 80:
//         return 'B'
//     elif score >= 70:
//         return 'C'
//     elif score >= 60:
//         return 'D'
//     else:
//         return 'F'

// print(assign_grade(85))  # B
// print(assign_grade(72))  # C


// # Q18: Leap year check
// def is_leap_year(year):
//     if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
//         return True
//     return False

// print(is_leap_year(2024))  # True
// print(is_leap_year(2100))  # False
// print(is_leap_year(2000))  # True


// # ====================
// # LOOPS
// # ====================

// # Q19: Print 1 to 10
// print("Numbers 1 to 10:")
// for i in range(1, 11):
//     print(i, end=' ')
// print()


// # Q20: Print 10 to 1 in reverse
// print("Numbers 10 to 1:")
// for i in range(10, 0, -1):
//     print(i, end=' ')
// print()


// # Q21: Sum of first 100 natural numbers
// total_sum = 0
// for i in range(1, 101):
//     total_sum += i
// print(f"Sum of 1 to 100: {total_sum}")  # 5050

// # Alternative: Using formula n*(n+1)/2
// n = 100
// formula_sum = n * (n + 1) // 2
// print(f"Using formula: {formula_sum}")  # 5050


// # Q22: Print even numbers 2 to 20
// print("Even numbers 2 to 20:")
// for i in range(2, 21, 2):
//     print(i, end=' ')
// print()


// # Q23: While loop 1 to 5
// print("While loop 1 to 5:")
// i = 1
// while i <= 5:
//     print(i, end=' ')
//     i += 1
// print()


// # Q24: Multiplication table of 5
// print("Multiplication table of 5:")
// for i in range(1, 11):
//     print(f"5 x {i} = {5 * i}")


// # Q25: Break statement
// print("Using break (stops at 5):")
// for i in range(1, 10):
//     if i == 5:
//         break
//     print(i, end=' ')
// print()


// # Q26: Continue statement
// print("Using continue (skips 5):")
// for i in range(1, 10):
//     if i == 5:
//         continue
//     print(i, end=' ')
// print()


// # Q27: Nested loops - 3x3 matrix
// print("3x3 matrix pattern:")
// for i in range(3):
//     for j in range(3):
//         print(f"({i},{j})", end=' ')
//     print()


// # Q28: Factorial using loop
// def factorial_loop(n):
//     factorial = 1
//     for i in range(1, n + 1):
//         factorial *= i
//     return factorial

// print(f"Factorial of 5: {factorial_loop(5)}")  # 120


// # ====================
// # FUNCTIONS
// # ====================

// # Q29: Function to add two numbers
// def add(a, b):
//     return a + b

// print(f"10 + 20 = {add(10, 20)}")  # 30


// # Q30: Function to check even number
// def is_even(n):
//     return n % 2 == 0

// print(f"Is 10 even? {is_even(10)}")  # True
// print(f"Is 7 even? {is_even(7)}")    # False


// # Q31: Function with default parameter
// def greet(name="Guest"):
//     return f"Hello, {name}!"

// print(greet("Alice"))  # Hello, Alice!
// print(greet())         # Hello, Guest!


// # Q32: Function returning multiple values
// def min_max(a, b):
//     return min(a, b), max(a, b)

// minimum, maximum = min_max(10, 25)
// print(f"Min: {minimum}, Max: {maximum}")  # Min: 10, Max: 25


// # Q33: Calculate area of rectangle
// def area_rectangle(length, width):
//     return length * width

// print(f"Area: {area_rectangle(10, 5)}")  # 50


// # Q34: Maximum of three numbers
// def max_three(a, b, c):
//     return max(a, b, c)

// print(f"Max of 10, 25, 15: {max_three(10, 25, 15)}")  # 25


// # Q35: Parameters vs Arguments
// # Parameters: variables in function definition
// def example_function(param1, param2):  # param1, param2 are parameters
//     return param1 + param2

// # Arguments: actual values passed when calling
// result = example_function(5, 10)  # 5, 10 are arguments


// # Q36: Void function (no return)
// def print_message(msg):
//     print(f"Message: {msg}")
//     # No return statement - returns None implicitly

// print_message("Hello World")


// # ====================
// # RECURSION BASICS
// # ====================

// # Q37: Recursive factorial
// def factorial(n):
//     # Base case
//     if n <= 1:
//         return 1
//     # Recursive case
//     return n * factorial(n - 1)

// print(f"Factorial of 5 (recursive): {factorial(5)}")  # 120


// # Q38: Recursive Fibonacci
// def fibonacci(n):
//     # Base cases
//     if n <= 1:
//         return n
//     # Recursive case
//     return fibonacci(n - 1) + fibonacci(n - 2)

// print(f"Fibonacci of 7: {fibonacci(7)}")  # 13


// # Q39: Recursive sum of digits
// def sum_of_digits(n):
//     # Base case
//     if n == 0:
//         return 0
//     # Recursive case
//     return n % 10 + sum_of_digits(n // 10)

// print(f"Sum of digits of 1234: {sum_of_digits(1234)}")  # 10


// # Q40: Recursive power function
// def power(base, exponent):
//     # Base case
//     if exponent == 0:
//         return 1
//     # Recursive case
//     return base * power(base, exponent - 1)

// print(f"2^5 = {power(2, 5)}")  # 32


// # Q41: Base case importance
// # Base case is the stopping condition in recursion
// # Without it, function would call itself infinitely
// # Example:
// def countdown(n):
//     if n <= 0:  # Base case - stops recursion
//         print("Done!")
//         return
//     print(n)
//     countdown(n - 1)  # Recursive call

// countdown(5)


// # Q42: Recursive print from n to 1
// def print_reverse(n):
//     if n > 0:
//         print(n, end=' ')
//         print_reverse(n - 1)

// print_reverse(5)  # 5 4 3 2 1
// print()


// # ====================
// # MIXED PRACTICAL PROBLEMS
// # ====================

// # Q43: Find largest element without max()
// def find_largest(arr):
//     if not arr:
//         return None
//     largest = arr[0]
//     for num in arr:
//         if num > largest:
//             largest = num
//     return largest

// print(f"Largest in [3, 7, 2, 9, 1]: {find_largest([3, 7, 2, 9, 1])}")  # 9


// # Q44: Count occurrences of element
// def count_element(arr, target):
//     count = 0
//     for x in arr:
//         if x == target:
//             count += 1
//     return count

// arr = [1, 2, 3, 2, 4, 2, 5]
// print(f"Count of 2: {count_element(arr, 2)}")  # 3


// # Q45: Reverse a string using loop
// def reverse_string(s):
//     reversed_str = ""
//     for char in s:
//         reversed_str = char + reversed_str
//     return reversed_str

// # Alternative using slicing
// def reverse_string_slice(s):
//     return s[::-1]

// print(f"Reversed 'hello': {reverse_string('hello')}")  # olleh


// # Q46: Check palindrome
// def is_palindrome(s):
//     # Method 1: Using slicing
//     return s == s[::-1]

// def is_palindrome_two_pointers(s):
//     # Method 2: Two pointers
//     left, right = 0, len(s) - 1
//     while left < right:
//         if s[left] != s[right]:
//             return False
//         left += 1
//         right -= 1
//     return True

// print(f"Is 'racecar' palindrome? {is_palindrome('racecar')}")  # True
// print(f"Is 'hello' palindrome? {is_palindrome('hello')}")      # False


// # Q47: Sum of even numbers in list
// def sum_even(arr):
//     total = 0
//     for num in arr:
//         if num % 2 == 0:
//             total += num
//     return total

// # Alternative using list comprehension
// def sum_even_alt(arr):
//     return sum(num for num in arr if num % 2 == 0)

// print(f"Sum of evens in [1,2,3,4,5,6]: {sum_even([1,2,3,4,5,6])}")  # 12


// # Q48: Swap two variables
// a, b = 5, 10
// print(f"Before swap: a={a}, b={b}")

// # Method 1: Using tuple unpacking (Pythonic)
// a, b = b, a

// # Method 2: Using arithmetic (works for numbers)
// # a = a + b  # a = 15
// # b = a - b  # b = 5
// # a = a - b  # a = 10

// # Method 3: Using XOR (works for integers)
// # a = a ^ b
// # b = a ^ b
// # a = a ^ b

// print(f"After swap: a={a}, b={b}")


// # Q49: Fibonacci series up to n terms
// def fibonacci_series(n):
//     a, b = 0, 1
//     series = []
//     for _ in range(n):
//         series.append(a)
//         a, b = b, a + b
//     return series

// print(f"First 10 Fibonacci numbers: {fibonacci_series(10)}")


// # Q50: Check if number is prime
// def is_prime(n):
//     if n < 2:
//         return False
//     for i in range(2, int(n ** 0.5) + 1):
//         if n % i == 0:
//             return False
//     return True

// print(f"Is 17 prime? {is_prime(17)}")  # True
// print(f"Is 20 prime? {is_prime(20)}")  # False


// # Q51: Celsius to Fahrenheit conversion
// def celsius_to_fahrenheit(celsius):
//     return celsius * 9/5 + 32

// print(f"25°C = {celsius_to_fahrenheit(25)}°F")  # 77.0


// # Q52: GCD using Euclidean algorithm
// def gcd(a, b):
//     # Base case
//     if b == 0:
//         return a
//     # Recursive case
//     return gcd(b, a % b)

// # Iterative version
// def gcd_iterative(a, b):
//     while b != 0:
//         a, b = b, a % b
//     return a

// print(f"GCD of 48 and 18: {gcd(48, 18)}")  # 6


// # ====================
// # BONUS: ADDITIONAL PATTERNS
// # ====================

// # Print right triangle pattern
// def print_triangle(n):
//     for i in range(1, n + 1):
//         print('* ' * i)

// print("Triangle pattern (5 rows):")
// print_triangle(5)


// # Print pyramid pattern
// def print_pyramid(n):
//     for i in range(1, n + 1):
//         print(' ' * (n - i) + '* ' * i)

// print("\\nPyramid pattern (5 rows):")
// print_pyramid(5)


// # Count vowels in a string
// def count_vowels(s):
//     vowels = 'aeiouAEIOU'
//     count = 0
//     for char in s:
//         if char in vowels:
//             count += 1
//     return count

// print(f"\\nVowels in 'Hello World': {count_vowels('Hello World')}")  # 3


// # ====================
// # END OF SOLUTIONS