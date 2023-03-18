**Lecture 7**

- **Lecture Notes.**
- [X] Anytime you have a CREATE, in general we drop it first, and we always have a GO before it and after it.
- [X] Professors convention is to put the parent on the left and the child on the right.

```
-- only childless parents
SELECT p.p_id AS PrimaryKey,
              c.p_id AS ForeignKey,  c_id
==FROM parent AS p LEFT OUTER JOIN child AS c==
       ON p.p_id = c.p_id
WHERE c.p_id IS NULL
ORDER BY p.p_id, c_id;
```

What is the order of execution?
1. FROM
2. WHERE
3. SELECT
4. ORDER BY

The 2 hours completion time is more lenient than 5PM Tuesday Due Date.

- **Change color theme of SSMS.**

Method 1:

- [X] Review Color themes already available

`Tools > Options > Environment > General > Color theme:`

- [X] Close SSMS if it is running.
- [X] Open the configuration file (ssms.pkgundef)

`C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn\ManagementStudio`

(You may need to open your text editor as an administrator to edit the SSMS configuration file)

- [X] Search for the Remove Dark Theme heading and comment out the first line

```
// Remove Dark theme
//[$RootKey$\Themes\{1ded0138-47ce-435e-84ef-9ec1f439b749}]
[$RootKey$\AD7Metrics\PortSupplier\{4103F338-2255-40C0-ACF5-7380E2BEA13D}]
[$RootKey$\External Tools\Error Loo&kup]
[$RootKey$\LightSwitch]
[$RootKey$\Debugger\LaunchHooks110]
[$RootKey$\DiagnosticsHub]
[$RootKey$\FeatureFlags]
[$RootKey$\VB Editor]
[$RootKey$\Languages\CodeExpansions\C/C++]
[$RootKey$\Languages\CodeExpansions\JavaScript]
[$RootKey$\Text Editor\C/C++]
[$RootKey$\Text Editor\CSharp]
[$RootKey$\Text Editor\Disassembly]
[$RootKey$\Text Editor\ENC]
[$RootKey$\Text Editor\JavaScript]
[$RootKey$\Text Editor\Memory]
[$RootKey$\Text Editor\Register]
[$RootKey$\Text Editor\ResJSON]
[$RootKey$\Text Editor\TypeScript]
[$RootKey$\Text Editor\VBScript]
```

Method 2:

- [X] Open PowerShell as Administrator

`powershell -Command "(gc 'C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn\ManagementStudio\ssms.pkgundef') -replace '\[\``$RootKey\``$\\Themes\\{1ded0138-47ce-435e-84ef-9ec1f439b749}\]', '//[``$RootKey``$\Themes\{1ded0138-47ce-435e-84ef-9ec1f439b749}]' | Out-File 'C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn\ManagementStudio\ssms.pkgundef'"`

- [X] Set object explorer to dark theme

```
Tools > Options > Environment > Fonts and Colours > Grid Resutls
Set Background to Black and foreground to white.
```

Method 3:

- [X] Use Visual Studio Community Instead

```
View > SQL Server Object Explorer
Add SQL Server > FX-4100\SQLEXPRESS > emiller25 > {standard}
```

- [ ] Modify keyboard shortcuts

`Tools > Options > Environment > Keyboard`

**Module 6 Assignment B**

- **Instructions.**
- [X] Instructions: Using your favorite text editor (probably NotePad++), create the file: mod6b_assign1.sql
- [X] Place a heading at the beginning of the file that looks something like this:

```
/*
Module Six, Chapter Four exercises Part B
Ethan Miller
ITSE 2309
*/
```

Use your own name, of course, and you have license to change format as you believe looks professional so long as the document clearly states what it is and who wrote it.

- [X] Number each exercise in a comment and skip space between them.
- [X] End each statement with a semicolon (';')
- [X] When you finish, the entire file should run as an SQL script.  The easier it is to read, the better grade it will receive.

- [X] Do not default the term "OUTER".

- [X] 1) Write an SQL SELECT statement that returns two columns from the glAccounts table: accountNo and accountDescription.  The result set should have one row for each account number *that has never been used*.
- [X] Sort the output by accountNo.

(an accountNo has "been used" if it appears in the **invoiceLineItems** table)

```
SELECT  g.accountNo AS accountNo,
        accountDescription AS accountDescription
FROM glAccounts AS g LEFT OUTER JOIN invoiceLineItems AS i
  ON g.accountNo = i.accountNo
WHERE i.accountNo IS NULL
ORDER BY accountNo ASC;
```

- Since glAccounts is the parent table, the exercise becomes: find childless parents; therefore, it's an OUTER JOIN.  ( I see 54 rows in mine.)

- [X] 2) Write an SQL query that will
- - [X] return all of the invoiceID values from the invoices table
- - [X] that do not also appear in the invoiceLineItems table. (one row)

```
SELECT i.invoiceID AS invoiceID
FROM invoices AS i LEFT OUTER JOIN invoiceLineItems AS l
  ON i.invoiceID = l.invoiceID
WHERE l.invoiceID IS NULL
ORDER BY invoiceID;
```

