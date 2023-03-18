**Work Tasks**

- **Time sheet**
- [X] 8 Hours Coding
- [ ] 2 Hours soul-winning preparation

- **Website Integration**
- [X] Make names and confirm password fields clickable.

```

input==#firstName==.form-control(type='text', placeholder='First name', required='', autofocus='')

        label.cursor-text(for='firstName') First name
...
label.cursor-text(for='inputPasswordConfirm') Confirm password
```

- Bootstrap has predefined ID's for data fields. I added the ID #inputFirstName, which had nothing coded.
- #[inputPasswordConfirm](http://1000hz.github.io/bootstrap-validator/) | Bootstrap Validator
- Also update the for='' label attribute to match the ID
- remove .mb-4 deom image element (mb-4 stands for margin-bottom: 1.5rem !important;)
- Margin-bottom was 24 pixals, now it's 32 px.
- [X] Why is .form-label-group 207px wide for my .input-group?
- Target .form-label-groups that are descendants of .input-groups and subtract 41.13px

```
.input-group .form-label-group {
  width: calc(100% - 41.13px);
}

// Flatten border radius
.input-group .form-label-group > input {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
```

- **favicon.ico procedure**
- [X] Add logo to title html

1. Create 256px by 256px logo in illustrator
2. File > Save for Web & Devices...

3. Convert to ico using [iconifier.net](https://iconifier.net/), [favicon.ico Generator](https://www.favicon.cc/), or [Free Online Icon Generator](http://www.prodraw.net/favicon/generator.php)

`<link rel="shortcut icon" href="/favicon.ico" />`

- **Bootstrap Validator**
- [X] Use Bootstrap validation methods

```
.invalid-feedback
    | Valid field is required.
```

- npm install bootstrap-validator
- Documentation
    - [bootstrap-validator - npm](https://www.npmjs.com/package/bootstrap-validator)
    - [Validator, for Bootstrap 3](http://1000hz.github.io/bootstrap-validator/?underwear=on#validator-fields)
    - [Forms · Bootstrap](https://getbootstrap.com/docs/4.0/components/forms/)
    - [Validate Form using Bootstrap Validator - Lisenme](http://www.lisenme.com/validate-form-using-bootstrap-validator-lisenme/)
- [X] Make Username span element red if field is invalid

```
.was-validated .input-group-text {
    color: #a94442;
    background-color: #f2dede;
    border-color: #a94442;
}
```

- [X] Make username input add-on green when username is valid

```

.was-validated .form-control:valid ~ .input-group-addon, .form-control.is-valid ~ .input-group-addon {

    color: #3c763d;
    background-color: #dff0d8;
    border-color: #3c763d;
}
```

- [X] Add name='' attribute to inputs on register form for the user.js model to select

```
.form-label-group

   input#firstName.form-control(==name='firstname'== type='text', placeholder='First name', required='', autofocus='')

```

- [X] Understand newUser method

```
let newUser = new User({
      firstname:firstname,
      lastname:lastname,
      email:email,
      username:username,
      password:password
    });
```

- the first side corresponds to the name='firstname' attribute defined in register.pug and accessed in the user.js model.
- the second side represent variables that access the user input from the request page.

- [X] Feed registration input fields to MongoDB through the users.js model
- [X] Add (method='POST', action='/users/register') to form***

`form.form-signin.form-wrapper.needs-validation(novalidate='', method='POST', action='/users/register')`

- Can't handle a POST request if it isn't given

- [X] Create user avatar

```
button#avatar-btn

                img.img-shadow(alt='', height='40', width='40', src='/images/avatar-male.png')

```

- **For tomorrow**
- [ ] Change express flash messages to be more appealing
- [ ] Make sure passwords match at registration
- [ ] Sign in with  [username or email](https://stackoverflow.com/questions/20958149/node-js-passport-strategy-login-with-either-email-or-username)  (passport)
- [ ] Put 2 Corinthians 5:21 in the layout footer
- [ ] View password eye glass button
- [ ] Add "Log In With Google" option to logon and register page
- [ ] Create user drop-down menu when logged in
- [ ] Create resource query pages after the likeness of DG (Articles by topic, scripture, date, author, sermons by the same, or all resources by the same queries.