**Work Tasks**

- **Time sheet**
- [X] 10 Hours Coding

- **nodemon and Browsersync (****refresh browser with nodemon)**

- [X] Resolve 4 console problems

```

Refused to apply style from 'http://localhost:3001/messages/css/bootstrap-datepicker.css' because its MIME type ==('text/html')== is not a supported stylesheet MIME type, and strict MIME checking is enabled.

...
header.pug:7, 9

link(rel='stylesheet', ==type='text/css'==, href='css/bootstrap-datepicker.css')

...
link(rel='stylesheet', href='==/==css/bootstrap-datepicker.css')
```

- [Attempt 1](https://stackoverflow.com/questions/48248832/stylesheet-not-loaded-because-of-mime-type): The issue I think it was with a CSS library starting with comments
- Attempt 2: Remove type
- Attempt 3: Add / in front of directiory

```

jquery.js:3818 jQuery.Deferred exception: Cannot read property 'value' of null TypeError: Cannot read property 'value' of null

    at HTMLDocument.<anonymous> (http://localhost:3001/js/==main.js:415:30==)

    at mightThrow (http://localhost:3001/components/jquery/dist/jquery.js:3534:29)

    at process (http://localhost:3001/components/jquery/dist/jquery.js:3602:12) undefined

...
jquery.js:3827 Uncaught TypeError: Cannot read property 'value' of null
    at HTMLDocument.<anonymous> (main.js:415)
    at mightThrow (jquery.js:3534)
    at process (jquery.js:3602)
```

- Wait until we start linking the audio player with the audio element

```

[Deprecation] Element.createShadowRoot is deprecated and will be removed in M73, around March 2019. Please use Element.attachShadow instead. See https://www.chromestatus.com/features/4507242028072960 for more details.

...
Replace...
var shadow = wrapper.createShadowRoot();
With...
var shadow = wrapper.attachShadow({ mode: 'open' });
```

Attempt 1: var shadow = wrapper.attachShadow({ mode: 'open' });
Attempt 2:
1. Hover over inject.js:117 to reveal file source as a chrome-extension
2. Click on it to Reveal in Sources Panel

3. Right-click on the inject.js file tab in the sources panel > Reveal in sidebar

4. Discover that the file is located in the Video Speed Controller extension.
5. Check for Video Speed Controller update
6. Right-click message file > Hide messages from inject.js

- [X] Remove YouTube pause over (More Videos panel) with jQuery

```
var hideRel = {
init: function() {
this.cacheDom();
this.toggleDrawer();
},
cacheDom: function() {
this.$btn = $('#guideButton');
this.$youTubePlayer = $(".media-youtube-player");
this.$overlay = $('.ytp-pause-overlay');
},
toggleDrawer: function() {
this.$youTubePlayer.remove();
}
};

$(document).ready(hideRel.init(
```

- You can only access elements from an iframe element which is coming from your own server due to [Cross Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) (cross-domain resource restrictions). Otherwise you could have a full screen Google in an iframe running with your ads on top on bettergoogle.com.

- [X] Automatically click .ytp-pause-overlay .ytp-button on load. (Failed)

```
$(function() {
$('.ytp-collapse').click();
});
```

- [X] Use Vanilla JavaScript to collapse menus on outside click, because jQuery only works with event bubbling, starting at the target element and working its way *up* the DOM.

```
collapseMenu: function(==e==) {
if (
==$(e.target).closest('.media-menu__download').length == 0 &&==
==this.$menu.hasClass('selected') &&==
==$(e.target).closest('.media-menu__sub').length == 0==
) {
this.$menu.removeClass('selected');
}
}
```

- [X] Bind audio player to audio element