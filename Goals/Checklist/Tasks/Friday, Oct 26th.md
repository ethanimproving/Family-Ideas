**Work Tasks**

- **Focus of research**
- [ ] Collect verses from 1 chapter in John Piper's book about the gospel achievement
- [ ] Review 1 session of William Lane Craig's series "The Work Of Christ"
- [ ] Look up Passion sermon where John Piper says it's impossible to please God without believing that he rewards us.
- [X] Learn how to run macro PowerShell commands with shortcut (Too Hard)
- C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -command “& cd A:\xampp\htdocs\node.js\nodekb"
- https://www.youtube.com/watch?v=SqII1Z8ifqc

- **node.js Tutorial Series (10-12)**
- [X] **10:** Create config folder for passport managment system
- [X] Create database.js to to access  ==this stuff==  outside

```
module.exports = {
  database:'mongodb:27017//localhost/nodekb',
  secret:'Your secret'
}
```

- [X] Add config database file to app.js

`const config = require('./config/database');`

- [X] Replace 'mongodb://localhost/nodekb' with config.database

```
mongoose.connect(config.database);
let db = mongoose.connection;
```

- [X] Create passport.js

```
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = function(passport){
  // Local Strategy
  passport.use(new LocalStrategy(function(username, password, done){
    // Match Username
    let query = {username:username};
    User.findOne(query, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'No user found'})
      }

      // Match Password
      bcrypt.compare(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Wrong password'})
        }
      });
    });
  }));
}
```

- [Passport Documentation](http://www.passportjs.org/docs/username-password/)
- [X] Check package.json to make sure you have the passport-local package installed
- [X] Add serialize / deserialize function to passport.js in the Module Exports

```
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
```

- [X] Require passport in app.js, add configuration, and add middleware

```
const passport = require('passport');

// Passport Config
require('./config/passport')(passport);

// Psaaport Middleware
app.use(passport.initialize());
app.use(passport.session());
```

- [X] Bring passport into users.js route

`const passport = require('passport');`

- [X] Setup Login  Process route in users.js

```
// Login Proccess
router.post('/login', function(req, res, next){
  passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect:'/users/login',
    failureFlash: true
  })(req, res, next);
});
```

- [X] Troubleshoot host [error](https://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/)

```

Error: Unsupported host '017//localhost/nodekb', hosts must be URL encoded and contain at most one unencoded slash

    at parseConnectionString (A:\xampp\htdocs\node.js\nodekb\node_modules\mongodb\lib\url_parser.js:243:11)

...
Error: Slash in host identifier
...
database:'mongodb:27017//localhost/nodekb',
to
database:'mongodb://localhost:==27017==/nodekb',
```

- [X] Style error and success messages in style.css

```
.alert-error{
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.alert-success_msg{
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
```

Unsure how to add booststrap class "alert-danger", we inspected the element and found a class "alert-error" already existing. We then created a CSS  selector with that class name to override the existing (lack of) styling.

Because we're using passport to create the div message, I expect the styling is found in the local passport module, or that we could assign a css class to the new div in the module.export in the passport.js config.

- [X] Set global "user" variable for all directories in app.js

```
app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});
```

- [X] Only show Register / Login buttons if user is logged out

```
ul.nav.navbar-nav.navbar-right
  ==if user==
==    li.nav-item==
==      a.nav-link(href='/users/logout') Logout==
  else
    li.nav-item
      a.nav-link(href='/users/register') Register
    li.nav-item
      a.nav-link(href='/users/login') Login
```

- [X] Add logout function to users.js route

```
// logout
router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', 'Your are logged out');
  res.redirect('/users/login');
});
```

- [X] **11:** Request "Uploaded By" user field in articles.js route

`    article.article = req.body.user._id;`

- [X] Remove author field from add_article.pug view

```
    #form-group
      label Author:
      input.form-control(name='author', type='text')
```

- [X] Comment out author requirement in articles.js route

`//  req.checkBody('author', 'Author is required').notEmpty();`

- [X] remove undefined body

```
TypeError: Cannot read property '_id' of undefined
    at A:\xampp\htdocs\node.js\nodekboutes\articles.js:31:31
...
article.author = req.user._id;
```

- [ ] Reflect on code for the day (last line)

**Daily Tasks**

- [ ] Reconstruct mouse
- [X] Watch Christopher Robin
- [X] Visit Aunt Colleen