- [X] 3) We are trying to enable the FOREIGN KEY constraint in the invoiceLineItems table; however, we have data in the child table that are  *inconsistent with the similarly named field in the invoices table*.  Return all data on the row or rows.  (Hint: SELECT tableName.*  ... one row returned)

```
SELECT i.invoiceID AS PrimaryKey,
              l.invoiceID AS ForeignKey
FROM invoices AS i RIGHT OUTER JOIN invoiceLineItems AS l
       ON i.invoiceID = l.invoiceID
WHERE i.invoiceID IS NULL AND l.invoiceID IS NOT NULL
ORDER BY PrimaryKey;
```

- [X] 4) While we're at it, let's check the contactUpdates table for bogus data.  The odd thing about that table is that somebody set up the FOREIGN KEY referencing the vendors table in contactUpdates as also being the PRIMARY KEY!  Write an SQL query that will
- - [X] find any vendorID in contactUpdates
- - [X] that does not appear in the vendors; return all data.  (There is one.)

```
SELECT v.vendorID AS PrimaryKey,
              c.vendorID AS ForeignKey
FROM vendors AS v RIGHT OUTER JOIN contactUpdates AS c
       ON v.vendorID = c.vendorID
WHERE v.vendorID IS NULL AND c.vendorID IS NOT NULL
ORDER BY PrimaryKey;
```

- [X] 5) List the vendorID and vendorName for all vendors who have no corresponding rows in the invoices table.  (I see 88 of them.)

```
SELECT v.vendorID AS PrimaryKey,
              vendorName AS vendorName,
              i.vendorID AS ForeignKey
FROM vendors AS v LEFT OUTER JOIN invoices AS i
       ON v.vendorID = i.vendorID
WHERE i.vendorID IS NULL
ORDER BY PrimaryKey;
```

**ITSE 2309, Practice Test One**

- **Instructions.**
- [X] Please note the time you begin and end the assignment because I would like to know this information.
- [X] Instructions: Using your favorite text editor (probably NotePad++), create the file: PracticeTest1.sql
- [X] Place a heading at the beginning of the file that looks something like this:

```
/*

Test 1
Ethan Miller
ITSE 2309

*/
```

- [X] Number each exercise clearly in a comment and skip space between them.
- [X] End each statement with a semicolon (';')
- [X] When you finish, the entire file should run as an SQL script.  The easier it is to read, the better grade it will receive.

- [X] Unless the exercise specifically calls for an implicit join, use an explicit INNER JOIN for all exercises in this block.
- [X] Do not default the terms "INNER" or "OUTER" as seen in the textbook.  A query might not produce any output and still be correct.

*******************************************************************

- **Part One: (For part one, you will use your default database; don't create a new one.) (20 points)****.**

Write the SQL code to create *at least* two tables;  however, you might need more tables to accomplish the specific task.  Your tables will keep track of:

- [X] Create a table names Owners; the properties of an owner are:
- - [X] Owner ID…
- - [X] First Name…
- - [X] Last Name…
- - [X] Address…
- - [X] Phone

```
GO
CREATE TABLE owners
(
       o_id          CHAR(4),
       o_fname              VARCHAR(16),
       o_lname              VARCHAR(16),
       o_street      VARCHAR(34),
       o_city        VARCHAR(22),
       o_state              CHAR(2),
       o_zip         CHAR(5),
       o_phone_num   CHAR(10),
       --
       CONSTRAINT ownerPK PRIMARY KEY(o_id),
       CONSTRAINT owner_null_oname CHECK(o_fname IS NOT NULL),
       CONSTRAINT owner_null_oname CHECK(o_lname IS NOT NULL),
);
----------------------------------------------------------
GO
```

- [X] If you have already created the tables with the same names as the assignment, you will need to drop them before you can recreate them.  This is a *very* commonly-used schema!

```
-- Drop existing tables
IF OBJECT_ID('pets') IS NOT NULL
       DROP TABLE pets;
IF OBJECT_ID('vehicles') IS NOT NULL
       DROP TABLE vehicles;
IF OBJECT_ID('owners') IS NOT NULL
       DROP TABLE owners;
```

- [X] Select tables where owner is being referenced and drop them

```
SELECT *
FROM sys.foreign_keys
WHERE referenced_object_id = object_id('owners')

SELECT
    'ALTER TABLE [' +  OBJECT_SCHEMA_NAME(parent_object_id) +
    '].[' + OBJECT_NAME(parent_object_id) +
    '] DROP CONSTRAINT [' + name + ']'
FROM sys.foreign_keys
WHERE referenced_object_id = object_id('owners')
```

- [X] Vehicles; the properties of a vehicle are:
- - [X] Vehicle ID
- - [X] Make
- - [X] Model
- - [X] Year
- - [X] Color

```
GO
CREATE TABLE vehicles
(
       VehicleID     CHAR(8),
       v_Make               VARCHAR(16),
       v_Model       VARCHAR(16),
       v_Year               CHAR(4),
       v_Color              CHAR(2),
       OwnerID              CHAR(8),
       CONSTRAINT v_PK PRIMARY KEY(VehicleID),
       CONSTRAINT v_FK FOREIGN KEY(OwnerID) REFERENCES owners(OwnerID)
);

GO  --------------------------------------------------------------------------------

```

- [X]  Cause the following relationship to exist: An owner has many cars; a car may have *at most one owner* (no common-property here -- one to many relationship).        (This is a one to many)
- - [X] Write the code to insert at least three records into each table.
- - [X] Use proper SQL programming style for table creation (e.g.: name all of your constraints and use semicolons.)
- - [X] Choose meaningful identifiers and reasonable data types. For example: a last name might allow 16 characters... perhaps; 50 is too many and two characters is too few.
- - [X] Constrain all last names against NULL.

```

INSERT INTO owners(OwnerID, o_FirstName, o_LastName, o_Street, o_City, o_State,  o_Zip, o_Phone)

VALUES ('0001', 'Marty', 'Stec', 'Arch Street', '15701', 'Indiana', 'PA',  '6606880679'),

              ('0002', 'Penni', 'Jimison', 'Green Street', '33056', 'Miami  Gardens', 'FL', '9789722191'),

              ('0003', 'Wilfred', 'Sanches', 'Parker Street', '19701', 'Bear',  'DE', '5057936710');

INSERT INTO vehicles(VehicleID, v_Make, v_Model, v_Year, v_Color, OwnerID)
VALUES ('9876', 'Ford', 'Tarus', '2009', 'BK', '2345'),
              ('9876', 'Ford', 'Tarus', '2009', 'BK', '2345'),
              ('9876', 'Ford', 'Tarus', '2009', 'BK', '2345');
```

************************************************************

[Use ap_DB; scratch_DB is default]

**Part 2** (For part two, use your default database and the existing Vendors-Invoices-Terms schema.)

- [X] 1) Insert the following record into the Terms table:

