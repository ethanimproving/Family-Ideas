**Work Tasks**

- **Focus of research**
- [ ] Collect verses from 1 chapter in John Piper's book about the gospel achievement
- [ ] Review 1 session of William Lane Craig's series "The Work Of Christ"
- [ ] Look up Passion sermon where John Piper says it's impossible to please God without believing that he rewards us.

- **Ambitions**

1. Create another node.js server from scratch with separate "Published by User" / "Resource by Author" fields, "Create Account" from Sign In page, and more.

2. Learn React or Angular
3. Convert video page to node.js

- **node.js server with MongoDB tunneled through ngrok **
- [X] Determine new website name (DoctrineCoalition)

1. Create package.json
2. Install express framework
3. Setup server in app.js
    1. Require (access) express module
    2. Initiate app variable (to call the express() function that creates apps)
    3. Create a home route application
    4. Call the create app variable with a port listener
4. Install pug
5. Create layout.pug view for every view to use
6. Create index.pug view for home route to render
7. Load 'Views' Engine in app.js
8. Load Bootstrap and jQuery in layout.pug
9. Create public folder and add / load custom js and css
10. Set public folder directory in app.js

11. Add 'articles.js' router and 'add_article.pug' view (Resource Date, Upload Date, Resource Author, Upload User)

12. Create doctrinecoalition in the MongoDB shell
13. Add collections (articles, sermons, etc.)
14. Install mongoose

15. Require mongoose in app.js, connect desired database, and check for connection / database errors

16. Create content creation models ('add resource' data intermediary between mongoose and the app) and link to them in app.js

17. Link to MongoDB articles collection on the home route

18. Install  [body-parser](https://github.com/expressjs/body-parser)  to project

19. Require body-parser in app.js and include middleware
20. Handle requests from articles page
    1. Handle GET request to load 'add_article' page
    2. Handle POST requests from the 'add article' page

        - Route POST requests from /articles/add form to save a new Article()  array entry (article.js model that handles MongoDB's article collection in the doctrinecoalition database)
        - Bring in models to post to

    3. Handle GET requests to load the Edit form
    4. Handle POST requests from the edit form
    5. Handle DELETE requests from particular article IDs
        1. Add ajax event listener to .delete-article button click
        2. Control access to delete / edit buttons
    6. Handle GET requests to load single articles by their IDs

    7. Use access control to ensure non-owners cannot delete or modify articles, and non-users cannot add or edit articles.

21. Handle GET requests from homepage to load articles (lump in articles.js route)

22. Set up user registration
    1. Install Passport and bcrypt to project

    2. Create user.js model, users.js route, register.pug view, and login,pug view

    3. Link users.js route to app.js and import passport in app.js
    4. Add register / login link to navbar in layout.pug

    5. Create database.js and [passport.js](http://www.passportjs.org/docs/username-password/) and import the database file in app.js

    6. Add configuration and middleware

1. Install npm messaging modules
    1. express-messages
    2. express-session
    3. connect-flash
    4. express-validator
2. Require modules in app.js
3. Add module middleware
4. Create message.pug view

**Q:** How do routes, views, models, node modules, package.json, and the app.js entry point relate to each other?

**A:** The **app.js** collects all of the written code together and renders the webpage from a server. It takes all of the technology and pushes it through the server. It is responsible for bringing in the *node modules*, the *database*, *models*, *views*, required *middleware*, *routes*, and starting the *server*.

**Views** provide the HTML templates that will be accessed by the routers to render a webpage upon user request. This way, instead of there being 20,000 separate HTML files for all the articles, the app simply uses the views to render an HTML page and populates article-specific fields with data from the database.

**Routes** handle requests from users (GET, POST, UPDATE, DELETE) from defined webpage links (/article/add, for example).

A *get* request from /article/add will be handled by a route, responding by *rendering the requested webpage* (view).

A *post* request from /article/add will respond by *saving the data* from defined input fields to the model that talks to whichever collection the data needs to be submitted to.

An *update* request from /article/edit/:id will query the database model for the particular array of interest and change the data to match whatever fields are linked to them.

A *delete* request from /article/:id will query the database collection model and remove the array of data that's being requested.

It's common to have separate route files for every major branch off the tree (domain.com/articles, domain.com/users, etc). Routers handle requests from defined routes (links, directories). express.Router() forwards the request to our route handler, and our handler responds with some action. (How does express know which buttons are submitting a post request? Because the .pug input element has type and value defined as "submit")

**Models** take information from route exports and stores it in MongoDB. Models are responsible for *creating and reading* documents from the underlying MongoDB database. Mongoose is an object data modeling (ODM) library.

In relational databases, a *Schema* defines something like B3 as the second row over and third row down. Mongoose provides a schema to the non-schemed collection (of arrays) stored in MongoDB for better structure by defining parameters like datatype (string, integer, etc), required (true, false), etc.

Models are defined by passing a Schema instance to mongoose.model.

**package.json** contains information about the app, including author, entry point, and dependencies.

**Node Modules** are technologies that have predefined functions and code built into them that are accessible through importation. Many modules require middleware to make it available.

Learn Angular  [Date-picker](https://material.angular.io/components/datepicker/overview)

**Daily Tasks**

- [X] Vacuum room
- [X] Trim beard
- [ ] Look up where to park when canvassing
- [ ] Practice soul-winning  presentation***
- [ ] Call Michael Byrd