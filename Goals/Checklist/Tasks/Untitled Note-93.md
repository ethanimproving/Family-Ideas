- [ ] Update persistence credentials in the YML file for iTKTSCloud

Run server:

```
java -jar target/itkts-1.3.2-SNAPSHOT.jar
java -Dspring.profiles.active=local -jar target\itkts-1.3.2-SNAPSHOT.jar
```

Run > Edit Configurations > VM Options: -Dspring.profiles.active=qa

Local Endpoint:
`localhost:8080/eTDSFulfillmentService/R4`