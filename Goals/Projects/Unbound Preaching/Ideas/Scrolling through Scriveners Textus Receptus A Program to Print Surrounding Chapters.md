---
dg-publish: true
dg-created: Mar 29, 2019, 10:03 AM
dg-updated: Mar 29, 2019, 10:03 AM
dg-title: Scrolling through Scriveners Textus Receptus: A Program to Print Surrounding Chapters
tags: [website]
---

Create a program that prints a selected chapter of the Scriveners Textus Receptus and the chapters surrounding it upon scroll up or scroll down (like Olive Tree). Each word will trigger an event handler upon left-click, which will generate a popup window with information about that word (Strong's dictionary, concordance of where they are used, Perseus search, pronunciation, and timestamp link to a YouTube reading by a native Greek speaker). I will link to the video or audio files on my desktop and enable the user to clip a segment of the audio to associate with a unique word. Each word will need to have a key for this method, which may slow things down dramatically. 

The first thing to do is learn how to display an epub file online. Steps:

1. Get scriveners textus receptus as an epup file with chapter and verse metadata.
2. Display epub file
3. Add chapter and verse navigation functionality
4. Link to Strong's API
5. Link words to Strong's data

I will either need to assign a strong's number to each word that matches any of the forms, or I will check for a match by saying if word == strongs.word.


