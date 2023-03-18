Use terminal inside the IDE:

- [X] Tools > Extensions & Updates > Online > Whack Whack Terminal
- Hot Commands
- Hot Settings
- Hot Windows
- Keyboard Shortcuts Manager
- Hot Keys
- SublimeVS

- [ ] Tools > External Tools > Add
- [ ] Title: Terminal (or name it yourself)
- [ ] Command=cmd.exe Or Command=powershell.exe
- [ ] Arguments= /k
- [ ] Initial Directory=$(ProjectDir)

**Keyboard Shortcuts:**

`Edit.InsertNextMatchingCaret : Ctrl+D (Was Edit.GoToFindCombo)`

- [ ] SQL Execute Code

```
SQL.TSqlEditorExecuteQuery

Use new shortcut in: Microsoft SQL Server Data Tools, T-SQL Editor
Press shortcut keys: F5
Shortcut Currently used by: {refreshDOM?}
```

- [X] Enable word wrap

`Tools | Options | Text Editor | All Languages and select the "Word wrap"`

- [ ] Use [multiple cursors](https://stackoverflow.com/questions/16495727/multiple-select-in-visual-studio)

`Tools > Extensions & Updates > Online > Select Next Occurrence`

- [X] Assign Keyboard Shortcuts for [Select Next Occurrence](https://marketplace.visualstudio.com/items?itemName=thomaswelen.SelectNextOccurrence) extension

```
**SelectNextOccurrence.SelectNextOccurrence**

Use new shortcut in: Text Editor
Press shortcut keys: ==Ctrl+D==

**SelectNextOccurrence.SkipOccurrence**

Use new shortcut in: Text Editor
Press shortcut keys: ==Ctrl+K, Ctrl+D==
```

|     |     |
| --- | --- |
| **Command (prefix SelectNextOccurrence.)** | **Recommendation** |
| SelectNextOccurrence | Ctrl+D |
| SelectNextExactOccurrence |     |
| SelectPreviousOccurrence | Ctrl+E |
| SelectPreviousExactOccurrence |     |
| SelectAllOccurrences | Ctrl+Shift+A |
| SkipOccurrence | Ctrl+K, Ctrl+D |
| UndoOccurrence | Ctrl+U |
| AddCaretAbove | Ctrl+Alt+Up |
| AddCaretBelow | Ctrl+Alt+Down |
| ConvertSelectionToMultipleCursors | Ctrl+Shift+I or Alt+Shift+I (vscode)) |

Nothing happens when ALT + left-clicking mouse button to add new caret, multiple edits are unresponsive

There is a possibility that other plugins use this functionality too, and a conflict occurs. Please check for other installed plugins with this feature and try to disable. CAVEAT: You have to click and drag, not double click.

- [ ] Use [multiple selection](http://www.codinglabs.net/MixEdit.aspx)

`Tools > Extensions & Updates > Online > MixEdit > Multi Edit Mode`

- [X] Highlight all occurrences of selected word

```

Tools > Extensions & Updates > Online > Highlight all occurrences of selected word++

Edit > Selection Highlighter++ > Change Highlight Color > Dark Gray

120 240 30
```