**Work Tasks**

- **Time sheet**
- [X] 6 1/2 Hours Coding
- [ ] 1 hour practicing soul-winning (with Faith?)

- **Visual Studio Code**

**- [X] **Download and setup Visual Studio Code Editor

- [Visual Studio Code Intro & Setup - YouTube](https://www.youtube.com/watch?v=fnPhJHN0jTE)
- [Documentation for Visual Studio Code](https://code.visualstudio.com/docs?start=true)

- **Parcel Application Bundler**
- [X] Install Parcel Bundler globally

`npm install -g parcel-bundler`

- [X] Create package.json

`npm init`

- [X] Create index.html and index.js entry point
- [X] Compile and run a dev server (local server for developers)

`parcel index.html`

- [X] Bring in jokes.js module functions into index.js entry point

`const jokes = require('./jokes');`

- [X] Install and import jquery in VanillaJS syntax (translate from ES6 syntax)

```
import $ from 'jquery';
const $ = require('jquery');
```

- [X] Troubleshoot error (replace = with +)

```

Property left of AssignmentExpression expected node to be of a type ["LVal"] but instead got "StringLiteral"

...
const copy = fs.readFileSync(__dirname ==+== '/copyright.txt',
'utf8');
```

Instead of including all of these separate script tags and separate files, you're using internal modules to create this parcel app file.

Everything in your root directory is the development files that you use to write code, but your actual compiled application is in the dist folder.

Stop Server:
`Ctrl + C`
Start Server:
`parcel index.html`

- **Parcel Application Bundler: SCSS Compiler**
- [X] Install postcss
- [GitHub - postcss-postcss- Transforming styles with JS plugins](https://github.com/postcss/postcss)

`npm install autoprefixer`

This is for cross-browser compatibility (webkit-box-pack, ms-flex-pack, etc) -- obsolete since

- [X] Install node-sass

`npm install node-sass`

- [X] Create variables.scss

- **Parcel app.js Entry Point**
- [X] Start parcel dev server on app.js entry point
- [ ] parcel with server-side html
- [ ] using javascript as the entry point for parcel

With index.html as our entry point we can't follow the MVC system of using node.js to handle GET requests on multiple webpages. I need to learn how to compile code with app.js as my entry point.

What I may have to do is link to the dist files in my app.js and across files and use nodemon to start a dev server on port 3000 when I'm not maniplulating those files, and then use parcel example-page.pug when I'm changing  client-side JavaScript or CSS.

It looks like the syntax is symply 'parcel [[entry point](https://www.youtube.com/watch?time_continue=6&v=41fyV2n4U68&t=11m55s)]', regardless of whether your entry point is app.js or index.html. Supposedly you need to use babel for React projects.

I might have to have a separate folder for every view that requires frontend work and compile it into a dist folder that I will then copy into my app. How do people use parcel in node.js apps? "Start with the entry HTML file for your application. Parcel follows the dependencies from there to build your whole app." Can I  ==use my header.pug partial as my entry HTML==?

I can run a dev server on port 1234 to compile the code at the same time that I'm running a nodemon command to port 3000. I don't actually need to view the empty pug on port 1234 for the bundler to compile the code.

"Is parcel JS made for single page apps only? Because static html files don't work."

"[Parcel](https://parceljs.org/getting_started.html) can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start."

"I'm trying to use it in an app where I have server-side rendered html, and the Javascript / CSS is served from its own endpoints via Parcel."

"I've symlinked the public directory in my express app to thedist directory that parcel outputs by default. In the Vue/parcel directory, I run parcel watch --public-url "http://localhost:3000/" index.htm and in my Express/node directory, I just run nodemon app.js as usual."

- **Website Integration**
- [ ] Convert CSS to SCSS
- [X] Structure stylesheet.css, use a naming convention, and give symbols-tree-view a try
- [ ] Structure main.js
- [ ] Learn modular JavaScript

You  ==import your modular code in main.js==, and write it in utils.js.

- [No more clientside spaghetti. Organizing your code. - Human JavaScript](http://read.humanjavascript.com/ch04-organizing-your-code.html)
- [Understanding Design Patterns in JavaScript – Bits and Pieces](https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd)
- [JavaScript Modules- A Beginner’s Guide – freeCodeCamp.org](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)
- 674: "[function(require, module, exports) {" }, {}},

- [ ]