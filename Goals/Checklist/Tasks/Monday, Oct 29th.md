**Work Tasks**

- **Focus of research**
- [ ] Look up Passion sermon where John Piper says it's impossible to please God without believing that he rewards us.

- **node.js Tutorial Series (11-12)**
- [X] **11:** link user.js model to articles.js route

```
// Bring in User Model
let User = require('../models/user');
```

- [X] Translate user id hash to user name

```
// Get Single Article
router.get('/:id', function(req, res){
  Article.findById(req.params.id, function(err, article){
    ==User.findById(article.author, function(err, user){==
      res.render('article', {
        article:article,
        ==author: user.name==
      });
    });

  });
});
```

- article.author is holding our user id
- [X] Change article.pug view "written by" header to project our new author variable (user name) instead of user id

`h6 Written by #{==author==}`

- [X] Correct user to User

```
TypeError: Cannot read property 'name' of null
    at A:\xampp\htdocs\node.js\nodekboutes\articles.js:98:22
...
author: ==User==.name
```

- [X] Troubleshoot "Written by model" error

`author: ==user==.nameuser`

- User.name = "model"
- user.name = "Ethan Miller"
- pass the user object through the function  parameters
- [X] Correct user to User

```
TypeError: Cannot read property 'name' of null
    at A:\xampp\htdocs\node.js\nodekboutes\articles.js:98:22
...
```

- Comment out author: user.name to start server
- Add it back
- Log in
- Add new article
- Access article without a problem

The problem seems to be related to pre-existing articles, so I just deleted them to make it work. When I access them without author: users.name it gives be "Written by" with nothing after that. It's "null," probably because I created it before I created users, or without a user.

- [X] Hide "Add Article" link from non-users in the layout.pug view

```
==if user==
  li.nav-item
    a.nav-link(href='/articles/add') Add Article
```

- [X] Create access control function in articles.js route

```
// Access Control
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    req.flash('danger', 'Please login');
    res.redirect('/users/login');
  }
}
```

- [X] Add access control function to  relevant parameters (the /add_article page) in articles.js route

```
// Add Route
router.get('/add', ==ensureAuthenticated==, function(req, res){
  res.render('add_article', {
    title:'Add Article'
  });
});
```

- [X] Add access control for editing articles

`router.get('/edit/:id', ==ensureAuthenticated==, function(req, res){`

- [X] Hide Edit / Delete buttons from non-users who don't own the article in article.pug view

```
==if user==
==  if user.id ==article.author==
    a.btn.btn-light(href='/articles/edit/'+article._id) Edit
    a.btn.btn-danger.delete-article(href="#",data-id=article._id) Delete
```

- [X] Deny access to edit page from non-owners who have the article id number in the articles.js route

```
// Load Edit Form
router.get('/edit/:id', ensureAuthenticated, function(req, res){
  Article.findById(req.params.id, function(err, article){
    ==if(article.author != req.user._id){==
==      req.flash('danger', 'Not Authorized');==
==      res.redirect('/');==
==    }==
    res.render('edit_article', {
      title:'Edit Article',
      article:article
    });
  });
});
```

- http://localhost:3000/articles/edit/5bd7386d4b033e33a8c39d5b
- [X] Troubleshoot header problem

```
Error: Can't set headers after they are sent.
    at validateHeader (_http_outgoing.js:491:11)
    at ServerResponse.setHeader (_http_outgoing.js:498:3)

    at ServerResponse.header (A:\xampp\htdocs\node.js\nodekb\node_modules\express\libesponse.js:767:10)

    at ServerResponse.send (A:\xampp\htdocs\node.js\nodekb\node_modules\express\libesponse.js:170:12)

    at done (A:\xampp\htdocs\node.js\nodekb\node_modules\express\libesponse.js:1004:10)

    at Object.exports.renderFile (A:\xampp\htdocs\node.js\nodekb\node_modules\pug\lib\index.js:421:12)

    at View.exports.__express [as engine] (A:\xampp\htdocs\node.js\nodekb\node_modules\pug\lib\index.js:464:11)

    at View.render (A:\xampp\htdocs\node.js\nodekb\node_modules\express\lib\view.js:135:8)

    at tryRender (A:\xampp\htdocs\node.js\nodekb\node_modules\express\lib\application.js:640:10)

    at Function.render (A:\xampp\htdocs\node.js\nodekb\node_modules\express\lib\application.js:592:3)

    at ServerResponse.render (A:\xampp\htdocs\node.js\nodekb\node_modules\express\libesponse.js:1008:7)

    a==t A:\xampp\htdocs\node.js\nodekboutes\articles.js:57:9==

    at A:\xampp\htdocs\node.js\nodekb\node_modules\mongoose\lib\model.js:4518:16

    at process.nextTick (A:\xampp\htdocs\node.js\nodekb\node_modules\mongoose\lib\query.js:2579:28)

    at _combinedTickCallback (internal/process/next_tick.js:131:7)
    at process._tickCallback (internal/process/next_tick.js:180:9)
```

