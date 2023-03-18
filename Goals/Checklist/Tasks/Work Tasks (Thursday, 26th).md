**Work Tasks**

- **User Input Functions**
- [X] Create text input
- [X] Set current frame
- currenttime = 12m, 14s, 7f (7f/24f/s = 0.291667s)
- Get framerate
- If audio has video, frame rate = video frame rate, otherwise splice sample rate into 29 key frames.
- Get input text value as variable - If blank, variable = defaults
- Set keystrokes (left steps 1 frame, up 1 second)
- [X] input hours, minutes, seconds, and frames for beginning and end of interval for proof of concept
- [X] Mirror input value with current time

```
  $('#mejs-time-input').on('click', function(e) {
    var duration =  myAudio.duration;
    if (duration > 0) {

    var mousemoveValue = (e.clientX - $("#mejs-time-input").offset().left) / seekslider.offsetWidth * seekslider.max,

        curmins = Math.floor(intervalDuration * (mousemoveValue / seekslider.max) / 60),

        cursecs = Math.floor(intervalDuration * (mousemoveValue / seekslider.max) - curmins * 60),

        curfrms = Math.floor((intervalDuration * (mousemoveValue / seekslider.max) - curmins - cursecs) * 24);

      if(cursecs < 10){ cursecs = "0"+cursecs; }
      if(curmins < 10){ curmins = "0"+curmins; }
      if(curfrms < 10){ curfrms = "0"+curfrms; }

      $("#startTime").val(curmins+":"+cursecs+":"+curfrms);
    }
  });
```

- [X] Fine tune precision to include 24 frames per second
- [X] Move currenttime back to cached trim point

```
  $('.stop').on('click', function() {
    var str = $("#startTime").val(),
        startTimeMins = Math.floor(str.substring(0, 2)),
        startTimeSecs = Math.floor(str.substring(3, 5)),
        startTimeFrms = Math.floor(str.substring(6, 8));

    myAudio.currentTime = (startTime + startTimeMins * 60) + startTimeSecs + (startTimeFrms / 24);

  });
```

- [ ] <s>Add class with trim button, remove mirror</s>
- [X] If class is present, set variable to input value, else default
- [X] If input button is submitted, change text to "Toggle Off"

```
  $(".trim").on("click", function() {
//    var startTime = ($(".trim").hasClass("trimActive")) ? 60 : 0;
    $(".trim").toggleClass("trimActive");
    if ($(".trim").hasClass("trimActive")) {
      $(".trim").html("Toggle Off");
      $("#theStartTime").html(60);
    } else {
      $(".trim").html("Trim");
      $("#theStartTime").html(0);
    }
  });
```

- [ ] Link each step (frame) to arrow keys to modify starting point.
- [ ] If slider thumb is clicked, add class active,
- [ ] If class active is present, allow keystrokes
- [X] On click, change html value, var = html value (will have same problem -- document won't reload variable)

```
HTML:
<div id="theStartTime">0</div>

JavaScript:
var startTime = Math.floor(document.getElementById('theStartTime').innerHTML);
```

- [ ] ==Set "Limit to interval" clause on input change==
- [ ] Wait to set input duration to intervalDuration until OK new start / end inputs have been submitted

- **Language learning objectives**
- [ ] Learn to input data server side (PHP or node.js)
- [ ] Learn SQL for storing and organizing submitted data

- **Troubleshooting**
- [X] Fix NaN:NaN on page load when endTime = myAudio.duration

```
  myAudio.addEventListener('loadedmetadata', function() {
    var durmins = Math.floor( intervalDuration / 60),
        dursecs = Math.floor( intervalDuration - durmins * 60);
    if(durmins < 10){ durmins = "0"+durmins; }
    if(dursecs < 10){ dursecs = "0"+dursecs; }
      $(".mejs-remaining").html("-"+durmins+":"+dursecs);
  });
```

- replace endTime with (endTime = myAudio.duration ? myAudio.duration : endTime)
- replace intervalDuration with (endTime = myAudio.duration ? myAudio.duration : intervalDuration)

- **Audio Features**
- [ ] Play with space bar
- [ ] Set mejs-horizontal-volume-input default value to 70dB
- Get the average or highest dB value of an audio file with JavaScript
- ( 70bd / muAudio.dB ) * input.max
- [ ] Show dB value bubble on volume hover
- [ ] Partially download a file with JavaScript

**Daily Tasks**

- [X] Help faith disable private listening mode on Roku Premium+ (had to reboot it)
- [X] Download Duolingo Web App (Chrome extension) and Microsoft Store edition
- [ ] Change hallway light bulb
- [ ] Greece squeaky door
- [ ] Sew brown tie
- [ ] Sew button on swim suit
- [ ] Tailor green shirt
- [ ] Tailor gray shirt
- [ ] Tailor blue shirt
- [ ] Sew black tie end