**ITSE 2309, Test One**

- **Instructions.**
- [ ] Please note the time you begin and end the assignment because I would like to know this information.

- [X] Create the file:  *Test1.sql *  Place a heading at the beginning of the file that looks something like this:

```
/*
    Test 1
    Ethan Miller
    ITSE 2309
*/
```

- [X] Number each exercise clearly in a comment and skip space between them.
- [X] End each statement with a semicolon (';')
- [X] When you finish, the entire file should run as an SQL script.  The easier it is to read, the better grade it will receive.

- [ ] Unless the exercise specifically calls for an implicit join, use an explicit INNER JOIN for all exercises in this block
- [ ] Do not default the terms "INNER" or "OUTER" as seen in the textbook.  A query may or may not produce any output and still be correct.

- [X] Refresh your tables by running the create_ap.sql script before the test.

**Part One:**

- [X] (For part one, you will use your default database; don't create a new one.)
- [X] Write the SQL code to create *at least* two tables;  however, you might need more tables to accomplish the

specific task.  Your tables will keep track of:

- [X] Doctors; the properties of a doctor are:
- Doctor ID
- First Name
- Last Name
- Address
- Phone

```
GO ----------------------------------------------------------

CREATE TABLE doctors
(
  DoctorID    CHAR(4),
  d_FirstName VARCHAR(16),
  d_LastName  VARCHAR(16),
  d_Address   VARCHAR(32),
  d_Phone     CHAR(10),
  --
  CONSTRAINT d_PK PRIMARY KEY(DoctorID),
  CONSTRAINT doctor_null_dfname CHECK(d_FirstName IS NOT NULL),
  CONSTRAINT doctor_null_dlname CHECK(d_LastName IS NOT NULL),
);

GO ---------------------------------------------------------------------
```

- [X] Patients; the properties of a patient are:
- Patient ID (probably an SSN?)
- First Name
- Last Name
- Address
- Phone
- Date of birth

```
GO ---------------------------------------------------------------------

CREATE TABLE patients
(
  PatientsID  CHAR(9),
  p_FirstName VARCHAR(16),
  p_LastName  VARCHAR(16),
  p_Address   VARCHAR(32),
  p_Phone     CHAR(10),
  p_DOB       DATETIME,
  DoctorID    CHAR(4),
  CONSTRAINT p_PK PRIMARY KEY(PatientsID),
  CONSTRAINT p_FK FOREIGN KEY(DoctorID) REFERENCES doctors(DoctorID)
);

GO --------------------------------------------------------------------------------

```

Cause the following relationships to exist:
            A doctor has many patients; a patient must have
            exactly one doctor (primary).
            (One to many)

- [X] Write the code to insert at least three records into each table.

```
INSERT INTO doctors(DoctorID, d_FirstName, d_LastName, d_Address, d_Phone)
VALUES  ('0001', 'Jim', 'McCarty', 'Arch Street', '7202973140'),
        ('0002', 'Penni', 'Jimison', 'Green Street', '9789722191'),
        ('0003', 'Wilfred', 'Sanches', 'Parker Street', '5057936710');

INSERT INTO patients(PatientsID, p_FirstName, p_LastName, p_Address, p_Phone, p_DOB, DoctorID)

VALUES  ('267996037', 'Alverta', 'Frami', '7246 Patience Route', '5854084273', '1987-09-23 12:35:54', '0001'),

        ('491981341', 'Montana', 'Jacobson', '1911 Stroman Passage', '1238904019', '1956-04-19 02:01:57', '0002'),

        ('436988464', 'Sylvester', 'Hettinger', '791 Leannon Viaduct', '7615529035', '1996-03-29 22:00:17', '0003');

```

- Use proper SQL programming style for table creation (e.g.: name all of your constraints and use semicolons.)
- Choose meaningful identifiers and reasonable data types. For example: a last name might allow 16 characters... perhaps; 50 is too many and two characters is too few.
- Constrain all last names against NULL.

**Part 2:**

- [X] (For part two, use your default database and the existing Vendors-Invoices-Terms schema.)

Write SQL code to accomplish the following tasks:

- [X] 1) Insert the following record into the vendors table:

|     |     |
| --- | --- |
| VendorID | 0   |
| VendorName | Pooh |
| VendorAddress1 | <NULL> |
| VendorAddress2, | <NULL> |
| VendorCity | Frisco |
| VendorState | TX  |
| VendorZipCode | 76209 |
| VendorPhone | 1234 |
| VendorContactLName | Orphans |
| VendorContactFName | Parent of |
| DefaultTermsID | 0   |
| DefaultAccountNo | 100 |

```

INSERT INTO vendors(VendorID, VendorName, VendorAddress1, VendorAddress2, VendorCity, VendorState, VendorZipCode, VendorPhone, VendorContactLName, VendorContactFName, DefaultTermsID, DefaultAccountNo)

VALUES(0, 'Pooh', <NULL>, <NULL>, 'Frisco', 'TX', 76209, 1234, 'Orphans', 'Parent of', 0, 100);

```

- [ ] 2) Write an SQL statement that ***would*** change the TermsID to 7 for all of the invoices for VendorID 115.  (Don't worry about the error message, just write the code.)

```
UPDATE invoices
SET TermsID = 7
WHERE vendorID = 115;
```

- [X] 3)  Now you can start worrying about the error message.  Problem #2 produced an error... why was there an error (be specific!)

```
Msg 547, Level 16, State 0, Line 77

The UPDATE statement ==conflicted with the FOREIGN KEY constraint==  "Invoices_Terms_FK". The conflict occurred in database "ap_DB", table "==dbo.Terms==",  column 'TermsID'.

The statement has been terminated.
```

