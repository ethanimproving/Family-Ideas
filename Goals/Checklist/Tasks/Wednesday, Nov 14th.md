**Work Tasks**

- **Time sheet**
- [X] 6 Hours Coding
- [X] 1 hour accumulating proverbs on righteous social behavior

- **Website Integration**
- [X] Datepicker templates
- [jQuery UI Datepicker with Material Design - jQuery Plugins](https://jquery-plugins.net/jquery-ui-datepicker-with-material-design)
- [Cuppa DatePicker With Angular JS - Angular Script](https://angularscript.com/cuppa-datepicker-angular-js/)
- [Codehints - jQuery UI Datepicker with Material Design](http://codehints.in/jquery-ui-datepicker-with-material-design/)
- [Extract $mdDialog and $uibModal into dedicated services](https://medium.com/synsugar/extract-mddialogs-and-uibmodal-into-dedicated-services-8a586b3e7a71)
- [Attribution Datepicker by Gideon Baldridge - Dribbble](https://dribbble.com/shots/1738997-Attribution-Datepicker)

3 Competing solutions
1. Set type to date and troubleshoot timezone issues

2. Set type to string, use Date.now function, and convert the millisecond component of a DateTime value

    - Parse the short date of the datepicker at the route

3. Set type to string, use new Date() function as variable to parse it, and reinterpret the short-date string as a date value later

- [X] Intercept string text as date in route

```
const newDate = new Date(longDate);

// article.js model
date:{
    type: ==Date==,
    default: Date.now,
    required: true
  },

// edit_article.pug view
#datetimepicker1.input-group.dates

        - const shortDate = (article.date.getMonth()+1) + "/" + article.date.getDate() + "/" + article.date.getFullYear()

        input#usr1.form-control(name='==date==', type='text', placeholder='MM/DD/YYY' value=shortDate)

        span.input-group-addon
          span.glyphicon.glyphicon-calendar
        script(type='text/javascript').
          $(function () {
          $('#datetimepicker1').datetimepicker();
          });

// article.js route
==const datePickerInput = req.body.date;==
==const datePickerOutput = new Date(datePickerInput);==
==article.date = datePickerOutput;==
```

- [ ] "Last modified by" field
- [X] User church, role, and church location
- [ ] Edit Profile Information Page
- [ ] Create church registryd
- [ ] Access control users/edit page with if conditions
- [ ] Split up header and head tot hat you can add needed css to specific pages