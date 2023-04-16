---
dg-publish: true
tags: [diary]
---

```dataviewjs  
dv.header(2, "Diary Entries");


const pages = dv.pages().where((page) => {
	console.log(page)
  return page.file.folder == dv.current().file.folder && page["dg-created"];
});
dv.table(
  ["Title", "Date"],
  pages
    .map((page) => {
      let date = page["dg-created"].toString();
      return [
        page.file.link,
        dv.luxon.DateTime.fromFormat(date, "MMM d, yyyy, h:mm a"),
      ];
    })
    .sort((page1, page2) => {
      return page2[1] - page1[1]; // reverse order
    })
    .map((page) => [page[0], page[1].toFormat("cccc, MMM dd, yyyy h:mm a")])
);
```
