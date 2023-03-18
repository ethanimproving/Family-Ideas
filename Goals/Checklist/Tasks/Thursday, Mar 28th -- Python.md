**[Lab 3](file:///A:/Users/Ethan/OneDrive%20for%20Business/Documents/Academic%20Documents/Spring%202019/ITSE%201359%20(Python)/Week%207/Lab03.pdf): **Python Classes – Creating Card Games

- **Exercise 1.**
- [X] Create a virtual environment and a subdirectory for your project
- [X] Open IDLE and create a file called cardgame.py.
- [X] Create the card class with an initializer that does nothing.

```
class Card:
  '''
  A playing card.
  '''
  def __init__(self):
    pass
```

- [X]  Create the deck class with an initializer that does nothing.

```
class Deck:
  '''
  A 52-card deck composed of:
  4 suites – clubs, diamonds, hearts, and spades

  each suite containing cards ranked from 2 through 10 plus an Ace, a Jack, a Queen, and a King.

  '''
  def __init__(self):
    pass
```

- [X] The card class looks like the simplest; start with it. Add attributes that store suite and rank information (responsibility 2a). Use the initializer method to assign the initial values passed as parameters.

```
def __init__(self, suite, rank):
  self.suite = suite
  self.rank = rank
```

- [X] Add a method to display the card (responsibility 2b).

```
def display(self, direction):
  if direction == 'up':
    print(self.rank, self.suite)
  else:
    print('*')
```

- [X] Since the deck holds all the cards (pun intended) to begin with, use the deck’s initializer to create each card and a data structure to hold them. How about using a list?

```
def __init__(self):
  # create a list to hold the cards
  self.stack=[]

  # initialize the deck with cards
  for suite in ('Clubs', 'Diamonds', 'Hearts', 'Spades'):

    # add the Ace
    new_card = Card(suite, 'Ace')
    self.stack.append(new_card)

    # add the number cards
    for rank in range(2,11):
      new_card = Card(suite,str(rank))
      self.stack.append(new_card)

    # add the Royals
    for rank in ('Jack', 'Queen', 'King'):
      new_card = Card(suite,str(rank))
      self.stack.append(new_card)
```

- [X]  For test purposes (and fun), create a method in the deck class to view all the cards in the deck.

```
def fan(self):
  # display undealt cards in deck
  for i in range(self.top_card, 52):
    card = self.stack[i]
    card.display('up')
```

- [X] Add functionality to deal a card (resonsibility 1c). Being an honest card shark, we will deal off the top of the deck. This is an almost perfect case for the use of a stack pointer, a variable that holds a pointer to a location in a stack or in our case an index value for the list of cards. As a card is dealt, the pointer is incremented to point farther down the deck.

```
self.top_card = 0
...
def deal_card(self):
  # check if all cards have been dealt
  if self.top_card == 52:
    return None
  else:
    dealt_card = self.stack[self.top_card]
    self.top_card = self.top_card + 1
    return dealt_card
```

- [X] Add the code that shuffles the deck. Consider the current state of the deck and remember dealt cards can’t be shuffled. Place statement at the top of your program.

```
import random
...
def shuffle(self, repeat_number):
  # exchange two cards at random
  for counter in range(1,repeat_number):
    # select two random cards from the deck
    first_index = random.randint(self.top_card,51)
    second_index = random.randint(self.top_card,51)

    # copy value of first_index to exchange with second_index
    c = self.stack[first_index]

    # replace first_index with value of second_index
    self.stack[first_index] = self.stack[second_index]

    # replace second index with original first_index value
    self.stack[second_index] = c
```

- [X] You can run and test your code by adding a few lines to the end of your program or run your program so that it is loaded into the interpreter and then type statements at the Python command prompt.

```

# display entire deck

d = Deck()
d.fan()

# deal the top card

c = Deck().deal_card()
c.display('up')
```

- [X]  Your niece likes to play Old Maid. Modify the code from Part 1 to support the addition of one Joker. Walk through your code to determine all the places that need to be modified.

```

# add the Joker card

new_card = Card('Mysterioius unknown 5th suite', 'Joker')
self.stack.append(new_card)
```

- Change 52 to 53
- Change 51 to 52

**[Chapter 7 Exercise](file:///A:/Users/Ethan/OneDrive%20for%20Business/Documents/Academic%20Documents/Spring%202019/COSC%201436%20(C++)/Modules/Week%2010%20-%20Arrays%20(Chapter%207)/Chapter7Exercise.pdf): **Rainfall Statistics Exercise

- **Exercise 1.**
- [X] Create Rainfall Statistics App

```
// Rainfall Statistics
// By Ethan Miller 3/28/2019

#include<iostream>
using namespace std;

// Constant for the number of months
const int NUM_MONTHS = 12;

int main()
{
  // Array to hold the rainfall data
  double rainFall[NUM_MONTHS];

  // Get the rainfall for each month.
  for (int month = 0; month < NUM_MONTHS; month++)
  {
    // Get this month's rainfall
    cout << "Enter the rainfall (in inches) for month #";
    cout << (month + 1) << ": ";
    cin >> rainFall[month];

    // Validate the value entered.
    while (rainFall[month] < 0)
    {
      cout << "Rainfall must be 0 or more.\n"
          << "Please re-enter: ";
      cin  >> rainFall[month];
    }

  }

  return 0;
}
```

[Chapter 7 Assignment](file:///A:/Users/Ethan/OneDrive%20for%20Business/Documents/Academic%20Documents/Spring%202019/COSC%201436%20(C++)/Modules/Week%2010%20-%20Arrays%20(Chapter%207)/Chapter7Exercise.pdf)**: **Chips and Salsa

- **Exercise 1.**
- [X]  Your goal is to ask record the sales for 5 different types of salsa,

1. - [X] the total sales, and the
2. - [X] names of the highest and lowest selling products.

Your program should have the following:

- [X]  The name of the program should be Assignment7.
- [X]  3 comment lines (description of the program, author, and date).
- [X]  Create a string array that stores five different types of salsas: mild, medium, sweet, hot, and zesty. The salsa names should be stored using an initialization list at the time the name array is created. (3 points)
- [X]  Have the program prompt the user to enter the number of salsa jars sold for each type of salsa using an array. Do not accept negative values for the number of jars sold. (4 points)
- [X]  Produce a table that displays the
- - [X] sales for each type of salsa (2 points),
- - [X] the total sales (2 points),
- - [X] and the names of the highest selling and lowest selling products (4 points).