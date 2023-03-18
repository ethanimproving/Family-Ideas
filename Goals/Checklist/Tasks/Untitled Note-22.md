- **Get IMDB Movie Title App**
- [X] Install [IMDbPY package](https://pypi.org/project/IMDbPY/) to virtual environment

```
pip install IMDbPY

cd A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts>==activate==

(ITSE1359) A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts>==cd ..==

(ITSE1359) A:\Users\Ethan\Documents\virtualenvironments\ITSE1359>==pip install IMDbPY==

```

- [X] Modify the [code](https://imdbpy.sourceforge.io/) to return the movie title and year

```

# Ethan Miller

# 3/13/2019

# create an instance of the IMDb class

from imdb import IMDb
ia = IMDb()

# get the first result of a company search,

# update it to get the basic information

movie = ia.search_movie('Manfromsnowyriver')[0]
ia.update(movie)

# show the available information and print some

title = movie.get(movie.keys()[0])
year = movie.get(movie.keys()[2])

print(f'{title} ({year})')
```

- [X] Install [win32api](https://pypi.org/project/pywin32/)

```
pip install pypiwin32

a: && cd A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts && activate && cd .. && pip install pypiwin32

```

- [X] Follow [instructions](http://vermeulen.ca/python-win32api.html) to return the volume label for drive D://

```

# return name of movie from DVD Drive

volume_information = GetVolumeInformation("D:\\")
volume_label = volume_information[0]
print(volume_label)
```

- [X] Install [pyperclip](https://pypi.org/project/pyperclip/)

```
pip install pyperclip

a: && cd A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts && activate && cd .. && pip install pyperclip

```

- [X] Split code into functions

```

# Ethan Miller

# 3/13/2019

# create an instance of the IMDb class

from pyperclip import copy
from win32api import GetVolumeInformation
from imdb import IMDb
ia = IMDb()

def getVolumeLabel(drive):
'''
Reads in a disk drive ("D:\\") and returns its volume label.
'''

# return name of movie from DVD Drive

volume_information = GetVolumeInformation(drive)
volume_label = volume_information[0]
return volume_label

def getImdbTitle(search):
'''
Reads in a string to search IMDB for
and returns the first result found.
'''
movie = ia.search_movie(search)[0]

# update result to get the basic information

ia.update(movie)

# get the title and year

title = movie.get(movie.keys()[0])
year = movie.get(movie.keys()[2])

# string the input together and return it

movie_name = f'{title} ({year})'
return movie_name

movie_name = getImdbTitle(getVolumeLabel("D:\\"))

# copy movie name to clipboard

copy(movie_name)
```

```

# import requests

# r = requests.get('https://api.github.com/events')

# r = requests.post('https://httpbin.org/post', data = {'key':'value'})

```

- [X] Make script to run py file

```

a: && cd A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts && activate && cd .. && cd A:\Movies\Handbrake Files\ && Get_IMDB_Movie.py

==A:\Users\Ethan\Documents\virtualenvironments\ITSE1359\Scripts\python.exe "A:\Movies\Handbrake Files\Get_IMDB_Movie.py"==

```

- [ ] Let Caleb's Machine access my venv

`pushd "\\192.168.1.22\Movies"`

- [ ] Create virtual environment for Caleb's machine on my computer

```
pushd "\\192.168.1.22\Users\Ethan\Documents\virtualenvironments"
python –m venv DVD
cd DVD\Scripts && activate && cd ..
pip install IMDbPY pypiwin32 pyperclip

python –m idlelib
popd

\\FX-4100\Users\Ethan\Documents\virtualenvironments\DVD\Scripts\python.exe "\\FX-4100\Movies\Handbrake Files\Get_IMDB_Movie(Drive_E).py"

```

- [ ] Disconnect network drive after closing command prompt after using pushd
- My PC > Computer > Map Network Drive > Disconnect Network Drive

- [X] Add error handling
- [ ] If multiple titles exist, return top 5 and select which year.
- [ ] [Pass](https://stackabuse.com/command-line-arguments-in-python/) command line arguments to Python script