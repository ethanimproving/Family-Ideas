Collin College                                                                  ITSE 2309                                                      Test Two, Version A

**ITSE 2309, Test Two**

The due date is firm!  On a test, there has to be a cut-off date for me to grade them.  I can't grade tests that are trickling in.

Instructions: Using your favorite text editor, create the file:  *Test2.sql *  Place a heading at the beginning of the file that looks something like this:

/*
Test 2
Steven W. Smith (use your name)
ITSE 2309
*/

Use your own name, of course, and you have license to change format as you believe looks professional so long as the document clearly states what it is and who wrote it.

All of the queries will be written into this file; do not open a different file for each query; do not  *zip*  the file.  Pay attention to the required file name!  (Computer scientists are very fussy about file names because misnaming a file will usually break the program.)  Number each exercise clearly in a comment and skip space between them.  End each statement with a semicolon (';')  When you finish, the entire file should run as an SQL script.  The easier it is to read, the better grade it will receive.

During the test, you may use your textbook, notes, and computer resources.  You may not use email or any other form of communication.

- A query may or may not produce any output and still be correct.
- Refresh your tables by running the create_ap.sql script before starting the test.
- In all cases during this assignment, (and generally for all assignments) always give aggregated columns and functional output appropriate, meaningful aliases.
- All test items are equally weighted at 10% each; partial credit will be given for code that makes progress to a solution.

- [X] 1)  Write an SQL SELECT query that returns three columns:  The SUM of the paymentTotal column from the invoices table, the COUNT of the invoices that were summed, and group on the vendorState from the vendors table.  Order by the COUNT with the least appearing first.

- [X] 2)  Write an SQL SELECT query that returns vendorID pairs that have the same zip code; also return the vendorZipCode.  Now, vendorID #17 obviously has the same vendorZipCode as vendorID #17; however, do not return a pair unless it contains two  *different*  vendorID values.  (Hint: use a self join.)

The specification above allows vendorID #12 to match zip codes with #17, and then turn around and say that #17 and #12 are also a pair.  It is possible to suppress this duplication with:

WHERE vendorID1 < vendorID2;  -- or >

- [X] 3)  Write an SQL SELECT query that returns a list of all accountNo in the glAccounts table that are unused (i.e., do not appear in the invoiceLineItems table).  Demonstrate the use of a subquery and the NOT EXISTS operator to solve this problem.  (Yes, it could also be solved using an OUTER JOIN; however, I am specifically calling for a subquery.)

- [X] 4)  Write an SQL SELECT query that groups the sum of the invoiceLineItemAmount (invoiceLineItems) with their corresponding accountDescriptions in the glAccounts table.  Order the result set by the invoiceLineItemAmounts in descending order.

- [X] 5)  Write an SQL SELECT query that will return the vendorName, invoiceNumber, and invoiceTotal; return only rows where the invoiceTotal is greater than the average invoiceTotal.  Display the results in ascending order by vendorName.  (If you compare a value to a subquery, don't forget to use the keyword "ALL".)

- [X] 6)  Write an SQL SELECT query that will return the invoiceID, invoiceSequence, and invoiceLineItemAmount from the invoiceLineItems table where the invoiceLineItemAmount  *is less than the average*  invoiceLineItemAmount for that invoiceID.  Order by invoiceID.

Some discussion is in order for this one:

- This is a correlated subquery.
- In order for any line to be less than (or greater) than the average for that invoiceID, the invoiceID must have more than one entry (otherwise they would be equal and wouldn't qualify.)
- There are two invoiceID values that have more than one entry: IDs 12 and 78.  Of course, the values for invoiceLineItemAmount have to be different or we would still have the same issue.

- [X] 7)  Revisiting the solution to problem #2: the query returned of integers.  Write an SQL query that casts each of the returned values as VARCHAR and concatenates them into one string.

- [X] 8)  In the invoices table, the invoiceNumber values are stored as VARCHAR; however, there are some rows where the invoiceNumber values represent valid integers.  Print the invoiceID and the invoiceNumber cast to int for only those rows that can be so cast.  (Do not print NULL values.)

Hint: Either TRY_CAST from chapter eight or ISNUMERIC from chapter nine would be useful.

9)  Write an SQL SELECT query that will return the invoiceNumber and balanceDue for every invoice with a non-zero balanceDue that is between 0 and seven days past due today.

(If you refreshed your data, you should see one.)
10)  Consider the following table creation:
CREATE TABLE nameTest
(
            fullName         VARCHAR(32) PRIMARY KEY
);
INSERT INTO nameTest(fullName)
VALUES            ('Doe, John'),
                        ('Roe, Jane'),
                        ('Bloe, Joe'),
                        ('Jones, Sally');

Notice that they contain the last name first and all are separated by a comma and a space.  Write the SQL SELECT query that will return the first and last names in two different strings aliased as firstName and lastName respectively.