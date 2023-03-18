[Homework 4](file:///A:/Users/Ethan/OneDrive%20for%20Business/Documents/Academic%20Documents/Spring%202019/ITSE%201359%20(Python)/Week%205/HW4-1.pdf)**: **Using Functions to Simplify Programs ([Chapter 7](file:///A:/Users/Ethan/OneDrive%20for%20Business/Documents/Academic%20Documents/Spring%202019/ITSE%201359%20(Python)/Begin-to-Code-with-Python.pdf))

- **Exercise 1.**
- [X]  Create a function called ‘get_type’ that:

1. - [X] Accepts one argument

2. - [X] Checks if that argument is an integer, a float, or a string using the isinstance function.

3. - [X] Returns the result as either ‘integer’, ‘float’, or ‘string’.
4. - [X] If it is not one of the three type, return an empty string ‘’.

5. - [X] Add code to test your function. Print your result to the interpreter window and take a screenshot for submission.

The required object types for comparison in this exercise are: int for integer, float for floating point, and str for string.

```

# Ethan Miller

# ITSE 1359

# Homework 4 Exercise 1

# Name of excersize

def get_type(data):
  # define datatypes.
  types = (int, float, str)
  type_names = ('integer', 'float', 'string')

  for type in types:

    # check if first letter of datatype is a vowel
    vowel = ['a','e','i','o','u']
    if type_names[types.index(type)][0].lower() in vowel:
      determiner = 'an'
    else:
      determiner = 'a'

    # if
    if isinstance(data,type)==True:
      print(f'You have input {determiner} {type_names[types.index(type)]}')
      break
    else:
      continue

try:
  data = eval(input('Enter any text or number you like: '))
  get_type(data)
except NameError:
  print('You have input a string')
except:
  print("")
```

- **Extra Credit**
- [X] Create a function called ‘get_tuple_value_types’ that

1. - [X] Accepts one tuple as an argument.
2. - [X] Determines the type of each value in the tuple.

3. - [X] Returns a tuple containing the type of each value of the argument tuple as a string, i.e., ‘integer’, ‘float’, or ‘string’.

4. - [X] If a value is not one of the three types, return an empty string '' in the tuple.

5. - [X] Add code to test your function using the tuple, (‘a’,4,6.4,(1,2,3)).

- [X] Print your result to the interpreter window and take a screenshot for submission.

```

# Ethan Miller

# ITSE 1359

# Homework 4 Exercise 1

# Get function value types

def get_tuple_value_types(*data):

  # define datatypes.
  types = (int, float, str)
  type_names = ('integer', 'float', 'string')

  # create empty list to hold data for new tuple
  new_tuple = []

  # append the datatype of each datum to new_tuple
  for datum in data:
    for type in types:
      if isinstance(datum,type)==True:
        new_tuple.append(type_names[types.index(type)])
        break
    else:
      new_tuple.append('')

  # convert contents of the list into a tuple and return it
  new_tuple = tuple(new_tuple)
  return new_tuple

# example data

data = ('a', 4, 6.4, (1,2,3))

# display the tuple datatypes from example data

print(get_tuple_value_types(*data))
```

- **Exercise 2.**
- [X] Create a function called ‘print_characters that

1. - [X] Accepts one argument. The argument should be a tuple of integers.

2. - [X] Convert each value to a Unicode character using the chr() function (Look it up in the Python documentation.) and print each Unicode character to the interpreter window.

3. - [X] Add error handling to check if each value is valid Unicode. The chr() documentation contains the valid range and the appropriate exception to handle. If the value isn’t valid, skip that value.

4. - [X] Add code to test your function using the argument (945,946,947,948).

- [X] Print your result to the interpreter window and take a screenshot for submission.

```

# Ethan Miller

# ITSE 1359

# Homework 4 Exercise 2

# Get number of characters

def print_characters(integers):
  'Prints the Unicode characters that correspond to given integers passed in'
  for integer in integers:
    try:
      print(chr(integer))
    except ValueError:
      continue

# example integers

integers = (945,946,947,948)

# print the Unicode characters that correspond to the given integers

print_characters(integers)
```

- **Exercise 3.**

1. - [X]  Create a file called chp7_functions.py. Add the example functions in EG7-02, EG7-03, EG7-04, EG7- 06, and EG07-10 to the file. Don’t copy extra code, just the functions.

2. - [X] Create an application file example_3.py and
    1. - [X] Import the chp7_functions module.

    2. - [X] Invoke the EG7-02 function in your example_3.py application with an argument value of 5. Take a screenshot of the result in the interpreter. [Is it supposed that we're supposed to rename the functions?]

    3. - [X] Create a function in your example_3.py application called run_eg7_10.

    4. - [X] Invoke your new function in example_3.py with the statement print(‘You have selected ride: ‘, run_eg7_10()) modified to use the following arguments: [Why are we creating a new function that only runs another function and returns its value? Why not just use the chp7_functions.get_value() function and leave it at that?]

        1. - [X] prompt = ‘Please enter the ride number you want: ‘
        2. - [X] value_min = 1
        3. - [X] value_max = 5
    5. - [X] Enter 4 and take a screenshot of the result in the interpreter.

```

# Ethan Miller

# ITSE 1359

# Homework 4 Exercise 3

import chp7_functions

# from chp7_functions import *

# safer_times_table(5)

def run_eg7_10(prompt, value_min, value_max):
  return chp7_functions.get_value(prompt, value_min, value_max)

prompt = 'Please enter the ride number you want: '
value_min = 1
value_max = 5

print('You have selected ride: ', run_eg7_10(prompt, value_min, value_max))
```

- **Exercise 4.**

1.  - [X] Start you virtual environment and run IDLE.

2. - [X] Import chp7_functions module from exercise 3 at the IDLE shell interpreter command prompt. [Open the py file and run it first, to restart the IDLE in the right directory]

3. - [X] Open the chp7_functions module in the editor and set a break point on line 11, print(‘Value too large’).

4. - [X] Turn the debugger on from the shell menu.

5. - [X] At the interpreter command prompt enter, ‘chp7_functions.get_value("Enter a ride number: ", 1, 5)

6. - [X] When the debugger activates, press the Go button.
7. - [X] Enter 10 at the application prompt.

8. - [X] Take a snapshot of the Debug Control window when the application stops at the break point.

- **Homework Submission.**

1.  - [X] A zip file containing the .py files and snapshot for exercises 1- 3 and the snapshot from exercise 4

- **Discussion Post.**

It looks to me like you understand it correctly. If you review the [documentation](https://docs.python.org/3/library/functions.html?highlight=chr#chr) for the chr() function, it's based on Unicode, not ASCII. Presumable reasons are covered on page 83 of our textbook:

"ASCII is a perfectly fine standard if you don’t want to print more than 100 or so different characters. However, because many modern languages use more than 100 characters, UNICODE has become the new standard. UNICODE allows for many more characters, emojis, and emoticons."

Nice catch on EG7-06. I copied it over without even notice it was the same. I doubt Prof will take off points for leaving it out, since we only use the functions from EG7-02 and EG7-10, and we followed instructions in dealing with the sample files. But if you want to be a little more conscientious, you can [copy the code](https://pastebin.com/NbCH5cYQ) from page 181 of the textbook (under the heading "Default parameter values," since you have an eBook).

If you notice in exercise 4, Prof says line 11 is print(‘Value too large’), and that only makes sense if the get_value() function is the only function in the py file.