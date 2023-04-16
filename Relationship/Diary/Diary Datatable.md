---
dg-publish: true
tags: [diary]
---

```dataview
table dg-created as Date
from "Relationship/Diary"
sort dg-created
order desc
```

I am currently trying to use `dataviewjs` instead of `dataview` to be able to parse the date from the below JavaScript:

```javascript
let luxon = await loadResource('https://cdn.jsdelivr.net/npm/luxon@3.2.1/build/global/luxon.min.
const timestampFormat = 'cccc, MMM dd, yyyy h:mm a';
luxon.DateTime.fromFormat(page.dg-created, 'MMM d, yyyy, h:mm a').toFormat(timestampFormat);
```

The effort is not complete yet, below is the result so far.

```dataviewjs  
dv.header(2, "Diary Entries");

const pages = dv.pages("#diary").where((page) => {
  console.log(page);
  return page["dg-created"];
});
dv.table(
  ["Title", "Date"],
  pages
    .map((page) => {
      console.log(`Date: ${page["dg-created"]}`);
      let date = page["dg-created"].toString();
      return [
        page.file.link,
        dv.luxon.DateTime.fromFormat(date, "MMM d, yyyy, h:mm a"),
      ];
    })
    .sort((page) => {
      console.log(page);
      return page[1];
    })
    .map((page) => [page[0], page[1].toFormat("cccc, MMM dd, yyyy h:mm a")])
);
```