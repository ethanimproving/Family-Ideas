**Work Tasks**

- **Time sheet**
- [X] 12 Hours Coding
- [ ] 2 Hours soul-winning preparation

- **Website Integration**
- [ ] Make content management system for videos, audios, articles, ebooks, notes, post metadata (date, title, description, author, scripture, series, etc) users,
- [X] Setup node.js server with express framework, pug, mongoose, body-parser, passport, bcrypt, express-messages, express-session, connect-flash, and express-validator.
- [X] Copy node KnowledgeBase project to bibleAcademy folder.
- [X] Create bibleAcademy database with users, articles, and sermons collections.
- [X] Link models to correct db (config/database.js)

```
module.exports = {
  database:'mongodb://localhost:27017/bibleAcademy',
  secret:'Your secret'
}
```

- [X] Change layout.pug -- add navbar
- [X] Import bibleAcademy css and js
- [X] Remove bootstrap link decoration override on hover

```
a==, a:hover== {
    transition-property: all;
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
    text-decoration: none;
    color: #333;
}
```

- [X] Import assets for special character fonts

```
reg
...
Find: /websites/websiteComponants//assets/fonts/dg-icons/dg-icons
Replace: /fonts/dg-icons/dg-icons
...
Find: ../assets/fonts
Replace: /fonts
```

- [X] Replace Menu-Drawer-Btn with user login / registration

```
.main-nav .navbar-nav .nav-link {
  font-size: 15px;
  padding: 10px 16px;
  font-weight:700;
  color: #2793e6;
  cursor: pointer;
  z-index: 50;
}

.main-nav .navbar-nav .nav-link:hover {
  color: #1281d6;
}
```

- Had to make selector more specific (bootstrap overrides custom CSS is selector is more specific)
- [X] Master how to center items on the navbar

```
.nav-items {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
}
```

- Had to wrap them in another div (header was the main wrapper in dg, and main-nav was the second div)
- [X] Comment out the hash change in main.js

`//location.hash = "#full-video";`

- [X] Style login page

To do:
file:///A:/xampp/htdocs/websites/websiteComponants/videoPage.html#full-video
https://www.desiringgod.org/users/log-in
https://getbootstrap.com/docs/4.0/examples/floating-labels/

```
.col-md-8.order-md-1
  h4.mb-3 Billing address
  form.needs-validation(novalidate='')
    .row
      .col-md-6.mb-3
        label(for='firstName') First name

        input#firstName.form-control(type='text', placeholder='', value='', required='')

        .invalid-feedback
          | Valid first name is required.
      .col-md-6.mb-3
        label(for='lastName') Last name

        input#lastName.form-control(type='text', placeholder='', value='', required='')

        .invalid-feedback
          | Valid last name is required.
```

[Checkout form](https://getbootstrap.com/docs/4.0/examples/checkout/)

- [ ] Last line

**Daily Tasks**

- [ ] Look up where to park when canvassing
- [ ] Practice soul-winning  presentation***
- [ ] Call Michael Byrd