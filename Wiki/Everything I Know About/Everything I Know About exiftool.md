# Add "Media created" Tag

1. **Open PowerShell**: Open PowerShell by pressing `Win + X`, then selecting `Windows PowerShell` or `Windows PowerShell (Admin)`.

2. **Check if `$PROFILE` exists**: Check if the profile file exists by typing:

```powershell
Test-Path $PROFILE
```

If it returns `False`, the profile file does not exist and you need to create it.

3. **Create the `$PROFILE` file**: Create the profile file by typing:
```powershell
New-Item -Path $PROFILE -Type File -Force
```

This command creates the profile file at the path specified by `$PROFILE`.

4. **Open the `$PROFILE` file in Notepad**: Open the newly created profile file in Notepad:
```powershell
notepad $PROFILE
```

5. **Add the Function to Your Profile**:

Paste the following code into the Notepad window that opens:

```powershell
function Update-MP4Dates {
    # Regular expression pattern to match the date and AM/PM in the filename
    $datePattern = "^\d{3} - (\d{2}-\d{2}-\d{4}) (AM|PM) - .*"

    # Iterate over each MP4 file in the current directory
    Get-ChildItem -File -Filter *.mp4 | ForEach-Object {
        $filename = $_.Name
        if ($filename -match $datePattern) {
            $dateString = $matches[1]
            $timeOfDay = $matches[2]

            # Parse the date string
            $date = [datetime]::ParseExact($dateString, "MM-dd-yyyy", $null)

            # Set the time based on AM/PM
            if ($timeOfDay -eq "AM") {
                $date = $date.AddHours(16).AddMinutes(30)  # Set time to 10:30 AM
            } elseif ($timeOfDay -eq "PM") {
                $date = $date.AddHours(24)  # Set time to 6:00 PM
            }

            # Format the date as required by exiftool
            $newDate = $date.ToString("yyyy:MM:dd HH:mm:ss")

            # Update the media created date using exiftool
            exiftool -AllDates="$newDate" -overwrite_original $_.FullName
            Write-Output "Updated $filename to $newDate"
        } else {
            Write-Output "Skipped $filename - No matching date found"
        }
    }
}

# Create an alias for the function
Set-Alias UpdateDates Update-MP4Dates
```

6. **Save and Close Notepad**: Save the changes and close Notepad.

7. **Reload Your Profile**:

After saving the file, reload your PowerShell profile to apply the changes:
```powershell
. $PROFILE
```

### Using the Alias

Now, you can navigate to any directory containing your MP4 files and run the function by simply typing the alias `UpdateDates`:

```powershell
cd C:\path\to\your\directory
UpdateDates
```

This setup allows you to update the "Media created" dates of MP4 files in the current directory by extracting the date from the filename, making it convenient to use from any location within PowerShell.

![](https://i.imgur.com/ghe9L4c.png)
