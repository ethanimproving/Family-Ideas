- **Sundry Tasks**
- [X] Finish trimming

- **Work Tasks**
- [ ] Prerequisite: [React JS Crash Course - YouTube](https://www.youtube.com/watch?v=A71aqufiNtQ)
- [ ] Course 1: [Learning React.js [1] - An Overview - YouTube](https://www.youtube.com/watch?v=vYldnghykaU&list=PLillGF-RfqbbKWfm3Y_RF57dNGsHnkYqO)
- [ ] Course 2: [Full Stack React & LoopBack [1] - Intro & LoopBack Server - YouTube](https://www.youtube.com/watch?v=Mx-cywTNy8s&list=PLillGF-RfqbZjJBAu0sx_0SCuFdzdx4iY)
- Prerequisite: [LoopBack REST API with Authentication](https://www.youtube.com/watch?v=UTxhKZuVaG8)
- [ ] Course 3: [Learning Flux and React.js - Part 1 - YouTube](https://www.youtube.com/watch?v=LCaH1siSzW4&list=PLillGF-RfqbaevC84ezBcmlfR54H9RaUr)

[- [ ] ](https://www.youtube.com/watch?v=LCaH1siSzW4&list=PLillGF-RfqbaevC84ezBcmlfR54H9RaUr)Course 4: [Learn The MERN Stack [1] - Series Introduction - YouTube](https://www.youtube.com/watch?v=PBTYxXADG_k)

- **Full Stack React & LoopBack [1] - Intro & LoopBack Server**
- [X] Make sure loopback is installed globally

`npm install -g loopback-cli`

- [X] Create application

`lb`

- [X] cd into project directory
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
? database: ==meetupz-app==
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
? Enter the model name: ==meetups==
? Select the datasource to attach meetup to: db (mongodb)
? Select model's base class PersistedModel
? Expose meetup via the REST API? ==Yes==
? Custom plural form (used to build REST URL):
? Common model or server only? common
Let's add some meetup properties now.
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

- **Full Stack React & LoopBack [2] - React, [Routing and UI](https://www.youtube.com/watch?v=idvCKXXFGs4)**
- [X] Create client-src folder in project root directory

This folder is for development, and it will be compiled into the client folder when we're done.

- [X] Install create-react-app cli globally

`npm install -g create-react-app`

- [X] Create React with create-react-app cli in the current directory

`create-react-app .`

- [ ] Tell React to start its dev server on Port 3001 in the client_src package.json

``