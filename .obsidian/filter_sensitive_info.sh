#!/bin/bash

# Define the path to the file containing sensitive information
FILE=".obsidian/plugins/digitalgarden/data.json"

# Define the sensitive pattern you want to filter out
SENSITIVE_PATTERN="githubToken"

# Use sed to remove lines containing the sensitive pattern
sed -i "/$SENSITIVE_PATTERN/d" $FILE
