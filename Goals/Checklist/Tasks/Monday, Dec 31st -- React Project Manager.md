- **Sundry Tasks**
- [X] Determine how to schedule an appointment with Collin College admissions online
- It's called [CougarQ](http://www.collin.edu/gettingstarted/CougarQ.html) (like a queuing line -- "Returning Students" admissions closes at 4:30PM)
- [Spring Creek](https://kiosk.qless.com/kiosk/app/home/21842) CougarQ is currently closed
- [ ] Check when signup deadlines are
- [X] De-confirm eye appointment on the 2nd
- [ ] Find salsa tutorials
- [X] Find password for Collin College family accounts
- only [one account](https://apply.collin.edu/AxiomWeb_PROD/Login.aspx?SourceID=4) is needed for families sharing an email address.
- many.millers has no account

- **Work Tasks**
- [ ] Prerequisite: [React JS Crash Course](https://www.youtube.com/watch?v=A71aqufiNtQ)
- [ ] Course 1: [Learning React.js [1] - An Overview](https://www.youtube.com/watch?v=vYldnghykaU&list=PLillGF-RfqbbKWfm3Y_RF57dNGsHnkYqO)
- [ ] Course 2: [Full Stack React & LoopBack [1] - Intro & LoopBack Server](https://www.youtube.com/watch?v=Mx-cywTNy8s&list=PLillGF-RfqbZjJBAu0sx_0SCuFdzdx4iY)
- Prerequisite: [LoopBack REST API with Authentication](https://www.youtube.com/watch?v=UTxhKZuVaG8)
- [ ] Course 3: [Learning Flux and React.js - Part 1](https://www.youtube.com/watch?v=LCaH1siSzW4&list=PLillGF-RfqbaevC84ezBcmlfR54H9RaUr)

[- [ ] ](https://www.youtube.com/watch?v=LCaH1siSzW4&list=PLillGF-RfqbaevC84ezBcmlfR54H9RaUr)Course 4: [REACT JS TUTORIAL #1 - Reactjs Javascript Introduction & Workspace Setup](https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)

- **Learning React.js [1] - An Overview**

JSX is like SASS for JavaScript. It's using JavaScript to manipulate the DOM (add and remove HTML elements), and it requires a lot less code than using vanilla JavaScript.

`<script type="text/babel">`

- **Learning React.js [2] - Your First Component**

`Uncaught TypeError: Cannot read property 'keys' of undefined`

- [ ] Course 2: [Full Stack React & LoopBack [1] - Intro & LoopBack Server](https://www.youtube.com/watch?v=Mx-cywTNy8s&list=PLillGF-RfqbZjJBAu0sx_0SCuFdzdx4iY)

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
lb datasource mongoDS --connector mongoDB
...
? Enter the datasource name: mongoDS
? Select the connector for mongoDS: MongoDB (supported by StrongLoop)

? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):

? host: localhost
? port: 27017
? user:
? password: [hidden]
? database: meetupz
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
```

- [ ] Start server

`node .`