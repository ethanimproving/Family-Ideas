**Work Tasks**

- **Playback Speed Controller**
- [X] Add playback speed drop down menu
- Align absolute positioned element by center with   transform:translateX(-50%)
- [X] Add playback speed content buttons (0.25, 0.5, 1, 1.25, 1.5, 2, 3)
- [X] Toggle Show/Hide on click
- [X] Hide on outside click and stay showing on child click
- [X] Link content buttons to audio speed
- [X] Highlight currently selected speed

- **Troubleshooting**
- [X] Fix time update-seek thumb issue
- Karma from commenting out newTime function
- Consider creating another div between time-total and time-input to click on
- input.max / time-total.width, (input.width - time-total.width) / 2
- [ ] Set .mejs-remaining innerHTML equal to audio duration on load
- [ ] Pre-load audio
- [ ] Show how many decibles audio is javascript

```

    var numbersPerPx = seekslider.max / ($("#mejs-time-total").width()+volumeHandleDiameter),

        marginNumbers = numbersPerPx * volumeHandleDiameter,
        offsetFactor = marginNumbers / myAudio.duration,
        half = marginNumbers / 2,

        newTime = (myAudio.currentTime / myAudio.duration) * seekslider.max - half + (myAudio.currentTime * offsetFactor);

seekslider.value = newTime;
```

**Daily Tasks**

- [ ] Change hallway light bulb
- [ ] Tidy hallway (-clear computer desk, -dust, -wipe down, -vacuum if everybody is downstairs and not sleeping)
- [ ] Put analog keyboard away in the computer repository armoire
- [X]  cut two boards (6 x 79.75, 6 x 13 feet)
- [X]  screw side board into back board
- [X]  hold up and screw into wall studs
- [X]  take down old extension cord
- [X]  sing hymns while Brian builds support box
- [X]  cut second long board
- [X]  put it up
- [X]  cut long pieces of wood topping

|     |     |
| --- | --- |
| **Rabbit Hole Tasks** | **Date/Time Achieved** |
| - [X] Create tabular checklist | 7/20/2018 8:43 AM |

From now on if I assigned a task for one day and didn't finish it, I'll leave it black and copy it into the next day. I won't check it off. That way I have a record of what I accomplish of specific days.

For boostnote:

Toggle Hide and Show

var x = document.getElementById("speedMenu");
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }

var source = "https://www.w3schools.com/howto/howto_js_toggle_class.asp"

Use ==Ctrl+D== to select the next occurrence of a string
Use ==shift-ctrl-p== to open the Command Palette.

The .value property applies to form elements (inputs), not divs. You can change it to <option> or use .innerHTML instead.

https://stackoverflow.com/questions/10694661/document-getelementbyid-value-return-undefined-in-chrome