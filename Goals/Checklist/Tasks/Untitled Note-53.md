Professor, if the project is due on the 28th as the Week 13 module suggests, it's important both that I (1) have the test case file now and (2) that you give us somewhere to submit it. I am gone all day Sundays and cannot wait until the last minute.

Let me also bring to your attention that our information for building this project is incomplete. In "PROJECT #4 LECTURE.txt" under the header "example input file.txt" you gave us 12 values and only labeled 4 of them.

```
1                        //fs
1                        //sd
0                        //LA
90000                    //wages
0
200
0
0
0
0
0
500
```

In order to complete the InputData_BO() struct constructor and the showInputFields() struct method, we need to know what the remaining Form 1040 Input Data fields are.

Using the four you provided and the "SOCIAL SECURITY BENEFITS WORKSHEET" to fill in the gaps, I've determined 11 of the 12 fields are:

1. Filing Status
2. Standard Deduction (Form 1040, line 8)
3. Living Arrangement
4. Wages (Form 1040, line 1)
5. Social Security Benefits (Form 1040, line 5a)
6. Taxable Interest (Form 1040, line 2b)
7. Ordinary Dividends (Form 1040, line 3b)
8. Capital Gain Distribution (Form 1040, line 3c)
9. Taxable Amount (Form 1040, line 4b)
10. Tax-Exempt Interest (Form 1040, line 2a)
11. Adjustments to Income (Form 1040, line 7a)
12. UNKNOWN

Even if I had 12 items and supposed they were correct, I wouldn't know in what order they appear in the example input file.txt. We really need our test cases to build the program so that we can know what input fields we're working with.

Lastly, I do not understand requirement 6 of mini-project 4. (Design an Application Testing Program.) "Application Testing Program" does not appear in the book or PowerPoint, and I don't remember it from the lectures. After some research, it just looks like a normal program that will be run in a prompt window to confirm the data is being correctly sent, received, and processed. So basically just make the program usable?

To summerize:

TWO REQUESTS:
1. Please give us our **test cases**.
2. Please give us somewhere to **submit** the project.

TWO QUESTIONS:

1. What are all 12 Form 1040 **Input Data fields**? (in order as they appear in example file.txt)

2. What is an **Application Testing Program**?

Please get back to me, and thanks.

Ethan Miller
COSC 1436

You gave us 4 out of 12 input data fields

1. We don't know what the remaining Form 1040 Input Data fields are... hdr, fs, sd, LA, wages...

2. We don't have "TEST CASES for MINI-PROJECT #4"
3. What is an Application Testing Program? This came out of nowhere.

4. Line 3 of the "SOCIAL SECURITY BENEFITS WORKSHEET" needs lines 1, 2b, 3b, 3c, and 4b from Form 1040, which we do not have.

"Enter the total amount from box 5 of all your Forms SSA-1099"

We don't have those forms.

My questions answer itself.

As far as I can tell, we need SSB, wages, taxableInterest, ordinaryDividends.

It still lacks ____, and I don't know in what order they occur in the example file you gave us.

I'm struggling to create an instance of an InputData_BO object using the constructor to populate its elements. I have to pass my file name into the member function, but how can I do that?

Please be professional.