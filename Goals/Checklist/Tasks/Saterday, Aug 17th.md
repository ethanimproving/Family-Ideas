**Work Tasks**

- **Focus of research**
- [ ] Collect verses from 1 chapter in John Piper's book about the gospel achievement
- [ ] Review 1 session of William Lane Craig's series "The Work Of Christ"

- **Audio Features**
- [X] Make subway tracks overlap element below 900px
- [X] Add resource header and description box

- **Media queries for mobile orientation**
- [X] Hide affixableNativeSticky below 1024px

```
  @media screen and (max-width:1024px) {
    .affixableNativeSticky {
      display: none;
    }
    .navHeaderShadow {
      display: none;
    }
    #guideButton {
      display: none;
    }
    .Main-Nav .logo {
        left: 20px;
    }
  }
```

- [X] If affixableNativeSticky media query is active, close menu

```
function myFunction(mediaNavMediaQuery) {
  if (mediaNavMediaQuery.matches) { // If media query matches
      document.documentElement.style.setProperty('--seriesDrawerWidth', '0px');
  } else {

      if ($('.wrapperTutorialNav').hasClass('wrapperTutorialNav--closed')) document.documentElement.style.setProperty('--seriesDrawerWidth', '0px');

      else{document.documentElement.style.setProperty('--seriesDrawerWidth', '256px')}

  }
}

var mediaNavMediaQuery = window.matchMedia("(max-width:1024px)")
myFunction(mediaNavMediaQuery) // Call listener function at run time

mediaNavMediaQuery.addListener(myFunction) // Attach listener function on state changes

```

- [X] If menu is mobile, hide hamburger button and move logo to 43px left
- [X] Make time-input mirror the time-total media queries

```
    #mejs-time-input {

      width: calc(100vw - 545px - var(--seriesDrawerWidth) + var(--volumeHandleDiameter));

      transition: width var(--openTransition);
    }

    #mejs-time-input {
      width: var(--timeWidth);
    }

    #mejs-time-input {
      width: calc(100vw - 63px + var(--volumeHandleDiameter));
    }
```

- [X] Add mobile view media query
- [ ] Make time-current update on viewport change

- **Tutorial navigation menu for mobile**
- [ ] Add tutorial navigation menu for mobile

- [X] If subway tracks are open, change CSS to subtract it from media query
- Or make alternative media query that hides subway tracks and replaces it with mobile version under 900px
- [ ] Correct change volume on  mousemove to click (borrow from audio intervals correction)

**Daily Tasks**

- [X] Input transactions for last 3 months in YNAB budget
- [X] Empty bathroom trash upstairs
- [ ] Wash sheets again