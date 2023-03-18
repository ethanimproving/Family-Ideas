Dashboard

Fixed bug
[FORMAT.md](about:blank)
patch issue with global variables in Excel
remove vlookup for mutable values (formulas)

remove constants

I have isolated the bug. Any time a names reference is used INSIDE code, it recalculates when a new workbook is opened and crashed on the names reference.

```

Function SumByStrategy(strategy As String, range_to_sum As Range, ==tradeOrderRange As Range==, sum_profits As Boolean) <------------ Soluition is to add as parameter instead.

    On Error GoTo ErrorHandl
    Dim tradeOrderRange As Range

==    Set tradeOrderRange = Range("Option_Data") <----------- Code flips out here==

    Dim cell As Range
    Total = 0
    Index = 1
    For Each cell In range_to_sum
        On Error Resume Next

        If strategy = GetStrategy(tradeOrderRange(Index).Value) And IIf(sum_profits, cell.Value > 0, cell.Value < 0) Then

            Total = Total + cell.Value
        End If
        Index = Index + 1
    Next cell
    SumByStrategy = Total
    Exit Function
ErrorHandl:
    SumByStrategy = ""
End Function
```