**Work Tasks**

- **node.js**
- [X] Download and install MongoDB from MSI file
- https://www.mongodb.com/download-center/community
- [X] Create db folder in mongoDB > data > db
- [X] Start MongoDB as a service

1. navigate to A:\xampp\mongoDB\bin in cmd as administrator

2. mongod --directoryperdb --dbpath A:\xampp\mongoDB\data\db --logpath A:\xampp\mongoDB\log\mongo.log --logappend --install

3. net start MongoDB

- [X] Create new database

1. navigate to MongoDB bin folder
2. mongo, cls, show dbs, use customerapp
3. db.createCollection('users'), show collections

4. db.users.insert([{first_name:'John', last_name:'Doe', email:'jdoe@yahoo.com'},{first_name:'Beth', last_name:'Smith', email:'bsmith@gmail.com'},{first_name:'Kevin', last_name:'Johnson', email:'kjohnson@gmail.com'}])

5. db.users.find()

- [X] Install mongojs as an REM
- navigate back to customerapp project folder in cmd
- npm install mongojs --save

```
const mongojs = require('mongojs');
const db = mongojs(customerapp, ['users'])
```

- mongojs documentation: https://github.com/mafintosh/mongojs
- [X] Access code from  https://github.com/hgillispie/express-crash-course
- [X] Troubleshoot db.users.find() output failure

```
    if(errors){
        res.render('index', {
            title: 'Customers',
            users: users,
            errors: errors
        });
    } else {
        const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
        }

        console.log(newUser);
    }

    if(errors){
       == db.users.find(function (err, docs) {==
==        console.log(docs);==
==        res.render('index', {    ==
==            title: 'Customers',==
==            users: docs==
==        });==
    })
    } else...
```

- [X] Add another user in MongoDB to test connection

`db.users.insert([{first_name:'Jen', last_name:'Willaims', email:'jenwilliams@yahoo.com'}])`

- [X] Add new users with app form

```
==db.users.insert(newUser, function(err, result){==
    if(err){
        console.log(err);
    }
    res.redirect('/');
});
```

- [X] Add jQuery CDN to header partial
- [X] Add delete user link
- [X] Troubleshoot "referenceError: ObjectId is not defined"
- [const](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)[ ](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)[ObjectId](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)  [=](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)  [require](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)[(](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)['mongodb'](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)[).](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)[ObjectID](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)[;](https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node)

**Daily Tasks**

- [ ] Reconstruct mouse
- **Focus of research**
- [X] Jordan Peterson panel with Ben Shapiro
- [X] Jonathan Haidt on diversity of thought in university
- [X] Beyond the Fundamentals on 1 Peter 2:8
- [X] Jordan Peterson on feminine behavior in the workplace (make-up, etc)