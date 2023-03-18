**Set up VS Code Environment for C++**

- **Lecture 3.**
- [X] Install the 'C/C++' extension
- [X] Install  the 'C/C++ Clang Command Adapter' entension
- [X] Install the 'C++ Intellisense' entension
- [X] Install the 'Code Runner' enxtension

```

[Running] cd "a:\Users\Ethan\OneDrive for Business\Documents\Academic Documents\Spring 2019\COSC 1436 (C++)\Modules\Week 4 - MINI-PROJECT #1 - Feb 17\" && g++ test.cpp -o test && "a:\Users\Ethan\OneDrive for Business\Documents\Academic Documents\Spring 2019\COSC 1436 (C++)\Modules\Week 4 - MINI-PROJECT #1 - Feb 17\"test

'g++' is not recognized as an internal or external command,
operable program or batch file.

[Done] exited with code=1 in 0.042 seconds
```

- [X] Install [minGW](https://osdn.net/projects/mingw/releases/) compiler
- Agree to everything (leave it checked)
- Check all packages (Mark for installation)
- Installation > Apply Changes > Apply
- Close installer when done
- [X] Copy [A:\xampp\MinGW\bin](file:///A:/xampp/MinGW/bin) to environment variables
- Right-click 'This PC'> 'Properties' > 'Advanced system settings'
- OR search environment variables in start
- 'Environment Variables...' > 'Path' (under 'User variables for Ethan' > Edit > New > Paste Python directory
- [X] Check that MinGW is working

`g++ --version`

- [ ] Install g++
- [X] Install [clang](http://releases.llvm.org/)

`https://releases.llvm.org/7.0.1/LLVM-7.0.1-win64.exe`

- Replace version number with current version
- Select "Add to PATH for current user"
- [X] Edit following settings
- File > Preferences > Settings > Open Settings (JSON) ( [] icon )

```
"code-runner.runInTerminal":true,
"code-runner.saveFileBeforeRun": true,
"code-runner.executorMap": {

    "cpp": "cd $dir && g++ -std=c++14 $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"

}
```

- [X] Edit keyboard shortcut to F5
- File > Preferences > Keyboard Shortcuts
- Run Code (Change Ctrl + Alt + N to F5)
- [ ] Delete test.exe

- [ ] Run with [header files](https://www.youtube.com/watch?v=B0xTgyCwsAo&t=3m52s)

`Ctrl+Shift+P > Configure Default Build Task > [Select detected task]`

**Mini-Project #1**

- [X] (1) Console output display for Page 1, Form 1040 Individual Income Tax Return. ( See Exhibit A1 )

```
#include <iostream>

using namespace std;

int main()
{
  cout<<"Filing Status: _________________  { SINGLE, MARRIED }"<<endl
      <<endl
      <<"First Name:    _________________"<<endl
      <<"Last Name:     _________________"<<endl
      <<"SSN:           _________________"<<endl
      <<endl

      <<"Your Standard Deduction:     ___ You were born before January 2, 1954"<<endl

      <<"                             ___ You are blind"<<endl
      <<endl
      <<"Spouse First Name:  _____________________"<<endl
      <<"Spouse Last Name:   _____________________"<<endl
      <<"Spouse SSN:         _____________________"<<endl
      <<endl

      <<"Spouse Standard Deduction:  ___ Spouse was born before January 2, 1954"<<endl

      <<"                            ___ Spouse is blind"<<endl
      <<endl
      <<"Home Address:  ________________________________"<<endl
      <<"City:          ________________________________"<<endl
      <<"State:         ________________________________"<<endl
      <<"ZIP code:      ________________________________"<<endl;
}
```

- [X] (2) Console output display for Page 2, Form 1040 Individual Income Tax Return. ( See Exhibit A2 )

```
#include <iostream>

using namespace std;

int main()
{

  cout<<"1  Wages ....................................................... _________"<<endl

      <<"2a Tax-Exempt Interest ............................... _________"<<endl

      <<"2b Taxable Interest ............................................ _________"<<endl

      <<"3a Qualified Dividends ............................... _________"<<endl

      <<"3b Ordinary Dividends .......................................... _________"<<endl

      <<"3c Capital Gain Distribution (or loss).......................... _________"<<endl

      <<"4a IRAs. Pensions, & Annuities ....................... _________"<<endl

      <<"4b Taxable Amount .............................................. _________"<<endl

      <<"5a Social Security Benefits .......................... _________"<<endl

      <<"5b Taxable Amount .............................................. _________"<<endl

      <<"6  Total Income [ 1+2b+3b+3c+4b+5b ] ........................... _________"<<endl

      <<"7a Adjustments to Income ....................................... _________"<<endl

      <<"7b Adjusted Gross Income (Line 6 - Line 7a) .................... _________"<<endl

      <<"8  Standard Deduction .......................................... _________"<<endl

      <<"   [Single: 12000; Married: 24000 or Standard Deduction Chart]"<<endl
      <<endl

      <<"10  Taxable Income. Line7b-Line8, if less than 0, enter 0 ...... _________"<<endl

      <<"11a Tax ........................................................ _________"<<endl

      <<"    [ from Tax Table  or  Qualified Dividends and"<<endl
      <<"      Capital Gain Tax Worksheet ]"<<endl
      <<endl

      <<"11b Alternative Minimum Tax [from  Form 6251 Line 11] .......... _________"<<endl

      <<endl

      <<"15  Total Tax. [ Line 11a + Line 11b ] ......................... _________"<<endl;

}
```

- [X] (3) Define Variables and create input code for each line(field) in EXHIBIT A1 for populating the fields.
- [X] (4) Define Variables and create input code for input lines(fields) 1 thru 3c, 6 thru 10 in EXHIBIT A2 for populating the fields.
- [ ] (5) Demonstrate your code using the test case specified.
- [X] Gather Information

1. Single
2. Amy
3. Peavey
4. 612-74-3471
5. No
6. No
7. 1310 Leeward Lane
8. Wylie
9. Texas
10. 75098
11. 51.44 (Salary of $107,000)
12. Salary 107000.00
13. Tax-Exempt Interest 125.00
14. Taxable Interest 90.00
15. Qualified Dividends 400.00
16. Ordinary Dividends 800.00
17. Capital gain .......... 7000.00
18. Adjustments ........... 9500.00 (IRA Deduction/Student Loan Interest)