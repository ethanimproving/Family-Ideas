**Work Tasks**

- **Troubleshooting**
- [X] Set volume on click

`volumeslider.addEventListener("click", setvolume);`
**- [X] **Set starting volume equal to mejs-horizontal-volume-input value
`myAudio.volume = volumeslider.value / volumeslider.max;`
**- [X] **Set starting volume indicator to mejs-horizontal-volume-input value

`$('.mejs-horizontal-volume-current').css('width', (volumeslider.clientWidth * volumeslider.value / volumeslider.max) - (volumeslider.value / volumeslider.max * volumeHandleDiameter));`

- **Clipping Audio without copying source**
- [X] Learn how to play only part of an audio file
- Replace myAudio.onended with myAudio.currentTime > endTime
- On document.ready event, if myAudio.currentTime < startTime, myAudio.currentTime = startTime

```
var startTime = 60;
if (myAudio.currentTime < startTime) {
    myAudio.currentTime = startTime;
  }
```

- [X] Offset time elapsed by subtracting startTime
- [X] Offset time remaining by subtracting myAudio.currentTime from endTime

```
var curmins = Math.floor((myAudio.currentTime ==- startTime)== / 60),

        cursecs = Math.floor((myAudio.currentTime ==- startTime)== - curmins * 60),

        remmins = Math.floor(==(endTime -== myAudio.currentTime) / 60),

        remsecs = Math.floor(==(endTime -== myAudio.currentTime) - remmins * 60);

```

- **Narrow input slider to intervalDuration**
- [X] Replace duration with end time under time update to set endTime boundry

```

var numbersPerPx = seekslider.max / ($("#mejs-time-total").width()+volumeHandleDiameter),

        marginNumbers = numbersPerPx * volumeHandleDiameter,
        offsetFactor = marginNumbers / ==endTime==,
        half = marginNumbers / 2,

        newTime = (myAudio.currentTime / ==endTime==) * seekslider.max - half + (myAudio.currentTime * offsetFactor);

        seekslider.value = newTime;
```

- [X] Correct seeking

`seekto = (==intervalDuration *== (seekslider.value / seekslider.max)) ==+ startTime==;`

- [X] Correct Time Bubble
- Replace myAudio.duration with intervalDuration
- [X] Start at the right place

```

var numbersPerPx = seekslider.max / ($("#mejs-time-total").width()+volumeHandleDiameter),

        marginNumbers = numbersPerPx * volumeHandleDiameter,
        offsetFactor = marginNumbers / ==intervalDuration==,
        half = marginNumbers / 2,

        ==percentThroughInterval = (myAudio.currentTime - startTime) / intervalDuration,==

        newTime = ==percentThroughInterval== * seekslider.max - half + ((myAudio.currentTime ==- startTime==) * offsetFactor);

        seekslider.value = newTime;
```

- [X] Modify "get duration on page load"
- [X] Correct time loaded / buffered
- It buffers about 10 minutes further than my 2 minute interval

```
myAudio.onprogress = function() {
    var duration =  myAudio.duration;
    if (duration > 0) {
      for (var i = 0; i < myAudio.buffered.length; i++) {

==        if (myAudio.buffered.end(myAudio.buffered.length - 1 - i) / intervalDuration > 1) {==

==          document.getElementById("mejs-time-loaded").style.width = 100 + "%";==

==        } else== if (myAudio.buffered.start(myAudio.buffered.length - 1 - i) < myAudio.currentTime) {

            document.getElementById("mejs-time-loaded").style.width = (myAudio.buffered.end(myAudio.buffered.length - 1 - i) / ==intervalDuration==) * 100 + "%";

            console.log((myAudio.buffered.end(myAudio.buffered.length - 1 - i) / intervalDuration) * 100 + "%");

            console.log(myAudio.buffered.end(myAudio.buffered.length - 1 - i));
            console.log(intervalDuration);
            break;
        }
      }
    }
  }
```

```
  myAudio.onprogress = function() {
    var duration =  myAudio.duration;
    if (duration > 0) {
      for (var i = 0; i < myAudio.buffered.length; i++) {

==        var bufferRange = myAudio.buffered.end(myAudio.buffered.length - 1 - i) - myAudio.buffered.start(myAudio.buffered.length - 1 - i);==

==        if (bufferRange / intervalDuration > 1) {==

==          document.getElementById("mejs-time-loaded").style.width = 100 + "%";==

==        } else== if (myAudio.buffered.start(myAudio.buffered.length - 1 - i) < myAudio.currentTime) { // buffered.start = startTime on load

            document.getElementById("mejs-time-loaded").style.width = (==bufferRange / intervalDuration==) * 100 + "%";

            break;
        }
      }
    }
  }
```

- [X] Correct seek by click value
- Replace duration with intervalDuration
- [ ] Transition slider thumb on timeupdate
- On timeupdate impose transition on CSS
- Smoothness results from -The width of the banner, -The min/max range, -The size of steps -- can't resolve
- [ ] Get current frame
- currenttime = 12m, 14s, 7f (7f/24f/s = 0.291667s)
- [ ] Set mejs-horizontal-volume-input default value to 70dB
- Get the average or highest dB value of an audio file with JavaScript
- ( 70bd / muAudio.dB ) * input.max
- [ ] Show dB value bubble on volume hover
- [ ] Partially download a file with JavaScript

**Daily Tasks**

- [X] Help Faith exit publisher and boot onto the right drive
- st2 = old drive, ocz = new SSD
- [ ] Change hallway light bulb
- [ ] Greece squeaky door
- [ ] Sew brown tie
- [ ] Sew button on swim suit
- [ ] Tailor green shirt
- [ ] Tailor gray shirt
- [ ] Tailor blue shirt
- [X] Go mountain biking on Rowlett Creek green loop
- [ ] Scrub moldy shower curtain
- Take outside to driveway
- Scrub with water using pool scrubs
- Somebody beat me to it

|     |     |
| --- | --- |
| **Rabbit Hole Tasks** | **Date/Time Achieved** |
| - [ ] Connect computer to Smart TV<br>- Downloaded Samsung Smart View<br>- Unable to connect wired desktop PC to wireless Smart TV | 7/24/2018 10:20 AM |
| - [X] Close a desktop: ==Windows Key + Ctrl + F4== | 7/24/2018 8:50 AM |
| - [X] Add a desktop: ==Windows Key + Ctrl + D== | 7/24/2018 8:50 AM |
| - [X] Switch between desktops: ==Windows Key + Ctrl + Arrow== | 7/24/2018 8:50 AM |