**Python in VS Code**

- **Lecture 3.**
- [X] Output the code to terminal

```
cd A:\xampp\htdocs\pythonsandbox\python_sandbox_finished
--
python variables.py
```

- [ ] Get code runner to ignore command

`PS C:\Users\ethan> python -u "a:\xampp\htdocs\pythonsandbox\python_sandbox_finished\variables.py"`

- [X] Concatenate variables with differing datatypes using **F-Strings** (similar to JavaScript Template Literals)

```

# Arguments by position

print('My name is {name} and I am {age}'.format(name=name, age=age))

# F-Strings (3.6+)

print(f'Hello, my name is {name} and I am {age}')
```

**Python Virtual Environments in VS Code**

- **Method 1**
- [X] Add virtual environments path to general settings

```
"python.venvPath": "A:\\Users\\Ethan\\Documents\\virtualenvironments"
"python.venvPath": "U:\\Profiles\\EMiller\\Documents\\virtualenvironments"
```

System Variables

U:\Profiles\EMiller\H123PRC\AppData\Local\Programs\Python\Python37\Scripts\;U:\Profiles\EMiller\H123PRC\AppData\Local\Programs\Python\Python37\;%USERPROFILE%\AppData\Local\Microsoft\WindowsApps;U:\Profiles\EMiller\H123PRC\AppData\Local\Programs\Microsoft VS Code\bin;U:\Profiles\EMiller\H123PRC\AppData\Local\Programs\Python\Python37\Lib\idlelib;

- [X] Reload VS Code to take effect
- [X]  Python: Select Interpreter

`Ctrl+Shift+P`

**- [X] **Troubleshoot

```

& : File A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts\activate.ps1 cannot be loaded because ==running scripts is disabled on this system==. For more information, see

about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:3
```

- [X] Open PowerShell as administrator
- [X] Set the execution policy:

```
Set-ExecutionPolicy RemoteSigned
-----------------------------------------------------
Execution Policy Change

The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose

you to the security risks described in the about_Execution_Policies help topic at

https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?

[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): ==y==

```

- [X] Make sure you are launching the file from the directory that it's in (i.e. add the direct folder to your workspace)

`PS A:\Users\Ethan\OneDrive for Business\Documents\Academic Documents\Spring 2019\ITSE 1359 (Python)\Week 4==\chp6==> python -u "a:\Users\Ethan\OneDrive for Business\Documents\Academic Documents\Spring 2019\ITSE 1359 (Python)\Week 4\chp6\EG6-18 Digital Clock.py"`

- **Method 2: Manually**
- [X] Open settings.json, navigate to workspace settings, and add the following line:

```

"python.pythonPath": "A:\\Users\\Ethan\\Documents\\virtualenvironments\\ITSE1359\\Scripts\\python.exe",

"python.autocomplete.extraPaths": [

    "A:\\Users\\Ethan\\Documents\\virtualenvironments\\ITSE1359\\Lib\\site-packages"

]
```

**Python Virtual Environments sctipt**

- [X] Open the ITSE1359 virtual environment

```
C:\Users\ethan>==a:==

A:>==cd A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts==

A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts>==activate==

(ITSE1359) A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts>==cd ..==

(ITSE1359) A:\Users\Ethan\Documents\virtualenvironments\ITSE1359>==python -m idlelib==

```

- [X] Create bat script to open ITSE1359

```

a: && cd A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts && activate && cd .. && python -m idlelib

u: && cd U:\Profiles\EMiller\Documents\virtualenvironments\ITSE1359\Scripts && activate && cd .. && python -m idlelib

```

- [X] Add script to shortcut and name it "ITSE1359 Virtual Environment"

```

C:\Windows\System32\cmd.exe /c "a: && cd A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts && activate && cd .. && python -m idlelib"

C:\Windows\System32\cmd.exe /c "u: && cd U:\Profiles\EMiller\Documents\virtualenvironments\ITSE1359\Scripts && activate && cd .. && python -m idlelib"

```

