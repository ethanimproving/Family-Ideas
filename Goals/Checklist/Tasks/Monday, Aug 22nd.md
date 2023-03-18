**Work Tasks**

- **Focus of research**
- [ ] Collect verses from 1 chapter in John Piper's book about the gospel achievement
- [ ] Review 1 session of William Lane Craig's series "The Work Of Christ"

- **Author Modal**
- [ ] Style open modal
- [ ] Write JavaScript block to open and close modal

- **Resource Header**
- [ ] Move resource meta just below date
- [ ] Put breadcrumbs below Title
- [ ] Replace Date row with other entries, such as doctrine or playlist ([image](https://cdn4.wpbeginner.com/wp-content/uploads/2014/04/secondarytitle-preview1.png))
- [ ] Move resource sub-subtitle into About panel

- **Media queries for mobile orientation**
- [X] Make time-current update on viewport change (in tandum with oninput)

```
  $('#mejs-time-input').on('input', setTimeCurrent);
  myAudio.addEventListener('timeupdate', setTimeCurrent);
  $(window).resize(setTimeCurrent);

  function setTimeCurrent(){
    var duration =  myAudio.duration;
    if (duration > 0) {

      $('.mejs-time-current').css('width', (seekslider.value / seekslider.max) * $("#mejs-time-total").width());

    }
  }
```

- **Tutorial navigation menu for mobile**
- [X] Hide text and keep icons with media query (under 614px)

```
@media screen and (max-width:614px) {
  .inactiveTab, .activeTab {
    font-size: 0px;
  }
}
```

- Possibly  incrementally make font-size smaller instead

- [X] Add conditional to closing on outside click to allow clicking on "share" child nodes
- Click event selects path instead of li element
- Actually I want it to close on child click -- leave as is

```
  $('html').click(function() {
    var opts = document.getElementById('shareOptions');
    if (event.target != opts && event.target.parentNode != opts){
      $('.shareOptions').removeClass('-active');
      $('.shareButton').removeClass('-active');
        console.log('text');
      }
  });
```

**Daily Tasks**

- [ ] Vacation prep