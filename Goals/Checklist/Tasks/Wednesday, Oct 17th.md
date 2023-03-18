**Work Tasks**

- **Focus of research**
- [ ] Collect verses from 1 chapter in John Piper's book about the gospel achievement
- [ ] Review 1 session of William Lane Craig's series "The Work Of Christ"

- **Author Modal**
- [X] Remove scrollbar on modal open

```
==.hide-scroll {==
==    overflow: hidden;==
==}==

  $('.resourceAuthor').on('click', function() {
    var rect = document.getElementById('modal').getBoundingClientRect();

    var pix = ((rect.right + rect.left)/2)+"px"+" "+((rect.top + rect.bottom) / 2)+"px";

    console.log(pix);
    $('.modal').css('transform-origin', pix);
    $('.modal').addClass('open display-elements');
   == $('body').addClass('hide-scroll');==
  });

  // Exit modal on click
  $('.closeModal').on('click', function() {
    $('.modal').removeClass('open display-elements');
   == $('body').removeClass('hide-scroll');==
  });
```

- [ ] Purge  unnecessary resourceAuthor blocks
- [ ] Fade "display elements" opacity after modal opens and as it closes
- [X] Look into hash extension  #modal-346-ilx3c303

```

<div class="resourceAuthor" ==href="#author-modal"== id="modal"><span>Steven Anderson</span>

<div ==id="author-modal"== class="modal -author" data-id="modal" style="width: 100%; height: 100%;">

```

- mediaContainer class conflict -- look into it
- [ ] Incorporate hover color fadein from DG Topic page into subway tracks

- **Resource Header**
- [ ] Move resource meta just below date
- [ ] Put breadcrumbs below Title
- [ ] Replace Date row with other entries, such as doctrine or playlist ([image](https://cdn4.wpbeginner.com/wp-content/uploads/2014/04/secondarytitle-preview1.png))
- [ ] Move resource sub-subtitle into About panel

**Daily Tasks**

- [ ] Reconstruct mouse
- [X] Clean water Bottle mouth piece with pipe cleaner