<TermsID>      <TermsDescription>   <TermsDueDays>
     6                      Existing Credit             -1

```
INSERT INTO terms(TermsID, TermsDescription, TermsDueDays)
VALUES(6, 'Existing Credit', -1);
```

- [X] Drop the value first, if it exists

```
DELETE FROM terms
WHERE TermsID = 6;
```

- [X] 2) Change the CreditTotal to 50.00 for all of the invoices for VendorID 122.

```
UPDATE invoices
SET creditTotal = 50
WHERE vendorID = 122;
```

- [X] 3) Update the Vendors table to to show (999) 999-9999 for the phones that are currently NULL.

```
UPDATE vendors
SET vendorPhone = '9999999999'
WHERE vendorPhone IS NULL;
```

- [X] 4) Write an SQL SELECT query to show the name and city for Vendors in zip 53707 whose city begins with 'Ma'; sort the output by city.

```
SELECT vendorName AS vendorName,
              vendorCity AS vendorCity
FROM vendors
WHERE vendorZipCode = '53707' AND vendorCity LIKE 'Ma%'
ORDER BY vendorCity;
```

- [X] 5) Write the SQL code to delete VendorID = 113 from the Vendor's table; also delete any associated invoices.  This will probably require two SQL statements in the correct order.

```
DELETE FROM invoices
WHERE vendorID = 113;
DELETE FROM vendors
WHERE vendorID = 113;
```

- [X] 6) Write an SQL SELECT query that shows the invoiceNumber and invoiceDueDate for Vendors in California ("CA").

```
SELECT invoiceNumber, invoiceDueDate
FROM invoices AS i INNER JOIN vendors AS v ON i.vendorID = v.vendorID
WHERE vendorState = 'CA';
```

- [X] 7) Write an SQL join that will find any unused "Terms" in the table; i.e., no invoice has these terms.

```
SELECT i.termsID
FROM invoices AS i RIGHT JOIN terms AS t
       ON i.termsID = t.termsID
WHERE t.termsID IS NULL;
```

- [X] 8) Write an SQL query that will return the vendorCity, invoiceNumber, and invoiceTotal for all rows with an invoice less than 100 and a termsDueDays less than or equal to 20.

```
SELECT vendorCity AS vendorCity,
              invoiceNumber AS invoiceNumber,
              invoiceTotal AS invoiceTotal
FROM
       vendors AS v
              JOIN
       invoices AS i
              ON v.vendorID = i.vendorID
              JOIN
       terms AS t
              ON i.termsID = t.termsID
WHERE invoiceTotal < 100 AND termsDueDays <= 20
ORDER BY invoiceTotal;
```

- [X] 9) You may have noticed that the defaultTermsID field of the vendors table is not constrained as a foreign key.  If we tried to add a foreign key constraint, it would fail because there are invalid data in the table... because I placed them there.  Write an SQL query that will find all invalid data in that field.  (Read your schema!  The table and field names give you information about which tables are being referenced.)

```
SELECT vendorID AS vendorID,
              defaultTermsID AS defaultTermsID
FROM vendors LEFT JOIN terms
  ON defaultTermsID = termsID
WHERE termsID IS NULL;
```