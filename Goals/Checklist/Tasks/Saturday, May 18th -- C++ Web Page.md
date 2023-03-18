- Create C++ application that gets a response back from the HTML
- [X] Launch the [Visual Studio Installer](https://superuser.com/questions/1197876/just-installed-visual-studio-community-2017-but-cannot-find-clr) and add CLI support

`Modify > Desktop Development with C++ > Desktop Development with C++ > C++/CLI Support > Modify`

- [X] Create an empty CLR project

`File > New > Project > Visual C++ > CLR > CLR Empty Project`

- [X] Set Windows SubSystem

`Right-Click {Solution Name} > Properties > Linker > System > SunSystem: Windows (/SUBSYSTEM:WINDOWS)`

- [X] Set entry point

`Advanced > Entry Point: main`

- [X] Add Windows Form

`Add > New Item > UI > Windows Form`

- [X] Add First Form Class to main

```
#include "MyForm.h"
using namespace System;
using namespace System::Windows::Forms;
[STAThreadAttribute]
int main()
{
       Application::EnableVisualStyles();

       Application::SetCompatibleTextRenderingDefault(false);       //WindowsFormApplication = solution name

       Application::Run(gcnew WindowsFormApplication::MyForm());    //MyForm = header file name

       return 0;
}
```

(Note: You may need to restart solution)

- [ ] Open MyForm.h, show Toolbox, add elements, and change the properties of those elements in the Properties window.

`Solution Properties > Common Properties > Framework and References`

- [ ] Double-Click the button that you want to trigger the submit, and place the code that you want in it.

- [ ] Create .gitignore file

```
npm install touch-cli -g
touch .gitignore
```

```
       double
       Int32 myInt = 0;
       if (System::Text::RegularExpressions::Regex::IsMatch(wages->Text,
              "^[-0-9]*.[.0-9].[0-9]*$"))
       {
              testCase.wages = Convert::ToInt32(wages->Text);
       }
       else
       {
              MessageBox::Show("Not a number");
       }
```

```
HWND GetDlgItem(
              HWND hDlg,
              int  nIDDlgItem
       );
       BOOL EnableWindow(
              HWND hWnd,
              BOOL bEnable
       );
       if (single->Checked)
       {
              //sover65.Enabled = false;
              //sover65->setCheck(1);
              //sover65->setTouchEnabled(false);
              //sover65->setEnabled(false);
              //sover65->setBright(false)
              //BOOL EnableWindow(sover65, FALSE);
              //this->sover65::EnableWindow(sover65, false);
              //this->sover65->EnableWindow(FALSE);
              //((sover65*)GetDlgItem(IDC_MY_COMBO_BOX))->EnableWindow(FALSE);
              this->sover65->Enabled = false;
       }
```

```
// Only allow 1 decimal point
       if (e->KeyChar == '.')
       {

              if (this->wages->Text->Contains(".") &&  !this->wages->SelectedText->Contains("."))

                     e->Handled = true;
       }
       // Accept only digits "." and the Backspace character
       else if (!Char::IsDigit(e->KeyChar) && e->KeyChar != 0x08)
              e->Handled = true;
```

Create New User
Select which tax to calculate (social security benefit, ect.)

Readme.md

```

This project was originally a C++ console app from my C++ college course that I turned into a Windows app.

**Entry Point
main() is in Form1040.cpp,
```

```
// Test passing values
       double dblWages;
       bool gotWages = false;
       gotWages = Double::TryParse(wages->Text, dblWages);

void diplayMessage(double);

#include "Form1040.h"

namespace IncomeTaxCalculator;
{
       System::Void diplayMessage(double wages)
       {
              using namespace System;
              using namespace System::Windows::Forms;
              using namespace IncomeTaxCalculator;
              MessageBox::Show
              (
                     "Filing status: " + wages
              );
       }
}

/.h

#include "Form1040.h"
using namespace IncomeTaxCalculator;

namespace IncomeTaxCalculator {
       void diplayMessage(double);
}

//.cpp

namespace IncomeTaxCalculator
{
       void diplayMessage(double wages)
       {
              using namespace System;
              using namespace System::Windows::Forms;
              using namespace IncomeTaxCalculator;
              MessageBox::Show
              (
                     "Filing status: " + wages
              );
       }
}
```

wstringstream to string

```
// To convert wstring to string
#include <locale>
#include <codecvt>

wstringstream  wstring_to_convert;

       wstring_to_convert << "Filing Status:            " << setw(10) << fs <<  endl;

       wstring string_to_convert = wstring_to_convert.str();
       //setup converter
       using convert_type = codecvt_utf8<wchar_t>;
       wstring_convert<convert_type, wchar_t> converter;
       //use converter (.to_bytes: wstr->str, .from_bytes: str->wstr)
       string converted_str = converter.to_bytes(string_to_convert);
```

Get system path

```
       //char buffer[MAX_PATH] = {};
       //::GetSystemDirectoryA(buffer, _countof(buffer));
       //TCHAR szEXEPath[MAX_PATH];
       //char module_name[MAX_PATH];
       ////GetModuleFileName(0, module_name, MAX_PATH);
       //GetModuleFileName(NULL, szEXEPath, MAX_PATH);
       //std::string path(module_name);
       //path.erase(path.find_last_of('\\'), std::string::npos);
       ////GetModuleFileNameA(buffer, _countof(buffer));
       ////TCHAR szEXEPath[2048];
       //char actualpath[2048];
       //GetModuleFileName(NULL, szEXEPath, 2048);

std::string path(module_name);
path.erase(path.find_last_of('\\'), std::string::npos);*/
```