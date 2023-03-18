- **Sundry Tasks**
- [ ] Organize Clothes in Boxes and pack away in the attic
- [ ] Tailor black suit pants
- [ ] Tailor black Italian suit pants
- [ ] Tailor gray suit pants
- [ ] Dust Hallway
- [X] Convert DVD's to digital format
- [ ] Handle rust on carpet

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

- **Full Stack React & LoopBack [2] - React,**  [Routing and UI](https://www.youtube.com/watch?v=idvCKXXFGs4)
- [X] Create client-src folder in project root directory

This folder is for development, and it will be compiled into the client folder when we're done.

- [X] Install create-react-app cli globally

`npm install -g create-react-app`

- [X] Create React with create-react-app cli in the current directory

`create-react-app .`

- [X] Troubleshoot message

```
> client_src@0.1.0 start A:\xampp\htdocs\node.js\meetupz\client_src
> react-scripts start

There might be a problem with the project dependency tree.

It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

  "eslint": "5.12.0"

Don't try to install it manually: your package manager does it automatically.
However, a different version of eslint was detected higher up in the tree:

  A:\xampp\htdocs\node.js\meetupz\node_modules\eslint (version: 3.19.0)

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.

That will permanently disable this message but you might encounter other issues.

To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.

  2. Delete node_modules in your project folder.

  3. Remove "eslint" from dependencies and/or devDependencies in the package.json file in your project folder.

  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.

     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if A:\xampp\htdocs\node.js\meetupz\node_modules\==eslint is outside your project directory==.

     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls eslint in your project folder.

     This will tell you which other package (apart from the expected react-scripts) installed eslint.

If nothing else helps, ==add SKIP_PREFLIGHT_CHECK=true to an .env file in your project==.

That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! client_src@0.1.0 start: `react-scripts start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the client_src@0.1.0 start script.

npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:

npm ERR!     C:\Users\ethan\AppData\Roaming\npm-cache\_logs\2019-03-12T20_44_02_817Z-debug.log

```

- Delete contents of client_src
- Recreate app
- Move client_src outside meetupz folder -- it runs
- delete parent directory node_modules -- it runs
- restore parent directory node_modules, delete eslint from node_modules in parent directory. (it is replaced by eslint-config-loopback)
- i've finally fixed it by creating a file named ".env" and adding SKIP_PREFLIGHT_CHECK=true to it inside de client_src directory
- [X] Remove eslint from parent directory's node_modules folder.

- [X] Tell React to start its dev server on Port 3001 in the client_src package.json

```
add "set port =3001 && " to start script

"scripts": {
"start": "==set port =3001 &&== react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},
```

- [X] Start a react development server

`npm start`

- [X] Do a little cleanup
- Delete logo.svg
- Remove *import './index.css';* from line 3 in index.js
- Delete index.css
- Clear everything out of App.css
- Remove *import logo from './logo.svg'; *from line 2 in App.js
- Remove everything inside the first div in App.js (lines 8-14)
- Remove classname from the div in App.js
- [X] Add header to react app (for testing)

`<h1>My App</h1>`
Rewrite react app

```
import React from 'react';
import './App.css';

const App = () => (
   <div>
     <h1>My App</h1>
   </div>
)

export default App;
```

- [ ] Make Emmet compatible with JS files

`"emmet.syntaxProfiles": { "javascript": "html" }`

- [X] Close dev server with Ctrl+C
- [ ] Install react-router and

`npm install --save react-router react-router-dom`

- [ ] Create Main.js in src/components

```
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetups from './Meetups';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Meetups} />
      <Route exact path='/about' component={About} />
    </Switch>
  </main>
)

export default Main;
```

- [ ] Create Meetups.js in src/components

```
import React, { Component } from 'react';

class Meetups extends Component{
  render(){
    return(
      <div>
        <h1>Meetups</h1>
      </div>
    )
  }
}

export default Meetupsp;
```

- [ ] Create About.js in src/components

```
import React from 'react';

const About = () => (
   <div>
     <h1>About</h1>
   </div>
)

export default About;
```