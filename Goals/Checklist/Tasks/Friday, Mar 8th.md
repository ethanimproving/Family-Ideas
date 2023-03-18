- [X] Test sound quality on Lego Movie song (160-360kbps) -- Go with 5.1 Channels (Converts to surround instead of simulating surround)

- [X] Artifacts to be submitted as one(1) Notepad file.

- [X] (1) Develop a Computer Program to implement the Standard Deduction Chart

     (See Exbibit B1  Standard Deduction Chart)

- [X] (2) Develop Computer Programs for ==Calculating the Tax Due== that implements

     taxation as intended by the U.S. Congress in the 2017 TAX CUTS AND JOBS ACT (Exhibit B2  METHOD A  for Calculating Tax Due)

- [X] Try using lists.

```
list<int> incomeBracket(5, 0);

list<int>::iterator outputIT;

for(outputIT = incomeBracket.begin(); outputIT != incomeBracket.end(); outputIT++)

{
cout << *outputIT << endl;
}
```

- [X] Try using tuples.

```
int singleIncomeBracket[7] = {0, 9526, 38701, 82501, 157501, 200001, 500001};

int marriedIncomeBracket[7] = {0, 19051, 77401, 165001, 315001, 400001, 600001};

double taxRate[7] = {.10, .12, .22, .24, .32, .35, .37};
cout << get<0>(singleIncomeBracket) << endl;

for (int i = 0; i < 7; i++)
{
// if(income >= get<i>(singleIncomeBracket))
const int n = i;
cout << get<n>(singleIncomeBracket) << endl;
}
```

- [X] Use arrays
- [X] Test each increment

```
for (int i = 0; income > singleIncomeBracket[i]; i++)
{
// local variables
double taxSegment(0.0);
int thisBracketBottom = singleIncomeBracket[i];
int thisBracketTop = singleIncomeBracket[i+1];

// test if income is will go into the next bracket
if(income > thisBracketTop)
{
taxSegment = (thisBracketTop - thisBracketBottom) * taxRate[i];
}
else
{
taxSegment = (income - thisBracketBottom) * taxRate[i];
}
cout << "i == " << i << endl;
cout << "Bracket: " << thisBracketBottom << "-" << thisBracketTop << endl;

cout << "Tax: " << thisBracketTop << " - " << thisBracketBottom << " * " << taxRate[i] << " = " << taxSegment << endl;

taxDue += taxSegment;
cout << "Tax Due: $" << taxDue << endl << endl;
}
```

(3) Write Algorithms for FORM 1040 (Exhibit A2) --

- [X] Lines 6,

```
double totalIncome(income + taxableInterest + ordinaryDividends + capitalGain);
cout << "totalIncome == " << totalIncome << endl;
```

- [X] 7b,

```
double adjustedIncome(totalIncome - incomeAdjustments);
cout << "adjustedIncome == " << adjustedIncome << endl;
```

- [X] 8,

`cout << "standardDeduction == " << standardDeduction << endl;`

- [X] 10,  and

```
double taxableIncome(adjustedIncome - standardDeduction);
if(taxableIncome < 0) {taxableIncome = 0;}
cout << "taxableIncome == $" << taxableIncome << endl;
```

- [X] 11a (using the Tax Algorithmm developed in Reqmt (2) above).
- Replace income with taxableIncome

(4) Display FORM 1040 showing Input and Computed Values for the
    following Test Cases:
------------------------------------------------------------------------
      TEST CASES for MINI-PROJECT  #2
------------------------------------------------------------------------

|     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEST CASE | FS  | BLND | OVR65 | SBLND | SOVR65 | Income | Tax-Exempt Interest | Qualified Dividends | Adjustments to Income |
| - [X] 1 | M   | X   | X   | X   | X   | 200000 | 2000 | 5000 | 9000 |
| - [X] 2 | S   | X   |     |     |     | 70000 | 100 | 300 | 200 |
| - [X] 3 | M   |     | X   |     | X   | 500000 | 10000 | 60000 | 8000 |
| - [ ] 4 | M   |     | X   | X   | X   | 400000 | 20000 | 80000 | 12000 |

*************************************************************************
REPORTING  FORMAT:

- [ ] Submit  your  Source Code & Testing Results as one .txt File(Notepad).

*************************************************************************