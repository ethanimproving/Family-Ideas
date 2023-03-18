**Work Tasks**

- **Troubleshooting**
- [X] Learn to format code block highlighting
- Styles: Github Gist, Rainbow, Docco, Foundation, Color Brewer
- https://pinetools.com/syntax-highlighter
- [X] Change Play-Pause test to test whether audio is playing or not
- Integrate icon class onclick event to play test function
- [X] Fix the ondrag volume event
- Unmute if slider thumb is dragged, or when mute is toggled, set value to 0.
- include myAudio.muted = false; statement in the oninput function
- [X] Set mejs-remaining innerHTML equal to audio duration on load

```
myAudio.addEventListener('==loadedmetadata==', function() {
  var durmins = Math.floor( myAudio.duration / 60),
      dursecs = Math.floor( myAudio.duration - durmins * 60);
  if(durmins < 10){ durmins = "0"+durmins; }
  if(dursecs < 10){ dursecs = "0"+dursecs; }
    $(".mejs-remaining").html(durmins+":"+dursecs);
});
```

- Remove innerHTML for mejs-remaining div

`<div class="mejs-remaining"><s>-55:01</s></div>`

- [ ] Pre-load audio (?)
- [ ] Show how many decibels audio is with JavaScript
- [ ] Learn how to play only part of an audio file
- [[How to play part of an audio file on mouseclick or mouseover on a webpage?](https://stackoverflow.com/questions/11036036/how-to-play-part-of-an-audio-file-on-mouseclick-or-mouseover-on-a-webpage)]
- [X] Change audio to jump to 00:00 when ended
- [X] Resolve the time elapsed / remaining inaccuracy
- [desiringGod.org](https://www.desiringgod.org/messages/stand-on-your-head-for-joy#full-audio) has the same inaccuracy -- 2 minutes away from the end resulted in a 30 second inaccuracy.
- MP3 files (MPEG) are very simple streams and do not have absolute positional data within them. It isn't possible from reading the first part of the file to know at what byte offset some arbitrary frame begins. [[HTML5 audio - currentTime attribute inaccurate?](https://stackoverflow.com/questions/25468063/html5-audio-currenttime-attribute-inaccurate)]
- Notice how the duration value of an MP3 in VLC constantly jumps around
- [ ] Rewrite the time update and seek function to include a new invisible div
- Isolate newTime from total-time offset
    - did not make a difference
- Set input value equal to audio duration
    - did not work
- [ ] Impute math calculations to bar that follows slider thumb
- [ ] Make indicators child elements of time-total and set overflow to hidden
- [X] Set bubble value of NaN:NaN to 00:00

```
if (isNaN(bubmins)){ bubmins = "00";}
if (isNaN(bubsecs)){bubsecs = "00";}
```

- [ ] Make a setting available to set default playback speed
- [ ] Possibly set input value equal to duration (in seconds)

**Daily Tasks**

- [ ] Change hallway light bulb
- [X] Tidy hallway (-clear computer desk, -dust, -wipe down, -vacuum if everybody is downstairs and not sleeping)
- [X] Put analog keyboard away in the computer repository armoire
- [ ] Greece squeaky door
- [ ] Scrub moldy shower curtain
- [X] Turn Hallway computers and power supply off