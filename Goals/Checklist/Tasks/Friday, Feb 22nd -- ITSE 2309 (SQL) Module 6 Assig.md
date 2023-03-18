Sufficient unto the day is the evil thereof. [[Smith](https://www.youtube.com/watch?v=46MRaTw3SmA&t=45m7s&list=PLYAz1Lwo4O587rxMb1sTe8oXLDvrbkCo6&index=9)]

See [relationships](https://www.youtube.com/watch?v=46MRaTw3SmA&t=1h&list=PLYAz1Lwo4O587rxMb1sTe8oXLDvrbkCo6&index=9) between keys.

- [X] Using your favorite text editor (probably NotePad++), create the file: mod6_assign1.sql
- [X] Place a heading at the beginning of the file that looks something like this:

```
/*
Module Six, Chapter Four exercises
Ethan Miller
ITSE 2309
*/
```

- [X] Unless the exercise specifically calls for an implicit join (old syntax, see #3), use an ==explicit INNER JOIN== for all exercises in this block... and do not default the term "INNER".
- [X] 1) Without looking back at the exercise in the module (you have done this one), write an SQL SELECT statement ==using the ==explicit join syntax==== (pg 127) that will return the vendorName and each associated invoiceNumber.  We will order by vendorName, then invoiceNumber.  (You should have 114 rows in the output.)

```
SELECT  v.vendorName AS vendorName,
        i.invoiceNumber AS invoiceNumber
FROM vendors AS v INNER JOIN invoices AS i
  ON v.vendorID = i.vendorID
ORDER BY v.vendorName ASC, i.invoiceNumber ASC;
```

- [X] 2) Write an SQL SELECT statement using the explicit join syntax that will return four columns named as shown:

|     |     |
| --- | --- |
| *vendorName* | From the *vendors* table |
| *invoiceNumber* | From the *invoices* table |
| *invoiceDate* | From the *invoices* table |
| *balanceDue* | Derived from *invoiceTotal* minus the sum of the *paymentTotal* and *creditTotal*fields (get used to this calculation!) |

- [X] The result set will show one row for each invoive with a non-zero balanceDue.
- [X] Sort the result set by vendorName in ascending order.  (I have 12 rows in my output.)

```
SELECT  v.vendorName AS vendorName,
        i.invoiceNumber AS invoiceNumber,
        i.invoiceDate AS invoiceDate,
        i.invoiceTotal - (i.paymentTotal + i.creditTotal) AS balanceDue
FROM vendors AS v INNER JOIN invoices AS i
  ON v.vendorID = i.vendorID
WHERE i.invoiceTotal - (i.paymentTotal + i.creditTotal) > 0
ORDER BY v.vendorName ASC;
```

- [X] 3) Generate the same result as #2, however, using the implicit join syntax described on page 139 of the text.

```
SELECT  v.vendorName AS vendorName,
        i.invoiceNumber AS invoiceNumber,
        i.invoiceDate AS invoiceDate,
        i.invoiceTotal - (i.paymentTotal + i.creditTotal) AS balanceDue
FROM vendors AS v, invoices AS i
WHERE v.vendorID = i.vendorID AND
      i.invoiceTotal - (i.paymentTotal + i.creditTotal) > 0
ORDER BY v.vendorName ASC;
```

Up until now, we have used only the vendors (parent) table and the invoices (child) table.  For #4, you need to know that ==the==  ==defaultAccountNo==  ==of the vendors table references the==  ==accountNo==  ==of the glAccounts table==.  Thus, the glAccounts table is the parent and vendors is the child in this relationship.  [Here](https://collin.instructure.com/courses/836867/files/57197196/preview?verifier=uztac9jiH0N9akRXyqlva8OkYbUN1Seol5TmNl36) is an example where the foreign key has a different name than its parent.  Avoid this when possible.

- [X] 4) Write an SQL SELECT statement using the explicit join syntax that will return three columns named as shown:

|     |     |
| --- | --- |
| vendorName | from the vendors table |
| defaultAccountNo | from the vendors table |
| accountDescription | from the glAccounts table |

- [X] The result should be one row for each vendor with the defaultAccountNo and accountDescription for each of them.
- [X] Sort the result by accountDescription, then by vendorName.  (I get 122 rows.)

```
SELECT  v.vendorName AS vendorName,
        v.defaultAccountNo AS defaultAccountNo,
        g.accountDescription AS invoiceDate
FROM vendors AS v INNER JOIN glAccounts AS g
  ON v.defaultAccountNo = g.accountNo
ORDER BY g.accountDescription ASC, v.vendorName ASC;
```

To complete #5, you must know that ==the invoiceID of the invoiceLineItems (child) table references the invoiceID of the invoices (parent) table. == Also, if you examine the invoiceLineItems table carefully, you will notice that it has a two-field primary key.  This is not generally desirable; however, sometimes it has to be designed thus.  (The latter condition does not impact the join at all.)

- [X] 5) Write an SQL SELECT statement using the explicit join syntax that will return five columns named as shown from three tables:

|     |     |
| --- | --- |
| *vendor* | *vendorName* from the *vendors* table |
| *iDate* | *invoiceDate* from the *invoices* table |
| *iNumber* | *invoiceNumber* from the* **invoices* table |
| *seqNum* | *invoiceSequence* from the *invoiceLineItems* table |
| *lineAmt* | *invoiceLineItemAmount* from the *invoiceLineItems* table |

- [X] Sort the result by vendor, iDate, iNumber, and seqNum.  (Returns 118 rows)

```
SELECT  v.vendorName AS vendor,
        i.invoiceDate AS iDate,
        i.invoiceNumber AS iNumber,
        l.invoiceSequence AS seqNum,
        l.invoiceLineItemAmount AS lineAmt
FROM
    vendors AS v
      INNER JOIN
    invoices AS i
      ON v.vendorID = i.vendorID
      INNER JOIN
    invoiceLineItems AS l
      ON l.invoiceID = i.invoiceID
ORDER BY iDate ASC, iNumber ASC, seqNum ASC;
```

- [X] Remove table prefixes from every column that doesn't need it (i.invoiceDate can just be invoiceDate if there are no other tables that have a column with that name)