- **Sundry Tasks**
- [X] Deliver PCIe x1 to post office
- [X] Register for classes
- [X] Pay for classes
- [X] Tidy hallway
- [X] Download Android Studio
- [X] Download BluStacks
- [X] Download List Plus Unlock Key from Google Play Library and link to cloud sync
- [X] Start trimming

- **Work Tasks**
- [ ] Prerequisite: [React JS Crash Course - YouTube](https://www.youtube.com/watch?v=A71aqufiNtQ)
- [ ] Course 1: [Learning React.js [1] - An Overview - YouTube](https://www.youtube.com/watch?v=vYldnghykaU&list=PLillGF-RfqbbKWfm3Y_RF57dNGsHnkYqO)
- [ ] Course 2: [Full Stack React & LoopBack [1] - Intro & LoopBack Server - YouTube](https://www.youtube.com/watch?v=Mx-cywTNy8s&list=PLillGF-RfqbZjJBAu0sx_0SCuFdzdx4iY)
- Prerequisite: [LoopBack REST API with Authentication](https://www.youtube.com/watch?v=UTxhKZuVaG8)
- [ ] Course 3: [Learning Flux and React.js - Part 1 - YouTube](https://www.youtube.com/watch?v=LCaH1siSzW4&list=PLillGF-RfqbaevC84ezBcmlfR54H9RaUr)

- **LoopBack REST API with Authentication**
- [X] Install loopback globally

`npm install -g loopback-cli`

- [X] Create a new application

`lb`

- [ ] Link mongoDB path with --dbpath variable

`"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"`

- [X] Make sure mongoDB is running (Issue the following command to start mongod:

```
cd A:\xampp\mongoDB\bin
.\mongo
```

- [X] Install database connector

`npm install --save loopback-connector-mongodb`

- [X] Install datasource

```
==lb datasource mongoDS --connector mongoDB==
...
? Enter the datasource name: ==mongoDS==
? Select the connector for mongoDS: ==MongoDB== (supported by StrongLoop)

? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):

? host: ==localhost==
? port: ==27017==
? user:
? password: [hidden]
? database: ==meetupz==
```

- [X] Configure datasource.json

```
{
"db": {
"host": "localhost",
"port": 27017,
"url": "",
"database": "meetupz",
"password": "",
"name": "mongoDS",
"user": "",
"connector": "mongodb"
}
}
```

- [X] Create model schema

```
lb model
...
meetup

PS A:\xampp\htdocs\node.js\meetupz> ==lb model==
? Enter the model name: ==meetup==
? Select the datasource to attach meetup to: db (mongodb)
? Select model's base class PersistedModel
? Expose meetup via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? common
Let's add some meetup properties now.

Enter an empty property name when done.
? Property name: name
? Property type: string
? Required? Yes
? Default value[leave blank for none]:

Let's add another meetup property.
Enter an empty property name when done.
? Property name: city
? Property type: string
? Required? Yes
? Default value[leave blank for none]:
```

- [X] Start server

`node .`

- [X] Add document in meetup database from /explorer > post /meetups to test it's connection to mongoDB

```
{
"name":"React Meetup",
"city":"Wylie"
}
```

- [X] Add authentication to post requests

```
PS A:\xampp\htdocs\node.js\meetupz> ==lb acl==
? Select the model to apply the ACL entry to: (all existing models)
? Select the ACL scope: All methods and properties
? Select the access type: All (match all types)
? Select the role ==Any unauthenticated user==
? Select the permission to apply ==Explicitly deny access==
```

- [X] Create user (POST /Users)

```
{
"email":"ethan.romans5.8@gmail.com",
"password":"123456"
}
```

- [X] Log in (POST /Users/login)

```
{
"email":"ethan.romans5.8@gmail.com",
"password":"123456"
}
```

- [X] Use "id" parameter as access Token

`"id":"VnWUNfzwxHXx0oE4GCBKIHuZpUCGZAGQuRuYiD9OExlvdTgMSciUjd6QKnKBbVEn"`

- [X] Test authorized access at GET /Users
- [X] Delete authentication permissions in \common\models\meetup.json

```
"acls": [
{
=="accessType": "*",==
=="principalType": "ROLE",==
=="principalId": "$unauthenticated",==
=="permission": "DENY"==
}
```

- [X] Redo authentication setup

```
PS A:\xampp\htdocs\node.js\meetupz> ==lb acl==
? Select the model to apply the ACL entry to: ==meetup==
? Select the ACL scope: All methods and properties
? Select the access type: ==Write==
? Select the role Any ==unauthenticated user==
? Select the permission to apply ==Explicitly deny access==
```

- [X] Log in (POST /Users/login)

```
{
"email":"[ethan.romans5.8@gmail.com](mailto:ethan.romans5.8@gmail.com)",
"password":"123456"
}
```

- [X] Add another meetup

```
{
"name":"Angular Meetup",
"city":"Garland"
}
```

- [X] View database array at http://localhost:3000/api/meetups