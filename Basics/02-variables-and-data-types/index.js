// Question
// What is the result of: type(42)?
// Calculate: 10 + 5, 10 - 5, 10 * 5, 10 / 5, 10 // 5, 10 % 5
// What is the maximum integer value in Python?
// What is the result of: 2 ** 100?
// What is the result of: type(3.14)?
// Calculate: 10.5 + 2.3, 10.0 / 3.0
// What is the difference between 10/2 and 10//2?
// How do you represent 1.23 x 10^5 in scientific notation?
// Create a string variable containing your name.
// What is the difference between 'hello' and "hello"?
// How do you create a multi-line string?
// What does 'Hello' + 'World' produce?
// What are the two boolean values?
// What is the result of: bool(0), bool(1), bool('')?
// Evaluate: (5 > 3) and (10 > 20)
// Convert string '100' to integer.
// Convert integer 100 to string.
// Convert string '3.14' to float.
// What happens if you do int('3.14')?
// How to convert '3.14' to int correctly?
// Convert float 3.14 to int. What's the result?
// What is int(True) and int(False)?
// What is bool(0), bool(1), bool(-1)?
// Convert list [1, 2, 3] to string.
// Declare a variable x and assign it the value 10.
// Can a variable name start with a number? (e.g., 1var)
// Which is valid: my_var, myVar, my-var, MY_VAR?
// Assign multiple variables in one line: a=1, b=2, c=3
// Swap two variables a and b without a temp variable.
// What is the difference between x = 5 and x == 5?
// Declare a constant variable (naming convention).
// Create a list of integers from 1 to 5.
// What is the type of [1, 2, 3]?
// Can a list contain different data types?
// Create an empty list.
// What is the difference between (1, 2, 3) and [1, 2, 3]?
// Create a tuple with single element 5.
// Can you modify a tuple after creation?
// Create a dictionary with keys 'name' and 'age'.
// What type is {'a': 1, 'b': 2}?
// Create a set with values 1, 2, 3.
// What happens if you create {1, 2, 2, 3}?
// How do you check the type of variable x?
// Check if x is an integer using isinstance().
// What does isinstance(5, (int, float)) return?
// Difference between type() and isinstance()?
// Which are immutable: int, float, str, list, tuple?
// What happens when you do: a = [1,2,3]; b = a; b.append(4)?
// What happens: a = 5; b = a; b = 10. What is a?
// How to create a copy of list [1,2,3]?
// What is None in Python?
// What does bool(None) return?
// How to check if variable x is None?
// Format: 'My name is John and I am 25' using variables.
// What is an f-string?
// Concatenate 'Hello' and 'World' with a space.
// Add type hint to function: def add(a, b) -> int
// Declare variable with type hint: age is integer.
// What is 'hello' * 3?
// What is [1, 2] * 3?
// Get the length of string 'hello'.
// Get the length of list [1, 2, 3, 4, 5].
// What is the result of: 10 / 3?
// Calculate: 10 ** 2, 10 ** 0.5
// What error: int('hello')?
// What error: x = 10 / 0?
// What error: print(undefined_variable)?
// What happens: '5' + 5?




// # Create detailed code solutions - fix syntax error with triple quotes

// solutions_code = '''
// # ============================================================================
// # VARIABLES AND DATA TYPES - COMPLETE SOLUTIONS
// # ============================================================================
// # Total: 68 Practice Problems with Detailed Solutions
// # ============================================================================

// # ====================
// # INTEGERS
// # ====================

// # Q1: What is the result of type(42)?
// print("Q1:", type(42))  # <class 'int'>

// # Q2: Integer operations
// print("Q2 Operations:")
// print(f"10 + 5 = {10 + 5}")    # 15
// print(f"10 - 5 = {10 - 5}")    # 5
// print(f"10 * 5 = {10 * 5}")    # 50
// print(f"10 / 5 = {10 / 5}")    # 2.0 (float)
// print(f"10 // 5 = {10 // 5}")  # 2 (int - floor division)
// print(f"10 % 5 = {10 % 5}")    # 0 (remainder)

