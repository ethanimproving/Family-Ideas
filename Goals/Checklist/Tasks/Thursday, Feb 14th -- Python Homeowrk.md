**Homework 1:**  Using pip and snap in Book Exercises

- **Exercise 1.**
- [X] Step 1. Create a virtual environment called ‘ITSE1359’. (See Lab 2 for assistance.)

```
cd A:\Users\Ethan\Documents\virtualenvironments
--
python –m venv ITSE1359
```

- [X] Step 2. Examine the documentation for pygame on [PyPi.org](https://pypi.org/project/Pygame/#description).
- [X] Step 3. Activate ITSE1359 and install ‘pygame’ using pip.

```
cd ITSE1359\Scripts
--
activate
```

- [X] Step 4. Download the [samples file](https://www.microsoftpressstore.com/store/begin-to-code-with-python-9781509304523#downloads) from the download section of the textbook’s website. See page xxii at the front of the book for information on downloading examples and files. Extract all the zipped files.
- [X] Step 5. Create a subdirectory in ITSE1359 called ‘homework’.
- [X] Step 6. Create a subdirectory in homework called ‘chp3’.
- [X] Step 7. Copy the *snaps.py* file *from the chapter three example* directory into your new **chp3** directory. Any .py file you save in this directory will have access to the snaps.py. Unfortunately, the book author did not create a single snaps.py file but separate ones for each chapter. You will need to maintain separate chapter subdirectories each with its own snaps.py.
- [X] Move the Housemartins.jpg and ding.wav to the chp3 folder
- [X] <s>Add the Pygame library (pg. 65)

</s>
`<s>py -m pip install pygame --user</s>`

- [X] Install Pygame under ITSE1359

```
cd ..
--
pip install pygame
```

- [X] Step 8. Run the IDLE editor [in the virtual environment](https://stackoverflow.com/questions/4924068/how-to-launch-python-idle-from-a-virtual-environment-virtualenv).

```
<s>python -m idlelib.idle</s>
<s>-- OR</s>
python –m idlelib
```

- [X] Step 9. Type, save, and run code samples EG3-04, EG3-05, and EG3-06 from pages 66-68.

```

# EG3-04 hello world

#import snaps
from snaps import display_message

display_message('hello world')

---------------------------------------------------------

# EG3-05 housemartins

import snaps

snaps.display_image('Housemartins.jpg')
snaps.display_message('Hull Rocks',color=(255,255,255),vert='top')

-----------------------------------------------------------------------------

# EG3-06 Ding

import snaps

snaps.play_sound('ding.wav')
```

- [X] Take screenshots of the results of running EG3-04 and EG3-05.

- **Homework Submission**
- [X] 1. A zip file containing the three .py files and the two .png files. Remember to use the proper naming convention.

**Homework ****2:** Branching Control Structures

- **Exercise 1.**
- [X] Step 1. Create a subdirectory in homework called ‘chp4’ in your homework directory and populate it with the correct [snaps.py](file:///A:/Users/Ethan/OneDrive%20for%20Business/Documents/Academic%20Documents/Spring%202019/ITSE%201359%20(Python)/Week%201/Ch%2004%20Working%20with%20Data%20in%20Python) file as you did in Homework 1.
- [X] Step 2. Activate ITSE1359 and run IDLE so that it has access to all the virtual environment’s resources. Review Lecture 3 for help.

```
cd A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts
--
activate
--
cd ..
--
python –m idlelib
```

- [X] Step 4. Recreate EG4-05 and EG4-06 found on page 101.

```

# EG4-05 Seattle Temperature

import snaps

temp = snaps.get_weather_temp(latitude=47.61, longitude=-122.33)
print('The temperature in Seattle is:', temp)

----------------------------------------------------------------------------

# EG4-06 Seattle Weather

import snaps

desc=snaps.get_weather_desciption(latitude=47.61, longitude=-122.33)
print('The conditions are:',desc)
```

- [X] Step 5. Create a program following the instructions for the Make Something Happen section on page 102. Make it as fancy or simple as you wish. Remember that the program must meet the client’s (the professor) specifications (contained in Make Something Happen).

```

# EG4-Bonus Wylie Weather App

import snaps

temp = snaps.get_weather_temp(latitude=33.06, longitude=-96.54)
desc = snaps.get_weather_desciption(latitude=33.06, longitude=-96.54)
str1 = 'The temperature in Wylie is: '
str2 = '\nThe conditions are: '
snaps.display_message(str1+str(temp)+str2+desc, size=65)
```

- [X] Step 6. Save your program and take a screenshot of your output window.

**Exercise 2.**

- [X] Step 1. Create a subdirectory called chp5 and populate it accordingly.
- [X] Step 2. Examine the example code up to EG5-13.
- [X] Step 3. Create an application that meets the following specification:
- a. Displays the books.png file centered at the top of the window.
        - [ ] Override the snaps.py file to prevent image scaling

```
def display_image(filepath):
    '''
    Displays the image from the given filepath
    Starts pygame if required
    May throw exceptions
    '''
    global surface
    global window_size
    global image

    handle_events()
    image = pygame.image.load(filepath)
    image = pygame.transform.smoothscale(image, window_size)
    surface.blit(image, (0, 0))
    pygame.display.flip()
```

- b. Displays a list of book types and when the user selects a specific type, the best seller in that category is displayed. The five categories and associated best sellers are listed in the following table.

|     |     |
| --- | --- |
| Fiction | The Reckoning - John Grisham |
| Non-fiction | Becoming – Michelle Obama |
| Mystery | Becoming – Michelle Obama |
| Cooking | Food, Health, and Happiness – Oprah Winfrey |
| Travel | Lonely Planet USA |

- c. Add an additional option that randomly selects a category and displays the book and book type.

```

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

ride_number_text = snaps.get_string(prompt,vert='bottom',
                                    max_line_length=3)

confirm='Ride ' + ride_number_text
snaps.display_message(confirm)
```

Homework Submission
A zip file containing:
1. The window snapshot and code file from Exercise 1.
2. The window snapshot and code file from Exercise 2.