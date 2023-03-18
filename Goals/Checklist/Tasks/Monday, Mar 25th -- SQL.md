- **Work Tasks**
- [X] SQL Module 7 Assignment
- [X] SQL Lecture 3 8 2019
- [ ] Python Homework
- [ ] Python Extra Credit
- [ ] Collect Ephesians 2:8 in Greek

**Lecture 3 8 2019 Notes**

Retrieve data [only by content](https://www.youtube.com/watch?v=biYZz9fDoGI&list=PLYAz1Lwo4O587rxMb1sTe8oXLDvrbkCo6&index=15&t=1h3m56s).

In, [not equal](https://www.youtube.com/watch?v=biYZz9fDoGI&list=PLYAz1Lwo4O587rxMb1sTe8oXLDvrbkCo6&index=15&t=1h7m37s).

Use [FULL SYNTAX](https://www.youtube.com/watch?v=biYZz9fDoGI&list=PLYAz1Lwo4O587rxMb1sTe8oXLDvrbkCo6&index=15&t=37m20s)

"a JOIN b" means "a INNER JOIN b"
"a LEFT JOIN b" means "a LEFT OUTER JOIN b"
"a RIGHT JOIN b" means "a RIGHT OUTER JOIN b"

**ITSE 2309, Chapter 5 Assignment**

- **Exercise**** 1****.**

1)  Write a SELECT statement that returns two columns from the **invoices table**: **vendorID** and **paymentSum** where paymentSum is the SUM() of the paymentTotal column.  (Since we have vendorID in the SELECT line, it must be in the GROUP BY clause.)  Group the result set by vendorID and ORDER BY paymentSum. (34 rows)

```
SELECT vendorID AS vendorID,
       SUM(paymentTotal) AS paymentSum
FROM invoices
GROUP BY vendorID
ORDER BY paymentSum;
```

- **Exercise**** 2.**

2)  Write a SELECT statement that returns two columns: vendorName and paymentSum where paymentSum is the SUM() of the paymentTotal column.  (Since we have vendorName in the SELECT line, it must be in the GROUP BY clause.)  Group the result set by vendorName and ORDER BY paymentSum. (This time 33 rows!!?  This tells us something!  Review problem five from chapter four, part b)

Are you noticing that these data come from two tables whereas the data in exercise one were taken from only one table?

```
SELECT  vendorName AS vendorName,
        SUM(paymentTotal) AS paymentSum
FROM vendors AS v JOIN invoices AS i
  ON v.vendorID = i.vendorID
GROUP BY vendorName
ORDER BY paymentSum;
```

- **Exercise**** 3.**

3)  Write a SELECT statement that returns three columns: vendorName, invoiceCount, and invoiceSum where invoiceCount is the COUNT() of the rows returned and invoiceSum is the SUM() of the invoiceTotal column  Group the result set by vendorName.  Sort the result set such that the with the greatest number of invoices appears first.  I have 33 rows; here are my first ten:

```
SELECT vendorName AS vendorName,
       COUNT(*) AS invoiceCount,
       SUM(invoiceTotal) AS invoiceSum
FROM vendors AS v JOIN invoices AS i
  ON v.vendorID = i.vendorID
GROUP BY vendorName
ORDER BY invoiceCount DESC;
```

- **Exercise**** 4.**

4)  Write a SELECT statement that returns three columns: **accountDescription**, **lineItemCount**, and **lineItemSum**.  lineItemCount is the number of entries in the invoiceLineItems table that have that accountDescription.  lineItemSum is the sum of the invoiceLineItemAmount column for that accountDescription.  Filter the set to include only groups with lineItemCount greater than 1.  Group the set by accountDescription and sort it by descending lineItemCount.

Hint: Join the glAccounts table to the invoiceLineItems table.

I found this one to be challenging!  A few observations:

- Join the tables with an INNER JOIN on accountNo
- If you alias COUNT(*) AS lineItemCount on the SELECT line you may use the alias on the ORDER BY line, but not in the HAVING clause! You will have to use COUNT(*)>1 in the HAVING clause.
- This one was adapted from #4 on page 181. IMO, the text's version is incomprehensible!  I edited the exercise to make it a little bit more clear what it wanted.

Here are the data I returned:

- **Exercise**** 5.**

Query #4 has an issue!  How do we know that don't have two or more different accountNo values with identical accountDescription?  Nothing is blocking that insert!  When we get to chapter 11, you will block that problem; for now, we'll just check it.

Write an SQL query that will check for duplicate accountDescription on different accountNo in the glAccounts table.

Hint: Select both fields and count the accountNo; group on accountDescription and look for a count > 1.  Well, there currently aren't any... we got lucky, I guess, but database professionals do not trust luck!  to test it, insert an accountNo of 633 with a description of 'Cash' into the table and that'll give you something to find.  Afterwards, just delete it.

- **Exercise**** 6.**

Modify the solution to exercise four to filter for invoices where the invoiceTotal is greater than 1000.  (Add the invoices table to the join and put that condition in a WHERE clause; it's easy!)

- **Exercise**** 7.**

Write a select statement that returns four columns:  vendorName, accountDescription, lineItemCount, and lineItemSum; lineItemCount is the row count; lineItemSum is the SUM of the invoiceLineItemAmount column.  For each vendor and accountNo (light bulb: that's probably the group by!) return the lineItemCount and lineItemSum sorted first by vendor, then by accountDescription.

My question is: what do they mean "sorted by vendor"?  Does that mean the name or the vendorID?  Since I can't really tell, I'll toss a coin... OK, we'll sort by vendorName.  It could be done either way easily.

Notice that this one has vendorName (from vendors), lineItemSum (from invoiceLineItems) and accountDescription (from glAccounts).  To make it better, you can only get from vendors to invoiceLineItems by going through invoices; thus, you have an INNER JOIN on four tables.  Other than that, it's pretty straightforward.  (I'm getting 36 rows returned.)

- **Exercise**** 8.**

Write a SELECT statement that answers the question: "Which vendors are being paid from more than one account?"  Return two columns: vendorName and the total number of accounts that apply to that vendor.  Only include rows that have a count exceeding one.

Discussion: You might well find a COUNT(DISTINCT... to be useful for this one.  Essentially, what we need to count is in invoiceLineItems, so we don't need the glAccounts table like we did in #7 (It asked for the accountDescription!)  It's a pretty straightforward join of three tables.  (I see Wells Fargo Bank with 3 accounts and Zylka Design with 2).