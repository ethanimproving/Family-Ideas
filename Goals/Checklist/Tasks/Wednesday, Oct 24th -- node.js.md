**Work Tasks**

- **Focus of research**
- [ ] Collect verses from 1 chapter in John Piper's book about the gospel achievement
- [ ] Review 1 session of William Lane Craig's series "The Work Of Christ"

- **node.js**
- [X] Begin Traversy Media node.js 22 part tutorial series
- [X] Decide between cmd and powershell
- [Windows 10 - cmd vs PowerShell](https://www.youtube.com/watch?v=Ba5T1hnLpEw)

- **node.js Tutorial Series (1-6)**
- [X] Course code [link](https://github.com/bradtraversy/nodekb)

[- [X] ](https://github.com/bradtraversy/nodekb)Initiate app
`A:\xampp\htdocs\node.js\nodekb> npm init`

[- [X] ](https://github.com/bradtraversy/nodekb)Install express in project folder

`npm install --save express`

[- [X] ](https://github.com/bradtraversy/nodekb)Write server block in app.js (entry point)

```
const express = require('express');

// Init App
const app = express();

// Home Route
app.get('/', function(req, res){
  res.send('Hellow World');
});

// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});
```

- [X] Install pug (formerly jade)

`npm install --save pug`

- [X] Seek 5 seconds backwards with  ==Left keyboard arrow==  in YouTube
- [X] Set views folder (templates) in app.js

```
const path = require('path');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

- __dirname is current directory, 'views' is a folder within it.
- [X] Create "views" folder in project directory
- [X] Access index.pug file

```
h1 Hellow World

// Home Route
app.get('/', function(req, res){
  res.==render==('==index', {==
==    title:'Articles'==
  });
});
```

- [X] Format index page with pug

```
doctype html
html
  head
    title knowledgebase
  body
    h1 #{title}
```

- [X] Add page to add an article

```
// Add Route
app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title:'Add Article'
  });
});
```

- Create new add_article.pug view
- [X] Create general pug layout (parital)

```
// layout.pug
doctype html
html
  head
    title knowledgebase
  body
    block content
    br
    hr
    footer
      p Copyright &copy; 2017
==
==
// index.pug
==extends layout==
==
==
==block content==
  h1 #{title}

//add_article.pug
==extends layout==
==
==
==block content==
  h1 #{title}
```

- [X] Understand what code is doing

```
app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title:'Add Article'
  });
});
```

This block is like a CSS  selector, saying, "Find the add_article page view (template) and generate the content that I populate into my app.js fields." h1 #{title} becomes h1 Add Article, and the reason that's necessary is because you need users to input that information from a form in your app.js, not into the html template you've created.

- [X] Create a temporary static array of articles (ultimately they will come from MongoDB user requests)

```
// Home Route
app.get('/', function(req, res){
  ==let articles = [==
==    {==
==      id:1,==
==      title:'Article One',==
==      author:'Ethan Miller',==
==      body:'This is article one. Impressed?'==
==    },==
==    {==
==      id:2,==
==      title:'Article Two',==
==      author:'Ethan Miller',==
==      body:'This is article two. Impressed?'==
==    },==
==    {==
==      id:3,==
==      title:'Article Three',==
==      author:'Ethan Miller',==
==      body:'This is article three. Impressed?'==
==    },==
==  ];==
  res.render('index', {
    title:'Articles',
    ==articles: articles==
  });
});
```

- [X] Add article titles to index page

```
extends layout

block content
  h1 #{title}
 == ul==
==    each article, i in articles==
==      li= article.title==
```

use the = sign after li to indicate the following text is meant to be a variable, not a string

- [X] Install language-pug atom package
- [X] Open mongo shell

```
A:\xampp\mongoDB\bin
.\mongo
cls
```

- [X] Create nodekb database

```
show dbs
use nodekb
db.createCollection('articles');
show collections
```

- [X] Create an array of data in the articles collection (table)

```

db.articles.insert({title:"Article One",author:"Ethan Miller",body:"This is article one."});

db.articles.find();
db.articles.find().pretty();
```

- [X] Press the Up arrow key in powershell to ==copy the previous line of code==
- [X] Install mongoose

`npm install --save mongoose`

- https://mongoosejs.com/
- [X] Link mongoose to app.js

```
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;
```

- [X] Create models folder in project directory and article.js file

noSQL databases lack structure because of its flexibility in sorting data, so mongoose gives you the opportunity to structure it on the application level rather than being forced to do it on a data level, like mySQL, because you have to create all of your tables and columns.

- [X] Create article form for content creators

```
let mongoose = require('mongoose');

// Article Schema
let articleSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  }
});