**[Homework 3](file:///A:/Users/Ethan/OneDrive%20for%20Business/Documents/Academic%20Documents/Spring%202019/ITSE%201359%20(Python)/Week%204/HW3-1.pdf):**  Looping Control Structures

- **Exercise 1.**
- [X] Work the Make Something Happen problem on [p149](file:///A:/Users/Ethan/OneDrive%20for%20Business/Documents/Academic%20Documents/Spring%202019/ITSE%201359%20(Python)/Begin-to-Code-with-Python.pdf).
- [X] Modify EG5-13 and remember to convert the command prompt statement to snaps command for input/output (i/o).

```

# EG5-13 Theme Park Snaps Display

import snaps

print('''These are the available rides

1: Scenic River Cruise
2: Carnival Carousel
3: Jungle Adventure Water Splash
4: Downhill Mountain Run
5: The Regurgitator
''')

# User input and data-type validation

def user_input():
  try:
    ride_number_text = input('Please enter the ride number you want: ')
    #
    # Define ride_number globally for the while loop and final print
    global ride_number
    ride_number = int(ride_number_text)
  except ValueError:
    print('Invalid Number')
    #

    # Prompt the user to enter a valid number before continueing to the while loop

    # If ride_number is not assigned a valid integer, it will be undefined when it gets to the while loop test

    user_input()

user_input()

# Ride number validation

while ride_number < 1 or ride_number > 5:
  print('There is no ride with that number')
  user_input()

print(f'You have selected ride number: {ride_number}')

------------------------------------------------------------------------------------------------

# EG5-13 Theme Park Snaps Display

import snaps

snaps.display_image('themepark.png')

prompt='''These are the available rides

1: Scenic River Cruise
2: Carnival Carousel
3: Jungle Adventure Water Splash
4: Downhill Mountain Run
5: The Regurgitator

Select your ride: '''

# User input and data-type validation

def user_input():
  try:
    ride_number_text = snaps.get_string(prompt,vert='bottom',max_line_length=1)
    #
    # Define ride_number globally for the while loop and final print
    global ride_number
    ride_number = int(ride_number_text)
  except ValueError:
    snaps.display_message('Invalid Number',size=50)
    #

    # Prompt the user to enter a valid number before continueing to the while loop

    # If ride_number is not assigned a valid integer, it will be undefined when it gets to the while loop test

    user_input()

user_input()

# Ride number validation

while ride_number < 1 or ride_number > 5:
  snaps.display_message('There is no ride with that number',size=50)
  user_input()

snaps.display_message(f'You have selected ride number: {ride_number}',size=50)
```

- [X] Troubleshoot

```
Traceback (most recent call last):

  File "a:\Users\Ethan\OneDrive for Business\Documents\Academic Documents\Spring 2019\ITSE 1359 (Python)\Week 4\EG5-13 Theme Park Snaps Display.py", line 51, in <module>

    while ride_number < 1 or ride_number > 5:
NameError: name 'ride_number' is not defined
```

After user_selection() failed to assign a value to ride_number, ==it continued on to the while loop that was testing for ride_number==. To overcome this, you can either initialize the ride_number variable to 0 so that it's defined, or you can loop the user_selection function by adding it to the except results.

Alternatively, you could wrap it in a while loop that tests whether a boolean is false, and continue until it's the number is a valid integer.

```
def user_selection():
  try:
    ride_number_text = input('Please enter the ride number you want: ')
    global ride_number
    ride_number = int(ride_number_text)
  except ValueError:
    print('Invalid Number')
    ==user_selection()==
==    # You could also initialize the variable like this:==
==    #ride_number = 0==

user_selection()

# Check for invalid numbers

while ride_number > 5 or ride_number < 1:
    print('Please enter a valid number')
    user_selection()

---------------------------------------------------------------

#EG6-04 Handing invalid text
ride_number_valid=False            # create a flag value and set it to False
==while ride_number_valid==False:  ==  # repeat while the flag is False
    try:                           # start of code that might throw exceptions

        ride_number_text = input('Please enter the ride number you want: ') # read in some text

        ride_number = int(ride_number_text)  # convert the text into a number (might raise exception)

        ==ride_number_valid=True==  # if we get here we know the number is OK. Set the flag.

    except ValueError:          # the handler for an invalid number
        print('Invalid number text. Please enter digits.') # display a message
    except KeyboardInterrupt: # the handler for an invalid number
        print('Please do not try to stop the program.')

# When we get here we have a valid ride number

print('You have selected ride',ride_number)
```

- **Exercise 2.**
- [X]  Add error handling to the application you developed for exercise 1. (If you had difficulty with exercise 1, add error handling to EG5-13.)

1. - [X] Trap the entry of an invalid number. (See EG6-03 example.)
2. - [X] Trap the <Ctrl>+<C> using KeyboardInterrupt exception. (p156)

- In Excercise 2, ignore the 'Modify EG5-13 and remember to convert the command prompt statement to snaps command for input/output (i/o)' at the end. It's a copy error from Excercise 1. I will remove the line from the homework assignment.

- **Exercise 3.**
- [X] Add error handling to [my solution](https://collin.instructure.com/courses/838618/files/57581975/download?wrap=1) to exercise 4 in homework 2. (Download my solution from the [Homework Solutions](https://collin.instructure.com/courses/838618/pages/homework-answers) page.)
- [X] 1. Trap all exceptions using the following code:

```
except Exception as e:
    print( "Error: “ + str(e) )
```

An error occurs when selecting category 4 in my example solution.

- [X] Run your application and select category 4.
- [X] Examine the error in the IDLE Shell interpreter window.
- [X] Take a snapshot of the Shell window for submission.

- [X] Post Discussion:

Is anyone able to catch the "Text too large" exception for homework 3 exercise 3? Snaps raises an exception on line 175 if the text height is greater than the window height of 600 pixels, but

except Exception as e:
    print('Error: ' + str(e))

isn't trapping it. Instead, I'm getting the normal traceback and snaps itself is printing, "Exception: Text too large for window" and closes the program. I'm not sure what's going wrong.

However, I'm still getting a traceback.

Is anyone able to get the "Text too large" exception for exercise 3? Snaps raises an exception on line 175 if the text height is greater than the window height of 600 pixels, but the exception makes the program stop before print('Error: ' + str(e)) has the chance to print "Error: Text too large for window." Instead, snaps itself is printing, "Exception: Text too large for window" and closes the program.

If I remove the exception from snaps, no problem is detected at all, and the text just prints outside the window. So we need snaps to raise the exception, but if snaps raises the exception, our program stops before we have the chance to catch the exception. I don't know how to get out of this paradox.

but the exception makes the program stop before print('Error: ' + str(e)) has the chance to print "Error: Text too large for window."

From what I understand, "except Exception as e:" should be dealing with any raised exceptions the way isn't catching the exception.

 I think it's already programmed into snaps.

```
if height > window_size[1]:
    raise Exception('Text too large for window')
```

Oh, I was a goofball. I had my try-except block inside my while loop, which accepted the integer 4 just fine. Then the program continued on to display the message, and I wasn't looking for exceptions there. So basically my loop exited as soon as category_number_int was set to 4, and my try-except block was obsolete because it was only catching errors inside my loop.

- **Exercise 4.**
- [X] Use the following tuple to modify my solution to exercise 4 in homework 2. (Download my solution from the Homework Solutions page.)

`bestsellers = ('The Reckoning - John Grisham','Becoming – Michelle Obama','The Thin Man - Dashiell Hammett','Food, Health, and Happiness – Oprah Winfrey','Lonely Planet US’)`

- [X] Add an additional option to the list called ‘Print List’.
- [X] Using the ‘for’ looping construct and print() statement to print the complete list of bestsellers. For the moment we will pretend print() outputs to the printer and not the interpreter console.
- [X] Run your application and select ‘Print List’. Take a snapshot of the Shell window for submission.
- [X] You can access individual elements of a tuple by using an index. For example, bestsellers[0] will return 'The Reckoning - John Grisham' and bestsellers[1] will return 'Becoming – Michelle Obama'. Notice that the index starts at 0 not 1. Place the bestsellers tuple at the beginning of your program and replace all the book text entries in the if construct with a command tuple(index) statement.

- **Exercise 5.**
- [X] Modify EG6-18 as directed in the Do the Make Something Happen on page 167.
- [X] Create an alarm that will sound the shift change at the shipyard.
- [X] Make it whistle once for first shift (8AM), twice for second shift (4PM), and three times for third shift (12 midnight).
- [X] Download and use the whistle.wav file.

- **Homework Submission**

1. A zip file containing the .py file for excercises 1 to 5 and the snapshot from exercise 3.