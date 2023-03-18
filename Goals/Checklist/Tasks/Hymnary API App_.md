- [X] Test that main.js is connected (standard practice)

```
$(document).ready(() => {
  alert(1);
});
```

- [X] Learn what the [e (event) parameter](https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions) is and does.

When you click, a click event is triggered. This event is actually an object containing information about the action that just happened. In this example's case, the event would have info such as the coordinates of the click (event.screenX for example), the element on which you clicked (event.target), and much more.

- [X] Learn what the event object returns

```
$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    ==console.log(e);==
  });
});
```

- In Chrome console, go to Sources panel
- Set breakpoint on console.log(e)

```

r.Event {originalEvent: Event, type: "submit", isDefaultPrevented: ƒ, target: form#searchForm, currentTarget: form#searchForm, …}

  currentTarget: form#searchForm
  data: undefined
  delegateTarget: form#searchForm

  handleObj: {type: "submit", origType: "submit", data: undefined, ==handler: ƒ,== guid: 1, …}

  isDefaultPrevented: ƒ va()
  jQuery31103788952875233007: true

  originalEvent: Event {isTrusted: true, ==type: "submit", target: form#searchForm, currentTarget: form#searchForm==, eventPhase: 2, …}

  relatedTarget: undefined
  target: form#searchForm
  ==timeStamp: 3011.035000003176==
  type: "submit"
  __proto__: Object
```

- [ ] Test input/output to the server (catch a submission on index.html, take the value, and call a function to reach out to the API)

```
$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    /*'''
    Gets the value from the #searchText input bar,
    passes it into the getMovies() function, and returns the search results
    '''*/
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});
```

- [X] What does axios do?
- [X] What are [promises](https://www.youtube.com/watch?v=PoRJizFvM7s)?
- Once it resolves, then it will getPosts

<s>- [ ] Get paragraph element from the [hymnary.com](http://hymnary.com/) page using jquery.</s>

<s>- [ ] Bypass CORS Policy.</s>
`Chrome.exe --disable-web-security`

- [ ] Find another hymn API to work with.