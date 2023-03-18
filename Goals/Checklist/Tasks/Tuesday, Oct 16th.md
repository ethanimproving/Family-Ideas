**Work Tasks**

- **Focus of research**
- [ ] Collect verses from 1 chapter in John Piper's book about the gospel achievement
- [ ] Review 1 session of William Lane Craig's series "The Work Of Christ"

- **Author Modal**
- [ ] Remove scrollbar on modal open
- [ ] Purge  unnecessary resourceAuthor blocks
- [X] Animate modal

```
.modal {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    display: none;
    ==animation: zoomout .5s;==
}
.modal.open {
    display: block;
    position: fixed;
    z-index: 1000;
    ==animation: zoomin .5s;==
}
@keyframes zoomin {
    from{
        -webkit-transform:scale(0);
    }
    to{
       -webkit-transform:scale(1);
    }
}
@keyframes zoomout {
    from{
        -webkit-transform:scale(1);
    }
    to{
       -webkit-transform:scale(0);
    }
}
```

- CSS3 animations are defined with @keyframes rule
- CSS (or jQuery, for that matter) can't animate between display: none; and display: block
- [X] Use transition properties instead of animation properties

```
.modal {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    display: block;
   == transform: scale3d(0, 0, 0);==
==    transition: transform .5s ease-in-out;==
}
.modal.open {
    display: block;
    position: fixed;
    z-index: 1000;
    ==transform: scale3d(1, 1, 1);==
==    transition: transform .5s ease-in-out;==
}
```

- [X] Transition scale around "Steven Anderson" as pivot point

```
$('.resourceAuthor').on('click', function() {
    var rect = document.getElementById('modal').getBoundingClientRect();

    var pix = ((rect.right + rect.left)/2)+"px"+" "+((rect.top + rect.bottom) / 2)+"px";

    console.log(pix);
   == $('.modal').css('transform-origin', pix);==
    $('.modal').addClass('open display-elements');
  });

.modal {
    position: ==fixed==;    // from "absolute"
}
```

- [ ] Fade "display elements" opacity after modal opens and as it closes
- [ ] Look into hash extension  #modal-346-ilx3c303

- **Resource Header**
- [ ] Move resource meta just below date
- [ ] Put breadcrumbs below Title
- [ ] Replace Date row with other entries, such as doctrine or playlist ([image](https://cdn4.wpbeginner.com/wp-content/uploads/2014/04/secondarytitle-preview1.png))
- [ ] Move resource sub-subtitle into About panel

**Daily Tasks**

- [X] Locate mouse scroller
- [X] Look at Dad's spreadsheet
- [X] Review soul-winning materials with Faith and Deborah
- [X] Play Legos with Faith