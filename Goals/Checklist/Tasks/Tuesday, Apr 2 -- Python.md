[Lab 4](file:///A:/Users/Ethan/OneDrive%20for%20Business/Documents/Academic%20Documents/Spring%202019/ITSE%201359%20(Python)/Week%208/Lab04.pdf)**: **Introduction To Scripting Language – Python

- **Exercise 1.**
- [X] Crea

There was an error where id was not identical with id_. Make sure they're the same.

- [X] Failed attempts at retrieving column names

```

# Select the column names from table.

cursor.execute(f'''
  SELECT sql
  FROM sqlite_master
  WHERE tbl_name = '{table[0]}' AND type = 'table';
''')
columns = cursor.fetchall()
print(columns[0][0])

# Get the column names

cur = db.execute(f'select * from {table[0]}')

row = cur.fetchone()

# names  = row.keys()

print(f"Names are: {row}")
```