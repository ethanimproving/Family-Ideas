**Assignment 3****:**  Using pip and snap in Book Exercises

- **Lecture 3.**
- [X] Connect Object Explorer (Plug icon) as emiller25
- [X] Explain 1 to many relationship

1 Doctor has many patients. What happens is the *primary key* of the doctors table gets copied over into the patients table as a *foreign key*.

- [X] TEST QUESTION

WHERE vendarPhone IS NULL, not = NULL. You have to use the IS operator, because nothing is not equal to or unequal to nothing. Use IS NOT NULL to test for != NULL.

- [X] SELECT DISTINCT supresses duplicates. Don't show duplicate entries.
- [X] The output of an SQL statement is a table.

**Module 4 Assignment 1.**

- [X] Open the file mod3_assign1.sql and save it as mod4_assign1.sql
- [X] Add a  *field list*  to an INSERT command to ensure your data corresponds to the correct fields.

```
INSERT INTO owners(o_id, o_name, o_shoe_size, o_dob)
VALUES('1234', 'Bob', 11, '1980-07-23');
```

- [X] INSERT the following data into the owners Table:

owners
AXK9, Bob, 123 4th St, Frisco TX 76398
B5T6, Jane, 234 5th St, Plano, TX 76345
T123, John, 345 6th St, Denton, TX 76209
49YA, Sally, 456 7th St, Dallas, TX, 76452
6722, Joe, 567 8th St, Frisco, TX 76398

```
VALUES
  ('AXK9', 'Bob', '123 4th St', 'Frisco', 'TX', '76398'),
  ('B5T6', 'Jane', '234 5th St', 'Plano', 'TX', '76345'),
  ('T123', 'John', '345 6th St', 'Denton', 'TX', '76209'),
  ('49YA', 'Sally', '456 7th St', 'Dallas', 'TX', '76452'),
  ('6722', 'Joe', '567 8th St', 'Frisco', 'TX', '76398');
```

- [X] Repeat steps for pets table

pets
6733, Phang, '2016-01-18'    (That is the default date format)
R45E, Phydeaux,, 2016-02-22
7Y77, Phreemont, 2016-01-19
8765, Spot, 2016-05-01
775R, Burkley, 2015-12-22

```
INSERT INTO pets (p_id, p_name, p_vac_date, o_id)
VALUES
    ('6733', 'Phang', '2016-01-18', '6722'),
    ('R45E', 'Phydeaux', '2016-02-22', '49YA'),
    ('7Y77', 'Phreemont', '2016-01-19', '49YA'),
    ('8765', 'Spot', '2016-05-01', 'T123'),
    ('775R', 'Burkley', '2015-12-22', 'AXK9');
```

- [X] Update the table so that the zipcode of all records where the city is "Frisco" is updated to: 76309

```
UPDATE owners
SET o_zip='76309'
WHERE o_city='Frisco';
```

- [X] Delete all records where the  vaccination_date < '2015-12-31'

```
DELETE FROM pets
WHERE p_vac_date < '2015-12-31';
```

- [X] Test Code to make sure it's working
- Right click table, Edit Top 200 Rows to view in GUI
- [X] Save your file and submit it

**Module 5 Assignment 1.**

**- [X] **Create a database named ap_DB as Windows Administrator (emiller25 does not have authority by default)

- [X] Make owner emiller25
- [X] Disconnect and reconnect as emiller25

- [X] In [mod_02_page5](https://collin.instructure.com/courses/836867/pages/mod-02-page5-create-the-accounts-payable-ap-database?module_item_id=15138480), download the [create_ap.sql](https://collin.instructure.com/courses/836867/files/57197328/download?download_frd=1) file
- [X] Open in SQL Studio and execute the code (F5)

- [X] Download the assignment as a Word document: [Chapter Three Exercises.docx](https://collin.instructure.com/courses/836867/files/57197307/download?verifier=IjtvO5Mf7SWpclwf1eYTNLKAge14wPjbsupuhx62&wrap=1)
- [X] Using your favorite text editor (probably NotePad++), create the file: mod5_assign1.sql
- [X] Add heading to state what it is and who wrote it.

```
/*
Module Five, Chapter Three exercises
Ethan Miller
ITSE 2309
*/
```

- [X] Number each exercise in a comment and skip space between them.
- [X] 1) Write an SQL SELECT statement that will return all rows and all columns from the vendors table sorted by Zip Code. (This one is done as an example above.)

```
-- #1

SELECT *
FROM vendors
ORDER BY vendorZipCode;
```

- [X] 2) Write an SQL SELECT statement that will
- return three columns from the vendors table: *vendorContactFName*, *vendorContactLName*, and *vendorName*.
- [X] Sort the result set by last name, then by first name.  (Examine the field names carefully; *I* would have used simply v_lname instead of vendorContactLName; I tend to use terse field names.)

```
-- #2

SELECT vendorContactFName AS [First Name], vendorContactLName AS [Last Name], vendorName AS [Vendor Name]

FROM vendors
ORDER BY vendorContactLName ASC, vendorContactFName ASC;
```

**- [X] **3) Write an SQL SELECT statement that will return four columns from the invoices table named number, total, credits, and balanceDue (use AS to assign column aliases):

