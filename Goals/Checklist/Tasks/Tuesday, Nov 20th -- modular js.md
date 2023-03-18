**Work Tasks**

- **Time sheet**
- [X] 4 Hours Coding
- [X] 3 Hours Helping Brian
- 30m to Brian's house
- 50m to Frisco
- 50m back to Brian's house
- 30m back to home
- 20m loading/unloading glass table
- [ ] 1 hour practicing soul-winning (with Faith?)

- **module.exports**
- [X] [module.exports](https://www.youtube.com/watch?v=wLjzvRhNFmE&t=3m8s)  as the principle of substitution

```
// route.js
const router = express.Router()

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/*** module.exports = router; takes all of the functions that begin with the "router" variable (which is the express.Router() function from the express framework) and chunks them into the "router" variable that you're exporting (that represents all the functions in that module). Note that a module is a collection of functions. They may be organized as an object that's being exported (module.export = [functionOne: ...]) or as a variable that refers to (and thereby includes) every function that begins with that variable, as it is in the route.js example file above. ***/

// app.js
const index = require('./routes/route');

/*** This requires the module under a different name. Note that you can only export one module (collection of functions) per file. Otherwise requiring a file with multiple modules wouldn't know which module to import and use. ***/

```

- [X] [Object Literal Notation](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)  module structure

An object is described as a  set of  *comma-separated name/value pairs*  **enclosed in curly braces**  ({}).

```
const myModule = {
  name: 'will',
  age: 34,
  sayName: function() {
    alert(this.name);
  },
  setName: function(newName) {
    this.name = newName;
  }
};

myModule.setName('Willis');
myModule.sayName();
```

- [X] Initialize functions (how we kick off our module)

```
init: function() {
  this.cacheDom();
  this.bindEvents();
  this.render();
},
```

A method that calls 3 other functions. The “[this](https://www.youtube.com/watch?v=m-NYyst_tiY&index=2&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&t=13m28s)” variable points at the root method calling the object (until an event listener is added, in which case it refers to the item the event was bound on).

- [X] cacheDOM (set variables to search the DOM -- use only 1 $ symbol)

```
cacheDom: function() {
  this.$el = $('#peopleModule');
  this.$button = this.$el.find('button');
  this.$input = this.$el.find('input');
  this.$ul = this.$el.find('ul');
  this.template = this.$el.find('#people-template').html();
},
```

- **Parcel Application Bundler**
- [ ] Insta