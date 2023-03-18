**Set up VS Community Environment for Integrated Terminal**

- **Lecture 3.**
- [X] Install Whack Whack Terminal

`Tools > Extensions and Updates`

**- [X] **[View Terminal](http://hermit.no/adding-a-terminal-window-to-visual-studio-2017/)

`View > Other Windows > Terminal Window`

- [X] Change startup shortcut

```
Tools > Options > Environment > Keyboard > View.TerminalWindow

Shortcuts for selected command: Ctrl+\, Ctrl+\ (Global)
Use new shortcut in: Global
Press shortcut keys: Ctrl+`
```

- [ ] Get Visual Studio to [USE the terminal](https://www.youtube.com/watch?v=S0FLelvzAIE&t=38m58s):
- [ ] Use a break-point at "return 0;" to prevent the command prompt from closing before it gives you the result.
- [ ] Run from terminal

`g++ -o main main.cpp`

**Mini-Project #1**

- [X] (1) Create a Function for Calculating the Tax Due that uses the 2018 Tax Table Worksheet. [see [2018 TAX TABLE for Calculating Tax Due](https://collin.instructure.com/courses/835832/files/57711504?module_item_id=15369669)]

[main.cpp](../_resources/main.cpp)[functions.h](../_resources/functions.h)[functions.cpp](../_resources/functions.cpp)

- [X] (2) Create a Function for Calculating the Tax Due for Qualified Dividends and income and/or Lomg-Term Capital Gains. [see [QUAL DIV & CAP GAIN TAX WORKSHEET](https://collin.instructure.com/courses/835832/files/57710649?module_item_id=15369230). [2018 Long Term Capital Gain Rates](https://collin.instructure.com/courses/835832/files/57711518?module_item_id=15369672)]

- [ ] (3) Create a Function to Populate FORM 1040 LINE 11a. [see [LINE 11a DISPLAY](https://collin.instructure.com/courses/835832/files/57711436?module_item_id=15369647)]

- [ ] (4) Create a Function to Certify the outcomes of the "Function for Calculating the Tax Due for Qualified Dividends and income and/or Long-Term Capital Gains". This Function should produce a [line-by-line listing of the outcomes](https://collin.instructure.com/courses/835832/files/57713352?module_item_id=15370330) of the "Qualified Dividends and Capital Gain Tax Worksheet" and LINE 27. Verify Tax on all taxable income matches the outcome from the Function to Populate FORM 1040 LINE 11a.

- [ ] (5) Demonstrate Test Cases described in file: "TEST CASES for MINI-PROJECT # 3"