**Work Tasks**

- **Time frame**
- [X] 5 Hours Coding
- [ ] 2 Hours watching soul-winning videos
- [ ] 1 Hour practicing gospel presentation

- [X] Continue node.js server with MongoDB tunneled through ngrok reconstruction project in Oct 30th
- [X] Troubleshoot Cannot GET /articles/:id error
- Check route
- Check mongoose connectivity / article.js model
- Add users collection to database and see if the problem goes away
- Move route to app.js
- Remove /article from GET handler link (the app.use() function in app.js was routing all requests from /articles to /routes/articles.js)

```
Cannot GET /articles/5bd9e20c6277601c6079d2c0
...
router.get('==article==/:id', function(req, res){
  Article.findById(req.params.id, function(err, article){
    res.render('article', {
      article:article,
    });
  });
});
```

- [X] How does res.render(view [, locals] [, callback]) know to look in the views folder?

```
    res.render('==article==', {
      article:article,
    });
```

- The ==path.join() method joins the specified path segments into one path==. __dirname is a variable defined in Express

```
var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.
...
// Load View Engine
app.set('views', ==path.join(__dirname, 'views')==);
app.set('view engine', 'pug');
```

- [X] [Troubleshoot](https://stackoverflow.com/questions/41585947/passport-unknown-authentication-strategy-local) error

```
Error: Unknown authentication strategy "local"
...
You forgot to import passport config file in your app.js.
```

- [X] Learn why ajax delete request is hanging
- Test to see if main.js is being accessed by the layout.pug with a simple alert.

```
GET http://localhost:3000/public/js/main.js net::ERR_ABORTED 404 (Not Found)
...
// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));
```

- [X] Add "publisher" field to article collection

```
// models/article.js
  publisher:{
    type: String,
    required: true
  },

// routes/articles.js
    // Get errors
    ...
    article.publisher = req.user._id;
    ...

    // Load Edit Form
    ...
    if(article.==publisher== != req.user._id){
    ...

    // Update Submit POST Route
    ...
    article.publisher = req.user._id;
    ...

// Delete Article
    ...
    if(article.==publisher== != req.user._id){
    ...

// Get Single Article
router.get('/:id', function(req, res){
  Article.findById(req.params.id, function(err, article){
    User.findById(article.==publisher==, function(err, user){
      res.render('article', {
        article:article,
        ==publisher==: user.name
      });
    });
  });
});

// /views/article.pug
...
  h6 Written by #{==article.==author} ==| Published by #{publisher}==
  p= article.body
  hr
  if user
    if user.id ==article.==publisher==
      a.btn.btn-light(href='/articles/edit/'+article._id) Edit
      a.btn.btn-danger.delete-article(href="#",data-id=article._id) Delete
```

```
TypeError: Cannot read property '_id' of undefined
    at A:\xampp\htdocs\node.js\doctrinecoalitionoutes\articles.js:35:34
...
article.publisher = req.user._id;
...
```

- request.user object is undefined.
- the error indicates, that the authorization was not done correctly. Typically the req.user is set during the auth process.
- (!) I forgot to create a user collection in my database. -- nevermind.
- I forgot to sign back in after server restart.

**Daily Tasks**

- [ ] Look up where to park when canvassing
- [ ] Practice soul-winning  presentation***
- [ ] Call Michael Byrd