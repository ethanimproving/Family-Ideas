- **Sundry Tasks**
- [X] Wash sheets
- [X] Reply to eBay messages
- [X] Reply to Facebook messages

- **SQL**

- **Software Setup**

**- [X] **[Download](https://www.microsoft.com/en-us/download/details.aspx?id=55994) Microsoft® SQL Server® 2017 Express

- [X] Run the SQLServer2017-SSEI-Expr.exe file and select "**Download Media**"
- [X] Choose **Express Advanced** (~ 0.7GB)
- [X]  Run SQLEXPRADV_x64_ENU.exe
- [X] Extract the files in the same directory

- [X] Select New SQL Server stand-alone installation or add features to an existing installation
- [X] Accept the licence terms
- [X] Go through the rule check (Don't worry about the Windows Firewall warning)
- Note: If your executable file path exceeds 260 characters, "Long path names to files on SQL Server installation media" will fail. Move to downloads folder.
- [X] Select default Instance Features and Shared Features
- [X] Named instance: SQLExpress
- [X] Instance ID: SQLExpress
- [X] Set SQL Server Database Engine to Manual
- [X] Grant Perform VOlume Maintenance Task privilege to SQL Server Database Engine Service
- [X] Choose Mixed Mode authentication
- [ ] Password for school: Blu3Sk1e
- [ ] Password for home: Genesis 14:18

- [X] [Download](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017) and install SQL Server Management Studio (SSMS)
- Download SQL Server Management Studio 17.9.1*
- [X] Pin the app to start and run it
- [X] Make sure SQL service is running
- [X] Connect with Windows Authentication (if the administrator has a password to get into the computer, that's secure enough, essentially)
- [X] Open Security tab > open Logins > Right click Logins > New Login > emiller25
- [X] SQL Server authentication
- [X] Check 'Enforce password policy'
- [X] Uncheck 'Enforce password expiration'

- [X] Right-click on Databases > New Database > scratch_DB
- [X] Set Owner to emiller25

- [X] Under Logins, right-click emiller25 > Properties > Default database: scratch_DB

- [ ] Create New Query

```
USE scratch_DB;

CREATE TABLE test
(
    f1    INTEGER,
    f2    CHAR(2)
);
```

- [X] Execute code

- [X] Turn Line Numbers on

`Tools > Options > Text Editor > All Languages > General > Line Numbers`

- [X] Get in the habit of turning off SQL Server (SQLEXPRESS) when not in use
- [X] Close folders and click refresh to see them appear in the Object Exploerer
- [X] Look at Tables in Designer View (Graphical User Interface, or GUI)

`Right-click Table > Design`

- [X] Add New Diagram

- [X] Create a shortcut to start SQL Server (SQLEXPRESS)

```
Right-click desktop > New > Shortcut
Target: C:\Windows\System32\cmd.exe /c "net start "MSSQL$SQLEXPRESS"
```

- [X] Create a shortcut to stop SQL Server (SQLEXPRESS)

```
Right-click desktop > New > Shortcut
Target: C:\Windows\System32\cmd.exe /c "net stop "MSSQL$SQLEXPRESS"
```

- [X] Add admin privileges

`Right-click shortcut > "Shortcut" tab > Advanced > Run as administrator`