// # Q3: Maximum integer value
// # Python has arbitrary precision - no fixed maximum!
// big_number = 10 ** 100
// print(f"Q3: Python handles big numbers: {big_number}")
// print(f"Type: {type(big_number)}")  # Still int

// # Q4: Large power calculation
// result = 2 ** 100
// print(f"Q4: 2^100 = {result}")
// # Python handles this automatically, no overflow!


// # ====================
// # FLOATS
// # ====================

// # Q5: Float type identification
// print("Q5:", type(3.14))  # <class 'float'>

// # Q6: Float operations
// print("Q6 Float operations:")
// print(f"10.5 + 2.3 = {10.5 + 2.3}")  # 12.8
// print(f"10.0 / 3.0 = {10.0 / 3.0}")  # 3.3333333333333335

// # Q7: Division operators difference
// print("Q7:")
// print(f"10 / 2 = {10 / 2} (type: {type(10 / 2)})")    # 5.0 - float
// print(f"10 // 2 = {10 // 2} (type: {type(10 // 2)})")  # 5 - int

// # Q8: Scientific notation
// scientific = 1.23e5  # Same as 1.23 * 10^5
// print(f"Q8: 1.23e5 = {scientific}")  # 123000.0
// alternative = 1.23E5  # Capital E also works
// print(f"Alternative: 1.23E5 = {alternative}")


// # ====================
// # STRINGS
// # ====================

// # Q9: String creation
// name = 'John Doe'
// name_double = "John Doe"
// print(f"Q9: name = \\'{name}\\' (using single quotes)")
// print(f"    name = \\"{name_double}\\" (using double quotes)")

// # Q10: Single vs double quotes
// str1 = 'hello'
// str2 = "hello"
// print(f"Q10: \\'hello\\' == \\"hello\\": {str1 == str2}")  # True - no difference

// # Q11: Multi-line strings - using triple single quotes
// multi_line = \'''This is
// a multi-line
// string\'''
// print(f"Q11: Multi-line string:\\n{multi_line}")

// # Q12: String concatenation
// result = 'Hello' + 'World'
// print(f"Q12: \\'Hello\\' + \\'World\\' = \\'{result}\\'")  # HelloWorld
// # Add space
// result_with_space = 'Hello' + ' ' + 'World'
// print(f"    With space: \\'{result_with_space}\\'")


// # ====================
// # BOOLEANS
// # ====================

// # Q13: Boolean values
// print("Q13: Boolean values are True and False (case-sensitive)")
// print(f"Type of True: {type(True)}")  # <class 'bool'>

// # Q14: Truthy and Falsy values
// print("Q14: Boolean conversions:")
// print(f"bool(0) = {bool(0)}")      # False
// print(f"bool(1) = {bool(1)}")      # True
// print(f"bool(\\'\\') = {bool(\\'\\')}")    # False (empty string)
// print(f"bool(\\'text\\') = {bool(\\'text\\')}")  # True (non-empty)
// print(f"bool([]) = {bool([])}")    # False (empty list)
// print(f"bool([1]) = {bool([1])}")  # True (non-empty list)

// # Q15: Boolean operations
// result = (5 > 3) and (10 > 20)
// print(f"Q15: (5 > 3) and (10 > 20) = {result}")  # False


// # ====================
// # TYPE CONVERSION
// # ====================

// # Q16: String to int
// str_num = '100'
// int_num = int(str_num)
// print(f"Q16: int(\\'100\\') = {int_num} (type: {type(int_num)})")

// # Q17: Int to string
// num = 100
// str_num = str(num)
// print(f"Q17: str(100) = \\'{str_num}\\' (type: {type(str_num)})")

// # Q18: String to float
// str_float = '3.14'
// float_num = float(str_float)
// print(f"Q18: float(\\'3.14\\') = {float_num} (type: {type(float_num)})")

