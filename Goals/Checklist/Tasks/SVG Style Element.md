- [ ] Change syntax

```
find: fill: (#[\s\S]*)
replace: fill="$1"
```

- [ ] Replace classes

```
find: .([\s\S]*) \{
replace: class="$1"
```

```
(fill-rule): ([\s\S]*);
$1="$2"
```

- [ ] Replace rules

```
([\s\S]*): ([\s\S]*)
$1="$2"
```