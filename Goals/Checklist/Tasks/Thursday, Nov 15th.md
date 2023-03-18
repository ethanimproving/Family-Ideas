**Work Tasks**

- **Time sheet**
- [X] 8 Hours Coding
- [X] 1 hour accumulating proverbs on righteous social behavior

- **Website Integration**
- [X] Size settings-item by wrapped parent span width (paradox -- using input to size span and using span to size input)

```
function resizeInput() {
  ==$(this).wrap("<span></span>");==
  if($(this).val()=='' || $(this).val()==null){
    $(this).attr('size', $(this).attr('placeholder').length);
  } else {
    ==$(this).css('width', $(this).parent().width() + 'px');==
  }
  console.log($(this).parent().width() + 'px');
}
```

- [ ] Put focus to the end of the text