let Article = module.exports = mongoose.model('Article', articleSchema);
```

- [X] Check for connection / errors

```
// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});
```

- [X] Delete static array
- [X] Bring in article models

```
// Bring in models
let Article = require('./models/article');
```

- [X] Pass in articles from a MongoDB query into the view (template pug)

```
// Home Route
app.get('/', function(req, res){
  ==Article.find({}, function(err, **articles**){==
==    res.render('index', {==
==      title:'Articles',==
==      articles: **articles**==
==    });==
==  });==
});
```

- [X] Account for errors

```
// Home Route
app.get('/', function(req, res){
  Article.find({}, function(err, articles){
    ==if(err){==
==      console.log(err);==
==    } else {==
      res.render('index', {
        title:'Articles',
        articles: articles
      });
    ==}==
  });
});
```

- **Create form for adding articles**
- [X] Add form to add_article.pug view

```
extends layout

block content
  h1 #{title}
 == form(method='POST', action='**/articles/add**')==
==    #form-group==
==      label Title:==
==      input.form-control(name='title', type='text')==
==    #form-group==
==      label Author:==
==      input.form-control(name='author', type='text')==
==    #form-group==
==      label Body:==
==      textarea.form-control(name='body')==
==    input.btn.btn-primary(type='submit',value='Submit')==
```

- [X] Make client request post to server

```
// Add Submit POST Route
app.post('/**articles/add'**, function(req, res){
  console.log('Submitted');
  return;
});
```

- Note that console.log(); will post to server console, not client (Chrome) console
- [X] Install  [body-parser](https://github.com/expressjs/body-parser)  to project

```
npm install --save body-parser

const bodyParser = require('body-parser');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
```

- [X] Let server receive client-inputted field data

```
// Add Submit POST Route
app.post('/articles/add', function(req, res){
  ==let article = new Article();==
==  article.title = req.body.title;==
==  article.author = req.body.author;==
==  article.body = req.body.body;==
==
==
==  article.save(function(err){==
==    if(err){==
==      console.log(err);==
==      return;==
==    } else {==
==      res.redirect('/')==
==    }==
==  });==
});
```

- Where "new Article();" creates a new article from the article.js model file in MongoDB

- [X] Add public (assets) folder

```
// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));
```

- [X] Install bower (like npm for front end)

`npm install -g bower`

- [X] Create .bowerrc file in root directory

```
{
  "directory":"public/bower_components"
}
```

- [X] Install bootstrap through  bower npm (bower is depreciated)

```
<s>bower install bootstrap</s>
npm install bootstrap
npm install jquery
```

- [X] Move from node_modules to public components folder
- [X] Link to layout.pug view

`  link(rel='stylesheet' href='/components/bootstrap/dist/css/bootstrap.css')`

- [X] Wrap block content in .container class
- [X] Style index.pug article list

```
block content
  h1 #{title}
  ul.==list-group==
    each article, i in articles
      li.==list-group-item=== article.title
```

- [X] Add navbar

```
    nav.navbar.navbar-expand-md.navbar-dark.bg-dark<s>.fixed-top</s>
      a.navbar-brand(href='==/==') ==KnowledgeBase==

      button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarsExampleDefault', aria-controls='navbarsExampleDefault', aria-expanded='false', aria-label='Toggle navigation')

        span.navbar-toggler-icon
      #navbarsExampleDefault.collapse.navbar-collapse
        ul.navbar-nav.mr-auto
          li.nav-item<s>.active</s>
            a.nav-link(href='==/==')
              | Home
              span.sr-only (current)
          li.nav-item
            a.nav-link(href='==/articles/add==') ==Add Article==
<s>          li.nav-item</s>
<s>            a.nav-link.disabled(href='#') Disabled</s>
          li.nav-item.dropdown

            a#dropdown01.nav-link.dropdown-toggle(href='http://example.com', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false') Dropdown

            .dropdown-menu(aria-labelledby='dropdown01')
              a.dropdown-item(href='#') Action
              a.dropdown-item(href='#') Another action
              a.dropdown-item(href='#') Something else here
        form.form-inline.my-2.my-lg-0

          input.form-control.mr-sm-2(type='text', placeholder='Search', aria-label='Search')

          button.btn.btn-outline-success.my-2.my-sm-0(type='submit') Search
```

- Copy  [navbar](https://getbootstrap.com/docs/4.0/examples/starter-template/) block to html to  [jade converter](https://html2jade.org/)
- [X] Add bootstrapjs and jQuery to enable the responsive hamburger menu

```
script(src='/components/jquery/dist/jquery.js')
script(src='/components/bootstrap/dist/js/bootstrap.js')
```

- [X] Add links to articles

```
block content
  h1 #{title}
  ul.list-group
    each article, i in articles
      li.list-group-item
        ==a(href='/article/'+article._id)= article.title==
==
==
//app.js
==
==
// Get Single Article
app.get('/article/:id', function(req, res){
  Article.findById(req.params.id, function(err, article){
    res.render('article', {
      article:article
    });
  });
});
```

- [X] Create article.pug view

```
extends layout

block content
  h1= article.title
  h6 Written by #{article.author}
  p= article.body
```

- [ ] Reflect on code for the day and make sense of it
- **Website Integration**
- [ ] Make content management system for videos, audios, articles, ebooks, notes, post metadata (date, title, description, author, scripture, series, etc) users,

**Daily Tasks**

- [ ] Reconstruct mouse
- [X] Sing Be Thou My Vision first thing in the morning at 5:30 kneeling at the bedside