**Work Tasks**

- **Time sheet**
- [X] 8 Hours Coding
- [ ] 1 hour soul-winning preparation

- **Website Integration**
- [X] Split layout.pug into header/footer partials

```
doctype html
html
  head
    link(rel='shortcut icon', href='/images/favicon2.ico')
    title Bible Academy
    link(rel='stylesheet' href='/components/bootstrap/dist/css/bootstrap.css')
    link(rel='stylesheet' href='/css/style.css')
  body
    nav.navbar.navbar-expand-md.navbar-dark.main-nav
      button#guideButton
      a.logo(href='/')

        img.mb-4(src='/images/bibleAcademy Logo.svg', alt='', width='154', height='24.2')

      .nav-items
        a.-item(href='/articles') Articles
        a.-item(href='/messages') Sermons
        a.-item(href='/topics') Topics
        a.-item(href='/books/all') Books
        a.-item(href='/podcasts') Podcasts
        button.-btn(data-ix='ix-features-nav') Features
        a.-item(href='/about-us') About
        a.-item(data-segment-header-donate='', href='/donate') Donate

      button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarsExampleDefault', aria-controls='navbarsExampleDefault', aria-expanded='false', aria-label='Toggle navigation')

        span.navbar-toggler-icon
      #navbarsExampleDefault.collapse.navbar-collapse
        ul.navbar-nav.mr-auto
        ul.nav.navbar-nav.navbar-right
          if user
            ul.navbar-nav.mr-auto

              a.nav-link#add-article(href='/articles/add', data-toggle='tooltip', data-placement='bottom', title='Add Article', data-delay='{"show":"500", "hide":"200"}')

              a.nav-link#add-media-resource(href='/articles/add', data-toggle='tooltip', data-placement='bottom', title='Add Media Resource', data-delay='{"show":"500", "hide":"200"}')

              a.nav-link#add-book(href='/articles/add', data-toggle='tooltip', data-placement='bottom', title='Add ebook', data-delay='{"show":"500", "hide":"9000"}')

              li.nav-item.dropdown

                button#avatar-btn(data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')

                  img.img-shadow(alt='', height='40', width='40', src='/images/avatar-male.png')

                .dropdown-menu.dropdown-menu-right.user-dropdown(aria-labelledby='dropdown01')

                  .user-header
                    a.user-profile(href='/profile/:id')

                      img.img-dropdown(alt='', height='40', width='40', src='/images/avatar-male.png')

                      .channel-container

                        .user-name(ellipsis-truncate='', title='Ethan Miller') #{user.firstname} #{user.lastname}

                        .email(ellipsis-truncate='', title='ethan.romans5.8@gmail.com') #{user.email}

                  a.dropdown-item#user-profile(href='#') My Profile
                  a.dropdown-item#switch-user(href='#') Switch User
                  a.dropdown-item#logout(href='/users/logout') Logout
          else
            a.nav-link(href='/users/login') SIGN IN
    .wrapper
      .container
        != messages('message', locals)
        if errors
          each error, i in errors
            div(class="alert alert-danger") #{error.msg}
      block content
    .container
      br
      hr
      footer
        p Copyright &copy; 2018
      br
      br
    script(src='/components/jquery/dist/jquery.js')

    script(src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js')

    script(src='/components/bootstrap/dist/js/bootstrap.js')
    script(src='/js/main.js')
```

- [X] Learn how to delete document from the Mongo shell

1. db.articles.find()
2. Copy ObjectId
3. Right click in the mongo shell to paste
4. db.articles.deleteOne( { "_id" : ObjectId("5be19964a414fa0394c3fa8b")} )

- [X] Interpret HTML tag markups from CKEditor in body parameter not as string ([unescape](https://stackoverflow.com/questions/37279985/delete-html-entities-or-replace-tag)  syntax)

`p!= article.editor1`

- Otherwise ckeditor adds <p> tags to body at text
- [X] Display user's name in article.pug page (define "author" variable in get requests from the particular article's ID page)

```
// Get Single Article in articles.js route
router.get('/:id', function(req, res){
  Article.findById(req.params.id, function(err, article){
    User.findById(article.author, function(err, user){
      res.render('article', {
        article:article,
        publisher: user.firstname + " " + user.lastname
      });
    });
  });
});

// article.pug view
h6 Written by #{publisher}
```

- [X] Add "published date" to add_article (

```
// article.js model
    publisheddate:{
    type: Date,
    default: Date.now,
    required: true
  },

// article.pug

- const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

time= monthNames[article.publisheddate.getMonth()] + " " + article.publisheddate.getDate() + ", " + article.publisheddate.getFullYear()

  h1= article.title
```

- [X] Handle POST requests from edit article page
- [X] Change datepicker to custom datepicker that doesn't include 00z