|     |     |
| --- | --- |
| i_num | Column alias for the invoiceNumber field |
| total | Column alias for the invoiceTotal field |
| credits | ==The==  ==sum==  ==of the paymentTotal and creditTotal fields== |
| balanceDue | invoiceTotal minus the credits ([defined on the previous line](https://www.youtube.com/watch?v=XEO5a8DbANc&index=8&t=1h20m44s&list=PLYAz1Lwo4O587rxMb1sTe8oXLDvrbkCo6)) |

You might be inclined to try:

*SELECT paymentTotal + creditTotal AS credits,*  ==invoiceTotal -==  ==credits==  *AS balanceDue *and it would certainly make sense to do so; however, it won't work in SQL Server.

Order the output by invoiceNumber.

```

SELECT invoiceNumber AS [i_num], invoiceTotal AS [total], paymentTotal + creditTotal AS [credits], invoiceTotal - (paymentTotal + creditTotal) AS [balanceDue]

FROM invoices
ORDER BY invoiceNumber ASC;
```

- [X] 4) Write an SQL SELECT statement that will return one column from the vendors table named fullName.
- [X] Derive this column from the vendorContactFName and vendorContactLName
- [X] Format it as follows: last name followed by a comma followed by a space followed by the first name.  For example: if the vendorContactFName were 'Joe' and the vendorContactLName were 'Bloe', then fullName would be 'Bloe, Joe'.  To review how to do this, see pages 94 and 95 in Chapter Three of the textbook.
- [X] Sort the result set by last name, then by first name.

```
SELECT CONCAT(vendorContactLName,', ',vendorContactFName) AS [fullName]
FROM vendors
ORDER BY vendorContactLName ASC, vendorContactFName ASC;
```

- [X] 5) Write an SQL SELECT statement that will return three columns

|     |     |
| --- | --- |
| invoiceTotal | From the invoices table |
| tenPerCent | invoiceTotal * 0.1 (or 10%) |
| plusTenPercent | The value of invoiceTotal plus 10% |

- [X] (For example: if invoiceTotal were 10,000, then 10% of that would be 1,000.  plusTenPercent would be 1,1000.)
- [X] Only return rows where where balanceDue is greater than 1,000 (and, if you forgot how to do that, review the way you calculated that field in exercise #3).
- [X] Sort the result set by invoiceTotal in descending order (largest invoice first). (Do not worry about trailing zeros to the right of the decimal in the output.)

```

SELECT invoiceTotal AS [total], invoiceTotal * 0.1 AS [tenPerCent], invoiceTotal * 1.1 AS plusTenPercent

FROM invoices
WHERE invoiceTotal - (paymentTotal + creditTotal) > 1000
ORDER BY invoiceTotal DESC;
```

- [X] 6) Modify the solution to exercise #3 to return only rows with an invoiceTotal greater than or equal to 500 but less than or equal to 10,000.

(Many programmers would choose to use '<=' and '>=' with an "AND" clause; however, the BETWEEN operator covered on pages 110, 111 would also work equally well.  Just bear in mind that "between" can be ambiguous with respect to the end values; BETWEEN will work as you want it to here.)

```

SELECT invoiceNumber AS [i_num], invoiceTotal AS [total], paymentTotal + creditTotal AS [credits], invoiceTotal - (paymentTotal + creditTotal) AS [balanceDue]

FROM invoices
WHERE invoiceTotal >= 500 AND invoiceTotal <= 10000
ORDER BY invoiceNumber ASC;
```

- [X] 7) Modify the solution to exercise #4 to return only contacts whose last name (vendorContactLName) begins with the letter 'A', 'B', 'C', or 'E'.

There exist a number of ways to accomplish this.

- The LEFT(vendorContactLName, 1) function described on page 98 and 99 with the IN operator on pages 108 and 109 might be handy.
- It could also be accomplished using a series of LIKE statements from pages 112 and 113 joined by OR.

```
SELECT CONCAT(vendorContactLName,', ',vendorContactFName) AS [fullName]
FROM vendors
WHERE VendorContactLName LIKE '[A-C,E]%'
ORDER BY vendorContactLName ASC, vendorContactFName ASC;
```

- [X] 8) Write an SQL SELECT statement that will return the invoiceNumber, paymentDate, and balanceDue (just like we did it in #3 and #6 above) for any invalid paymentDate values. To be valid,
- paymentDate must be NULL if the balanceDue is greater than zero
- and NOT NULL if the balanceDue = 0.

Now, this exercise pushes your logic!  Notice that it asks you to return invalid rows; however, the exercise defines what a valid row is!  Yes, that was deliberate!  Order the output by invoiceNumber.

```

SELECT invoiceNumber AS [i_num], paymentDate AS [paymentDate], invoiceTotal - (paymentTotal + creditTotal) AS [balanceDue]

FROM invoices

WHERE (invoiceTotal - (paymentTotal + creditTotal) > 0 AND paymentDate IS NOT NULL) OR

(invoiceTotal - (paymentTotal + creditTotal) = 0 AND paymentDate IS NULL)
ORDER BY invoiceNumber ASC;
```