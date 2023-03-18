Every time I run regression I get errors. Different errors than the last time I ran it. And to change it, I have to change something in 80 different places. And not all 80 places have the same error. So I have to find out what's wrong with the script. It takes at least half a day every time.

And then to check if I have the most recent version I have to open up the QA_Automation_Scripts in Intellij, pull, and if there are any changes I can't tell where they were because it's one giant XML that's too big for git to show the differences, because the date modified is changes in 1000+ places.

Running regression is an all day effort. You have to

- wait for TerminalAPI issues to be resolved internally,
- troubleshoot dozens of broken tests
- consult what specific Sabre errors mean
- Make sure selected seats are available in Green Screen
- Make sure old seats are correct

-