/*
            Place your text inside a comment.
*/

```
/*

There is no existing TermsID (Invoices_Terms_FK) with the value 7 in the terms table. It cannot be set to 7 without providing input for TermsDescription and TermsDueDays since they are contrained against NULL.

*/

--    Since TermsID is the primary key in the Terms table, every entry has to have a unique TermsID.

--    SQL couldn't set the TermsID from the Terms table to 7 while it's being referenced by the Invoices_Terms_FK foreign key in the invoices table.

```

- [X] 4) Zip code 93711 has changed to 93710.  Write a single SQL statement to update the Vendors table to reflect the change.

```
UPDATE vendors
SET VendorZipCode = '93710'
WHERE VendorZipCode = '93711';
```

- [X] 5) Write the SQL code to delete  *VendorID = 82*  from the Vendor's table;
- [X] also delete any associated invoices.  This will probably require two SQL statements in the correct order.

```
DELETE FROM invoices
WHERE vendorID = 82;

DELETE FROM vendors
WHERE vendorID = 82;
```

- [X] 6) Write an SQL SELECT query to show the name and city for Vendors in California who have a '559' area code; sort the output by city.

```
SELECT  vendorName AS vendorName,
        VendorCity AS VendorCity
FROM vendors
WHERE VendorPhone LIKE '%559%' AND VendorState LIKE 'Ca%'
ORDER BY VendorState;
```

- [X] 7) Write an SQL SELECT query that shows the  **vendorName**,  **vendorState**, and  **termsDueDays**  for vendors who have  ==one or more invoices with a termsDueDays greater than 30.==  (Hint: it needs the invoices table, also!)

```
SELECT  VendorName AS VendorName,
        VendorState AS VendorState,
        TermsDueDays AS TermsDueDays
FROM
  vendors AS v
    JOIN
  invoices AS i
    ON v.VendorID = i.VendorID
    JOIN
  terms AS t
    ON i.TermsID = t.TermsID
WHERE invoiceTotal > 0 AND TermsDueDays > 30
ORDER BY TermsDueDays;
```

**Items 8 and 9 are weighted at 15% each.**
8) In SQL Server,  you turn off a constraint using:
     ALTER  TABLE  tableName  NOCHECK  CONSTRAINT  constraintName;
Predictably, you turn it back on with:
     ALTER  TABLE  tableName  CHECK  CONSTRAINT  constraintName;

The issue is that the data that were entered while it was disabled are never ckecked.

Consider the following SQL statement (this particular syntax is unique to SQL Server).

     ALTER  TABLE  invoiceLineItems  WITH  CHECK
     CHECK  CONSTRAINT  FK_Inv_Line;

The first line says to change the table and to recheck existing data against the constraint named in the second line.  I always break that one onto two lines only because it really looks weird when I write:   ...WITH  CHECK CHECK...

- [X] Paste that last SQL statement into a query window and attempt to run it... it will fail because there are invalid data in the table.

```
Msg 547, Level 16, State 0, Line 125

The ALTER TABLE statement conflicted with the ==FOREIGN KEY constraint  "FK_Inv_Line".== The conflict occurred in database "ap_DB", table "**dbo.Invoices**",  column '**InvoiceID**'.

```

- [X] Write an SQL statement that will find them all.  (That means that you have to figure out what is wrong.)

```
SELECT  i.InvoiceID AS InvoiceID,
invoiceTotal - (paymentTotal + creditTotal) AS balanceDue,
        PaymentDate AS PaymentDate,
        TermsID AS TermsID
FROM invoices AS i LEFT JOIN invoiceLineItems AS l
ON i.InvoiceID = l.InvoiceID

WHERE (invoiceTotal - (paymentTotal + creditTotal) > 0 AND paymentDate IS NOT NULL) OR

(invoiceTotal - (paymentTotal + creditTotal) = 0 AND paymentDate IS NULL) OR
(invoiceTotal - (paymentTotal + creditTotal) > 0 AND TermsID IS NULL);

-- DELETE FROM invoices
-- WHERE paymentDate IS NULL;
```

9) Write an SQL statement that will list the  **vendorName**,  **invoiceID**, and  **invoiceSequence**.  The vendorName is in the vendors table and the invoiceSequence is in the invoiceLineItems table.  The vendors and invoiceLineItems tables are related only through invoives.

- [X] Show  ***only***  the vendor names that participate in the vendor/invoice relationship and  ***all***  of the rows from the invoiceLineItems table including any unmatched rows.  (Hint: see textbook page 146.)

Hi professor,

I wasn't sure if we were allowed to re-submit the test or not, since we have the option on Canvas, but since it officially closes today I thought I'd go ahead and do it. The test took me 3 hours and 13 minutes, then after taking a break for dinner with a movie, I spent about 20 minutes extra making the corrections. Then when I saw there was an option to resubmit, I emailed you that night, but never heard anything back, so I'm hoping I won't be ultra-penalized for re-submitting 3 days later?

If this is not allowed, I will be happy to provide my first attempt where I completely bombed the ALTER TABLE question.

My corrections were made 6 hours after

I emaile

I took the test on March 2, submitted it, ate dinner with a movie, and then after thinking it through the ALTER TABLE staement made sense.

I emailed you Mar 2 at 10:27, 6 hours after I accessed the test, so I'm hoping that will be the maximum penalty instead of

I know it looks like I'm submitting it 3 days after I accessed the the test, but I