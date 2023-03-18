  // TO DO: replace L[1] with L[1] to populate the array with our line-by-line computed values

  // TO DO: copy qdTax(testCase) to array
**- [ ] Insert test cases as Record Structures.**
*************************************************************************
TEST CASE  FILING STATUS  TAX INC  QUAL DIV  CAP GAIN  TAX DUE
*************************************************************************
    1            M         77000     13000     14000
    2            M         83000     11000     12000
    3            M        101000      5000      6000
    4            S        500000    300000    150000
    5            S        500000    350000    120000
*************************************************************************

- [ ] **Find out where to get federal income tax figure.**

**- [ ] Replace Line 3 with amount from **testCase.capitalGain
**- [ ] Replace L1, L2... with regular expressions**
Replace L[n] with L[[n]]. (Use regular expressions (Alt+R))

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

**- [ ] Replace logic in line 24 and 26.**
**- [ ] Remove Tax Computations Worksheet stub function.**
**- [ ] Simplify filing status in lines 8 and 15.**

- Only two options: Singe or married filing jointly.

**- [ ] Change ComputeLine11a double* to double[]**

**- [ ] [How to return a local array from a C-C++ function- - GeeksforGeeks](https://www.geeksforgeeks.org/return-local-array-c-function/)**

**[- [ ] ](https://www.geeksforgeeks.org/return-local-array-c-function/)**