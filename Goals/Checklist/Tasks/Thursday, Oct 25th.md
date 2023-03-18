**Work Tasks**

- **Focus of research**
- [ ] Collect verses from 1 chapter in John Piper's book about the gospel achievement
- [ ] Review 1 session of William Lane Craig's series "The Work Of Christ"
- [X] Find Pure Words Baptist Church website
- [X] Find Verity Baptist Church Manila website

- **node.js Tutorial Series (7-9)**
- [X] **7:**  Add "edit" button to single article.pug page

```
  hr
  a.btn.btn-default(href='/article/edit/'+article._id) Edit
```

- href goes to http://localhost:3000/article/edit/5bd0bdcdc1f329c2b6fe28a5
    - / = http://localhost:3000/
    - article/edit/ = article/edit/
    - +article._id = 5bd0bdcdc1f329c2b6fe28a5
- [X] Add route for edit link

```
// Load Edit Form
app.get('/article/edit/:id', function(req, res){
  Article.findById(req.params.id, function(err, article){
    res.**render('edit_article**', {
      title:'Edit Article',
      article:article
    });
  });
});
```

- [X] What does the  [get](https://www.youtube.com/watch?v=Ba1_zIoerp4) handlers do?

```
app.**get**(**'/'**, **function**(**req**, **res**), {
    **res.render('index')**;
});

**Get Handler**: handles GET requests from users
**First Parameter**: sets the location of a route.
**Second Parameter**: a function that accepts a request and response object.
**Request Object**: Incoming http user requests.
**Response Object**: Something you give to the user (webpage, image, data...)
**Render method**: rendering an index file located in our views folder

When a "get" request is made to the root url, we render the index file.
```

- [X] Add edit_article.pug view for new route to render

```
extends layout

block content
  h1 #{title}
  form(method='POST', action='/articles/edit/'+article._id)
    #form-group
      label Title:
      input.form-control(name='title', type='text' ==value=article.title==)
    #form-group
      label Author:
      input.form-control(name='author', type='text' ==value=article.author==)
    #form-group
      label Body:
      textarea.form-control(name='body')=== article.body==
    br
    input.btn.btn-primary(type='submit',value='Submit')
```

- [X] Handle POST (submit changes) request

```
// Update Submit POST Route
app.post('/articles/edit/:id', function(req, res){

  // rather than creating a new Article, set the current article to an empty object

  let article = =={}==;
  // Populate the emptied article with data from edit_article page
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  // Specify which article to update
 == let query = {_id:req.params.id}==

  ==A==rticle.update(query, article, function(err){
    if(err){
      console.log(err);
      return;
    } else {
      res.redirect('/')
    }
  });
});
```

- [X] Create Delete button in article.pug view

`a.btn.btn-danger.delete-article(href="#",data-id=article._id) Delete`

- [X] Create main.js and style.css, and include them in the layout.pug

```
link(rel='stylesheet' href='/css/style.css')
script(src='/js/main.js')
```

- [X] [Troubleshoot](https://getbootstrap.com/docs/4.0/components/buttons/) Boostrap btn-default missing class CSS
- [X] Make delete requests with ajax in main.js

```
$(document).ready(function(){
  $('.delete-article').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/article/'+id,
      success: function(response){
        alert('Deleting Article');
        window.location.href='/';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
```

- [X] Handle POST ajax delete requests in app.js (route it)

```
// DELETE Route
app.delete('/article/:id', function(req, res){
  let query = {_id:req.params.id}

  Article.remove(query, function(err){
    if(err){
      console.log(err);
    }
    res.send('Success')
  });
});
```

DeprecationWarnings:

collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.

collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead.

- [X] **8:** Install npm messaging modules

`npm install --save express-messages express-session connect-flash express-validator`

- [X] Require desired express modules

```
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
```

- [X] Add  [Express Session](https://github.com/expressjs/session)  Middleware

```
// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
```

- [X] Add [Express Messages](https://github.com/expressjs/express-messages) Middleware

```
// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
```

- [X] Add [Express Validator](https://github.com/express-validator/express-validator) Middleware

```
// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
```

- [X] Create message.pug view

```
.messages
  each type in Object.keys(messages)
    each message in messages[type]
      div(class="alert alert-"+type) #{message}
```

- [X] Put messages right above the block content in layout.pug

`!= messages('message', locals)`

- [X] Add success message to "add article" route home redirect

`req.flash('success', 'Article Added');`

- [X] Add br to layout.pug after navbar
- [X] Add "Article Updated" message to Update Submit POST Route with success bootstrap class

`req.flash('success', 'Article Updated');`

- [X] Add "Field Required" messages for article inputs (refer to  [documentation](https://express-validator.github.io/docs/custom-validators-sanitizers.html) for more validation options)

```
  req.checkBody('title', 'Title is required').notEmpty();
  req.checkBody('author', 'Author is required').notEmpty();
  req.checkBody('body', 'Body is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    res.render('add_article', {
      title:'Add Article',
      errors:errors
    });
  } else {

  }
```

- [X] Put the errors in the html (layout.pug)

```
if errors
        each error, i in errors
          div(class="alert alert-danger") #{error.msg}
```

- [X] Clean up code and put all of our article routes in a separate file

```
const express = require('express');
const router = express.router();

// Bring in Article Model
let Article = require('../models/article');
```

- Change app. to router. with a regedit
- [X] Change .router to .Router

```
TypeError: express.router is not a function
...
const router = express.Router();
```

- [X] Link app.js to new route files

```
// Route Files
    // Define article routes path (new file)
let articles = './routes/articles';
    // Refer to that file anytime /article is used
app.use('/articles', articles);
```

- [X] Require articles

```
TypeError: Router.use() requires a middleware function but got a string
...
// Route Files
let articles = ==require(=='./routes/articles'==)==;
app.use('/articles', articles);
```

- [X] Remove /article(s) prefix from route links (since the app.js route file method is rerouted to it)
- [X] Access router from outside

`module.exports = router;`

- [X] Change article to articles in index.pug and article.pug views, and the main.js

```
a(href='/articles/'+article._id)= article.title
...
a.btn.btn-light(href='/articles/edit/'+article._id) Edit
...
url: '/articles/'+id,
```

- [X] Move Get Single Article down to the bottom in articles.js

`TypeError: A:\xampp\htdocs\node.js\nodekb\views\article.pug:4`

- [X] **9:**  User Registration -- Install  [Passport](http://www.passportjs.org/) in the project folder

`npm install --save passport passport-local bcryptjs`

- [X] Create new user.js model

```
const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  name:{
    type: string,
    required: true
  },
  email:{
    type: string,
    required: true
  },
  username:{
    type: string,
    required: true
  },
  password:{
    type: string,
    required: true
  },
});

const User = module.exports = mongoose.model('User', UserSchema);
```

Anything you create from here on will  ==have a routes file and a model file==  (as long as it's interacting with data).

- [X] Create users.js route

```
const express = require('express');
const router = express.Router();

// Bring in Article Model
let User = require('../models/user');

// Register Form
router.get('/resgister', function(req, res){
  res.render('register');
});
```

- [X] Link route file to app.js (route anything that goes to /users to that file)

```
// Route Files
let articles = require('./routes/articles');
==let users = require('./routes/users');==
app.use('/articles', articles);
==app.use('/users', users);==
```

- [X] Change string to String in user.js

```
ReferenceError: string is not defined

    at Object.<anonymous> (A:\xampp\htdocs\node.js\nodekb\models\==user.js==:6:11)

```

- [X] Export module in users.js

```
TypeError: Router.use() requires a middleware function but got a Object
    at Function.use (...\index.js:458:13)
...
module.exports = router;
```

- [X] Create new register.pug view

```
extends layout

block content
  h1 Register
  form(method='POST', action='/articles/register')
    #form-group
      label Name:
      input.form-control(name='name', type='text')
    #form-group
      label Email:
      input.form-control(name='email', type='text')
    #form-group
      label Username:
      input.form-control(name='username' type='text')
    #form-group
      label Password:
      input.form-control(name='password' type='password')
    #form-group
      label Confirm:
      input.form-control(name='password2' type='password')
    br
    input.btn.btn-primary(type='submit',value='Submit')
```

- [X] Spellcheck users.js route GET request

```
Cannot GET /users/register
...
// Register Form
router.get('/==register==', function(req, res){
  res.render('register');
});
```

- [X] Take input fields in registration form and post them to the database

```
// Register Proccess
router.post('/register', function(req, res){
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('Name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();

  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  let errors = req.validationErrors();

  if(err){
    res.render('register', {
      errors:errors
    });
  } else {
    let newUser = new User({
      name:name,
      email:email,
      username:username,
      password:password
    });
  }
});
```

- [X] Declare bcrypt

`const bcrypt = require('bcryptjs');`

- [X] Add bcrypt salt & hash to registration proccess

```
bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash){
        if(error){
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function(err){
          if(error){
            console.log(err);
            return;
          } else {
            req.flash('success','You are now registered and can log in');
            res.redirect('/users/login');
          }
        });
      });
    });
```

- [X] Create login route

```
router.get('/login', function(req, res){
  res.render('login');
});
```

- [X] Create login.pug view that login route is rendering

```
extends layout

block content
  h1 Login
  form(method='POST', action='/users/login')
    #form-group
      label Username:
      input.form-control(name='username' type='text')
    #form-group
      label Password:
      input.form-control(name='password' type='password')
    br
    input.btn.btn-primary(type='submit',value='Submit')
```

- [X] Correct register.pug post action directory

`form(method='POST', action='/==users==/register')`

- [X] Change err to errors in users.js

```
ReferenceError: err is not defined
    at A:\xampp\htdocs\node.js\nodekboutes\users.js:30:3
...
  if(==errors==){
```

- [X] Change Name to name in users.js

```
Name is required
...
  req.checkBody('Name', '==name== is required').notEmpty();
```

- [X] Change error to err in users.js

```
ReferenceError: error is not defined
    at A:\xampp\htdocs\node.js\nodekboutes\users.js:44:9
    at A:\xampp\htdocs\node.js\nodekboutes\users.js:49:11
...
        if(==err==){
```

- [X] Add register link to navbar

```
        ul.nav.navbar-nav.navbar-right
          li.nav-item
            a.nav-link(href='/users/register') Register
          li.nav-item
            a.nav-link(href='/users/login') Login
```

- [ ] Reflect on code for the day (last line)

**Daily Tasks**

- [ ] Reconstruct mouse
- [X] Clear ALL gallery items off phone
- [X] Clear all unnamed audio entries off phone
- [X] Clear computer table junk
- [X] Dust Computer Table objects
- [X] Wipe computer table off
- [X] Clean bottom of mouse pad
- [X] Minimize apps and shortcuts from phone