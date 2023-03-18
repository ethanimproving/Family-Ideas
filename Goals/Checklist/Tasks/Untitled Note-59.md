Replace L[n] with [L][[n]]. (Use regular expressions (Alt+R))

```
Find: L(\d+)
Replace: L[$1]
```

The  ( and  ) represent a capturing group. This essentially means that you capture your number, and then replace it with the same followed by a zero. Other syntax might use [\1](https://stackoverflow.com/questions/35983330/notepad-replace-regex-match-for-same-text-plus-appending-character) for group one instead of [$1](https://codereviewvideos.com/course/phpstorm-shortcuts/video/better-find-and-replace-with-regular-expressions).

Replace all initialization with the = operator

```
Find: (L\[\d+\])\((.*)\)
Replace: $1 = $2
```

Remove 'double' from array declarations.

```
Find: double (L\[\d+\])
Replace: $1
```