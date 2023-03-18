- [X] Track down custom Emmet abbreviations / shortcuts path in Boostnote

```
"abbreviations": {

"==$==": "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>",

"==$ui==": "<script src=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js\"></script>",

"==bs:js==": "<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>",

"==bs:css==": "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\"/>",

"apnd": "\\$(\"article\").append(\\$(\"<p>\").text(\"\"))",
"$ready": "\\$(document).ready(function() {
    });",
}
```

- Access @ %USERPROFILE%\.atom\packages\emmet\node_modules\emmet\lib
    - C:\Users\ethan\.vscode\extensions\emmet\node_modules\emmet
- File > Settings > Packages > Emmet > View Code > node_modules > emmet > lib > snippets.json
- Preferences > Package Settings > Emmet > Settings - User

  Note that Atom has to be restarted to update the changes.

  Visit  https://developers.google.com/speed/libraries/#jquery  for updated CDN links

Escaping | and $ characters

The $ character is used for tabstops and variables, the | character it used to indicate caret position when snippet is expanded. If you want to output these characters as-is, you should use double backslash to escape them: \\$ or \\|

  A tab stop is a term used to describe the location the cursor stops after the tab key is pressed. You can use tabstops inside snippets to traverse between them with Tab key

  $1 or ${1}
  ${1:hello world} — tabstop with placeholder

snippets*.json.
Sources:

https://www.reddit.com/r/Atom/comments/3p7hgh/customizing_emmet_snippets_in_atom/

https://www.youtube.com/watch?v=HuP5HDtPbYE
https://docs.emmet.io/customization/snippets/