- Try to look for anything that tries to send a header after some of the body has already been written (callbacks that are accidentally  [called twice](https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client), or any error that happens after the body is sent).
- In my case, the conditions in the if statement were satisfied, initializing the res.redirect() which finished the response parameter, and than the res.render() also tried passing through, causing the error. To fix it, I just added an else statement.

```
// Load Edit Form
router.get('/edit/:id', ensureAuthenticated, function(req, res){
  Article.findById(req.params.id, function(err, article){
    if(article.author != req.user._id){
      req.flash('danger', 'Not Authorized');
      res.redirect('/');
    } ==else {==
      res.render('edit_article', {
        title:'Edit Article',
        article:article
      });
   == }==
  });
});
```

- [X] Prevent delete requests from non-owners

```
// Delete Article
router.delete('/:id', function(req, res){
  ==if(!req.user._id){==
==    res.status(500).send();==
==  }==

  let query = {_id:req.params.id}

  Article.findById(req.params.id, function(err, article){
   == if(article.author != req.user._id){==
==      res.status(500).send();==
==    } else {==
      Article.remove(query, function(err){
        if(err){
          console.log(err);
        }
        res.send('Success')
      });
    ==}==
  });
});
```

- Temporarily add delete button back to test it

- [X] **12:** Start server as a service with [pm2](https://github.com/Unitech/pm2)

`npm install pm2 -g`

- [X] Start background service

`pm2 start app.js`

- [X] Stop application

`==pm2 stop app.js==`

- [ ] Setup [libcap2-bin setcap](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=633075) to set custom port

```
sudo setcap_net_bind_service=+ep `readlink -f \`which node\``
sudo apt-get install lib2cap-bin
```

- Learn these commands for Windows
- [ ] Set port to 80 in app.js

```
// Start Server
app.listen(80, function(){
  console.log('Server started on port 80...');
});
```

- **Set up ngrok tunnel as a background service**
- [X] Setup free ngrok tunnel

```
cd A:\xampp\ngrok
.\ngrok http 3000
```

- [X] Install  [config](https://www.npmjs.com/package/config-yml) file

`<s>npm install config-yml --save</s>`

- [X] Delete config-yml folder
- [X] Download  [nssm](https://nssm.cc/download) executable, place in xampp/nssm folder, and install ngrok

`.\nssm.exe install ngrok`

- [X] Enter path to the ngrok executable and pass in [arguments](https://nssm.cc/usage)

```
start --all --config="A:\xampp\ngrok\config.yml"
OR...
start --all --config="C:\Users\ethan\.ngrok2\ngrok.yml"
```

- [X] Remove service

`<s>.\nssm remove ngrok</s>`

- [X] Use Google's DNS to circumvent content filtering

```

Control Panel\Network and Internet\Network and Sharing Center \Ethernet\Properties\Internet Protocol Version 4 (TCP/IPv4)

...
8 8 8 8
8 8 4 4
```

- [X] Set http request and port in the ngrok.yml file in C:\Users\ethan\.ngrok2\ngrok.yml

```
authtoken: 7QNo2QqDfDuTtc1WGsHux_2sem5cmG67V52tcf9Gbmr
tunnels:
    default:
        proto: http
        addr: 3000
```

- Check status of ngrok at http://localhost:4040/status

- [ ] Reflect on code for the day (last line)

**Daily Tasks**

- [ ] Reconstruct mouse
- [X] Make fried oats
- [ ] Look up where to park when canvassing
- [ ] Practice soul-winning  presentation***
- [X] Look at  pictures of Justin Dunphy's wedding
- [X] Call Dr. Bunch
- [ ] Call Michael Byrd
- [ ] Shorten cuffs on brown shirt
- [ ] Tailor gray shirt