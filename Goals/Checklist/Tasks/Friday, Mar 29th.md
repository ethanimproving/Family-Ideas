- **Work Tasks**
- [X] SQL Module 7 Quiz
- [X] SQL Module 8 Assignment
- [ ] SQL Module 8 Quiz
- [ ] SQL Lecture 3 29 2019
- [ ] Python Homework
- [ ] Python Extra Credit
- [ ] Collect Ephesians 2:8 in Greek

**ITSE 2309, [Chapter 6 Assignment](https://collin.instructure.com/courses/836867/assignments/7505660)**

- **Exercise**** 1****.**

The following table join returns a list of the vendorNames who have at least one corresponding entry in the invoices table:

```
SELECT DISTINCT vendorName
FROM vendors AS v INNER JOIN invoices AS i
                ON v.vendorID = i.vendorID
ORDER BY vendorName;
```

- [X] Write a similar statement that returns the same rows and columns; however, use a subquery in a WHERE clause instead of the inner join.

```
SELECT DISTINCT vendorName
FROM vendors
WHERE vendorID IN
(
  SELECT vendorID
  FROM invoices
)
```

- **Exercise**** 2****.**

Write a SELECT statement that answers this question: Which invoices have a paymentTotal that is greater than the average paymentTotal for all paid invoices.  Assume it's a paid invoice if the paymentTotal IS NOT NULL; however, that won't matter to the query because, if it's NULL, it won't compare to the average!  This is a subselect with a '>' in it, so don't forget to write "> ALL" as we discussed.  It is just like our example!  Return the invoiceNumber and paymentTotal for each invoice.  Order by paymentTotal with the greatest first. (Note: it does NOT ask for the average paymentTotal!)

- **Exercise**** 3****.**

As an example, I gave you this correlated subselect:

```
SELECT DISTINCT vendorID, invoiceTotal
FROM invoices AS inv_outside
WHERE invoiceTotal IN
(
        SELECT MAX(invoiceTotal)
        FROM invoices AS inv_inside
        WHERE inv_outside.vendorID = inv_inside.vendorID
)
ORDER BY invoiceTotal DESC;
```

- [X] Rewrite the query such that it returns the **vendorName** instead of the vendorID.

Hint: now it needs another table!  (Review Professor King's video presentation on correlated subqueries.)  One other point is that, in the AP database, **invoiceID = 68, invoiceNumber = 'MABO1489'** contains a typo.  The vendorID is 999 and that does not match any vendorID in the vendors table.  For this reason, the query that returns the vendorNames will have 33 rows while the original returns 34.  (If you get 35 rows, you probably forgot "DISTINCT vendorName"

- **Exercise**** 4****.**

Write a SELECT statement that returns two columns from the glAccounts table: accountNo and accountDescription.  The result set should have one row for each accountNo that has never been used.  (Where " has never been used" means it does not appear in invoiceLineItems; use a correlated subquery introduced with the NOT EXISTS operator [see pg 198, 199].)  Sort the final set by accountNo.

BTW, we have seen this question before.  It is also solved as an outer join in Chapter Four, Part B, Exercise 1 and would have identical output.  (I see 54 rows.)

- [X] LEFT OUTER JOIN

```
SELECT g.accountNo AS accountNo,
       accountDescription AS accountDescription
FROM glAccounts AS g LEFT OUTER JOIN invoiceLineItems AS i
  ON g.accountNo = i.accountNo
WHERE i.accountNo IS NULL
ORDER BY g.accountNo;
```

- [X] NOT IN syntax

```
SELECT g.accountNo AS accountNo,
       accountDescription AS accountDescription
FROM glAccounts AS g
WHERE accountNo NOT IN
(
  SELECT accountNo
  FROM invoiceLineItems AS i
)
ORDER BY g.accountNo;
```

- [X] NOT EXISTS syntax

```
SELECT g.accountNo AS accountNo,
       accountDescription AS accountDescription
FROM glAccounts AS g
WHERE NOT EXISTS
(
  SELECT accountNo
  FROM invoiceLineItems AS i
  WHERE g.accountNo = i.accountNo
)
ORDER BY g.accountNo;
```

- **Exercise**** 5****.**

Write a SELECT statement that returns four columns: vendorName, invoiceID, invoiceSequence, and invoiceLineItemAmount  for each invoice that has more than one line item in the invoiceLineItems table.  Hint: Use a subquery that tests for invoiceSequence > 1.

OK, you will have two qualifying invoiceIDs (12 and 78) and a total of six line items.  The output comes from three tables; therefore, they will all have to be joined.  The subquery mentioned above is in the WHERE clause... and I don't like that subselect!  If *I* were coding the table, the invoiceSequence would be a unique key.  Thus, instead of (invoiceID, invoiceSequence) = (12, 1), (12, 2) you could easily have (12,375), (12, 1029).

My subselect would have to be:

```
SELECT invoiceID
FROM invoiceLineItems
GROUP BY invoiceID HAVING COUNT(invoiceID)>1
```

but it's nothing we haven't covered!  I'd have to filter on the GROUP BY, not the WHERE.  BTW, this is NOT a correlated query!

I was tempted to write:

```
SELECT vendorName, i.invoiceID, invoiceSequence, invoiceLineItemAmount
FROM <join the 3 tables>
WHERE invoiceSequence>1;
```

however, this chops off the first line of the invoiceSequence.  If it has more than one line, all lines must be in the output; here is mine:

- **Exercise**** 6****.**

The

- **Exercise**** 7****.**

The

- **Exercise**** 8****.**

Failed Attempts:

```
SELECT vendorName AS vendorName,
invoiceNumber AS invoiceNumber,
invoiceDate AS invoiceDate,
invoiceTotal AS invoiceTotal
FROM vendors INNER JOIN invoices
ON vendors.VendorID = invoices.VendorID
GROUP BY vendorName, invoiceNumber, invoiceNumber, invoiceTotal, invoiceDate
HAVING COUNT(invoiceNumber)=1
ORDER BY vendorName;

SELECT vendorName AS vendorName,
invoiceNumber AS invoiceNumber,
invoiceDate AS invoiceDate,
invoiceTotal AS invoiceTotal
FROM Vendors
INNER JOIN
(SELECT VendorID
FROM Invoices
GROUP by VendorID
HAVING COUNT(vendorid)=1
) sub ON Vendors.VendorID = sub.VendorID
ORDER BY vendorName;

SELECT Vendors.VendorID, VendorName
FROM Vendors FULL JOIN Invoices
ON Vendors.VendorID = Invoices.VendorID
WHERE NOT EXISTS (SELECT Invoices.VendorID
FROM Invoices
WHERE Invoices.VendorID = Vendors.VendorID)

SELECT vendorName,invoiceNumber,invoiceTotal,invoiceNumber
FROM Vendors INNER JOIN
(
SELECT Vendorid
FROM Invoices
GROUP BY VENDORID
HAVING COUNT (Vendorid)=1
) Sub ON Vendors.Vendorid = Sub.Vendorid
ORDER BY Vendorid;

SELECT vendorName AS vendorName,
MAX(i.invoiceNumber) AS invoiceNumber,
MIN(i.invoiceDate) AS invoiceDate,
MAX(i.invoiceTotal) AS invoiceTotal
FROM vendors AS v
INNER JOIN invoices AS i
ON v.vendorID = i.vendorID
INNER JOIN
(
SELECT vendorID AS vendorID,
     MIN(invoiceDate) AS myMinDate,
     invoiceTotal
FROM invoices
GROUP BY vendorID
) AS d
ON v.vendorID = d.vendorID
GROUP BY vendorName
ORDER BY MAX(i.invoiceNumber);
```