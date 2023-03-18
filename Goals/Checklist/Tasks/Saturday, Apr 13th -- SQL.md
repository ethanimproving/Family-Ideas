- **Work Tasks**
- [ ] SQL Module 11 Assignment
- [X] SQL Module 11 Quiz
- [ ] SQL Lecture 4 12 2019
- [ ] Collect Ephesians 2:8 in Greek
- [ ] Get scheduleplannerapp to sync with phone

**Lecture 3 8 2019 Notes**
lorem30

**ITSE 2309, Chapter 5 Assignment**

- **Exercise**** 1****.**
- [ ] Create the file: mod11_assign1.sql

1)  Write a SELECT statement that returns two columns from the **invoices table**: **vendorID** and **paymentSum** where p

```
SELECT iL1.invoiceID AS id1,
       iL2.invoiceID AS id2, il1.accountNo
FROM invoiceLineItems AS iL1
INNER JOIN invoiceLineItems AS iL2
ON iL1.accountNo = iL2.accountNo
WHERE iL1.invoiceID <> iL2.invoiceID
OR NOT EXISTS
(
       SELECT *
       FROM invoiceLineItems
    WHERE iL2.invoiceID = iL1.invoiceID AND iL2.invoiceID = iL1.invoiceID
)
ORDER BY il1.accountNo;
```