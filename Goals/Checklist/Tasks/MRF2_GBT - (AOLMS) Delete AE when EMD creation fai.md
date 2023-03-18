If EMD purchase fails go in and clean up already created AE's for the failed EMDs.

TT - When an emd purch fails AEs for tthat EMD are deleted
TT - If the transaction retries 3 times the AE should be deleted after that

TT - When the E?MD MS is taken down, the EMD create will fail and it will retry 3 times and the AE will be deleted.

TT - A Return response is returned to FOL

- Create new route for Delete AE
- Create camel processor for delete AE
- Create Client code to call Delete AE operation

- AE Delete Processor
- Client code
- Req / Res helpers
- Unit tests

How are we notified when EMD creation failed? (Ie is an exception raised, or do we get a response from MSD MS?)

Is there a way I can produce this error using ReadyAPI?
Are we thinking about deleting the ae in the msd-route.xml?
Where is EMD creation taking place inside of AOLMS?