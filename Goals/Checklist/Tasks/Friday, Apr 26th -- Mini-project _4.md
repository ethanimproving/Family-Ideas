(1)  Header File to declare program constants.

```
void readFile()
{
       // Variable to hold filename.
       string filename;
       // Build an object to work with files.
       ifstream openFile;
       // Get filename input from user and store in variable.
       cin >> filename;
       // Open filename file.
       openFile.open(filename);
       // If user input isn't an existing file, exit the program.
       if (!openFile.is_open())
       {
              exit(EXIT_FAILURE);
       }
       // Declare variable to store the values in filename.
       char word[50];
       openFile >> word;
       // Display each word in file and put a space in between.
       while (openFile.good())
       {
              cout << word << " ";
              openFile >> word;
       }
}
```