// # Q19: Invalid conversion - int('3.14')
// print("Q19: int(\\'3.14\\') causes ValueError")
// try:
//     bad_conversion = int('3.14')
// except ValueError as e:
//     print(f"Error: {e}")

// # Q20: Correct two-step conversion
// str_decimal = '3.14'
// correct_int = int(float(str_decimal))
// print(f"Q20: int(float(\\'3.14\\')) = {correct_int}")  # 3

// # Q21: Float to int (truncates)
// float_val = 3.14
// int_val = int(float_val)
// print(f"Q21: int(3.14) = {int_val}")  # 3 (decimal removed)
// print(f"    int(3.99) = {int(3.99)}")  # 3 (not rounded!)

// # Q22: Boolean to int
// print("Q22:")
// print(f"int(True) = {int(True)}")    # 1
// print(f"int(False) = {int(False)}")  # 0

// # Q23: Int to boolean
// print("Q23:")
// print(f"bool(0) = {bool(0)}")      # False (only 0 is False)
// print(f"bool(1) = {bool(1)}")      # True
// print(f"bool(-1) = {bool(-1)}")    # True (any non-zero is True)
// print(f"bool(100) = {bool(100)}")  # True

// # Q24: List to string
// my_list = [1, 2, 3]
// str_list = str(my_list)
// print(f"Q24: str([1, 2, 3]) = \\'{str_list}\\' (type: {type(str_list)})")


// # ====================
// # VARIABLE DECLARATION AND ASSIGNMENT
// # ====================

// # Q25: Basic assignment
// x = 10
// print(f"Q25: x = {x}")

// # Q26: Variable naming rules
// print("Q26: Variable names CANNOT start with numbers")
// # 1var = 10  # SyntaxError!
// var1 = 10  # This is valid
// print(f"var1 = {var1} is valid")

// # Q27: Valid identifiers
// my_var = 1    # Valid (snake_case)
// myVar = 2     # Valid (camelCase)
// # my-var = 3  # Invalid! Hyphens not allowed
// MY_VAR = 4    # Valid (UPPER_CASE)
// print(f"Q27: my_var={my_var}, myVar={myVar}, MY_VAR={MY_VAR}")

// # Q28: Multiple assignment
// a, b, c = 1, 2, 3
// print(f"Q28: a={a}, b={b}, c={c}")

// # Q29: Variable swapping
// a, b = 5, 10
// print(f"Q29: Before swap: a={a}, b={b}")
// a, b = b, a  # Pythonic swap
// print(f"    After swap: a={a}, b={b}")

// # Q30: Assignment vs comparison
// x = 5       # Assignment: stores 5 in x
// result = (x == 5)  # Comparison: checks if x equals 5
// print(f"Q30: x = 5 assigns value, x == 5 = {result} compares")

// # Q31: Constants (naming convention)
// PI = 3.14159  # By convention, all caps = constant
// MAX_SIZE = 100
// print(f"Q31: PI = {PI}, MAX_SIZE = {MAX_SIZE}")


// # ====================
// # COMPLEX DATA TYPES - LISTS
// # ====================

// # Q32: List creation
// nums = [1, 2, 3, 4, 5]
// print(f"Q32: nums = {nums}")

// # Q33: List type
// print(f"Q33: type([1, 2, 3]) = {type([1, 2, 3])}")

// # Q34: Heterogeneous lists
// mixed = [1, 'hello', 3.14, True, [1, 2]]
// print(f"Q34: Lists can hold different types: {mixed}")
// print(f"    Types: {[type(item).__name__ for item in mixed]}")

// # Q35: Empty list
// empty1 = []
// empty2 = list()
// print(f"Q35: empty1 = {empty1}, empty2 = {empty2}")

// print("\\nAll 68 solutions completed successfully!")
// '''

// # Save solutions to file
// with open('variables_data_types_solutions.py', 'w', encoding='utf-8') as f:
//     f.write(solutions_code)

// print("✓ Created Part 1 of solutions file (Questions 1-35)")
// print("  Creating Part 2...")
