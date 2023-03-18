**Work Tasks**

- **Focus of research**
- [ ] Collect verses from 1 chapter in John Piper's book about the gospel achievement
- [ ] Review 1 session of William Lane Craig's series "The Work Of Christ"

- **Author Modal**
- [ ] Purge  unnecessary resourceAuthor blocks
- [X] Fade "display elements" opacity after modal opens and as it closes

```
.modal.displayElements .modalAuthorContainer,
.modal.displayElements .modalClose {
    opacity: 1;
    transition: opacity .2s ease-in-out .5s;
}
```

- .ancesterElement.addedClass .descendantElement
- With this syntax, I can avoid the following highlighted lines, because it will only select modalClose and modalAuthorContainer when displayElements is added to the  ancestor element

```
  // Open modal on click
  $('.resourceAuthor').on('click', function() {
    var rect = document.getElementById('modal').getBoundingClientRect();

    var pix = ((rect.right + rect.left)/2)+"px"+" "+((rect.top + rect.bottom) / 2)+"px";

    console.log(pix);
    $('.modal').css('transform-origin', pix);
    $('.modal').addClass('open displayElements');
==//    $('.modalClose').addClass('displayElements');==
==//    $('.modalAuthorContainer').addClass('displayElements');==
    $('body').addClass('hide-scroll');
  });

  // Exit modal on click
  $('.closeModal').on('click', function() {
    $('.modal').removeClass('open displayElements');
==//    $('.modalClose').removeClass('displayElements');==
==//    $('.modalAuthorContainer').removeClass('displayElements');==
    $('body').removeClass('hide-scroll');
  });
});
```

- [ ] Incorporate hover color fadein from DG Topic page into subway tracks

- **Resource Header**
- [ ] Move resource meta just below date
- [ ] Put breadcrumbs below Title
- [ ] Replace Date row with other entries, such as doctrine or playlist ([image](https://cdn4.wpbeginner.com/wp-content/uploads/2014/04/secondarytitle-preview1.png))
- [ ] Move resource sub-subtitle into About panel

- **node.js**
- [X] Understand non-blocking I/O (input/output) single-threaded advantages of node.js
- [X] synchronous means one request (task) must be completed before the next request can begin working -- node.js is asynchronous
- [X] You don't want to waste multiple threads managing user requests because the tasks are not CPU intensive (like  ==conglomerating the contents of cell references into a single formula in excel==  because it's not that long)

**Daily Tasks**

- [ ] Reconstruct mouse