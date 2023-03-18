- [ ] Display configuration

`git config --list --show-orig`

- [ ] Replace username

`git config --global user.name "Ethan Miller"`

- [ ] Replace user email

`git config --global user.email ethan.romans5.8@gmail.com`
**- [ ] create a repository**
`git init`

- [ ] **Stage all py files (mark for commit)**

`git add *.py`

- [ ] Commit these files to the repository and mark them as the first by entering

`git commit –m "initial project version"`

- [ ] Catch any untracked files.

`git status`

- [ ] Stage an individual file

`git add "EG11-12 Complete Fashion Shop.py"`

- [ ] Commit changes

`git commit –m "added file creation info"`

- [ ] See file changes

`git diff`

- [ ] See the difference between what's in staging and the last commit.

`git diff --staged`

`git commit –m "added file modified info"`

- [ ] adds all tracked files to the staging area and commits them in one step.

```
git commit –a –m "totally committed"
git commit –a –m "test of commit and rollback"
```

- [ ] Remove a file

`git rm snaps.py`

- [ ] Remove a file from the repository but not the working directory

```
git rm -- cached snaps.py
git rm --cached venv/*
```

- [ ] add line change information

`git log –p`

`git log --stat`

`git log --pretty=format`

`git log --pretty=%H`

- [ ] Unstage file

```
git reset file_name
git reset "EG11-12 Complete Fashion Shop.py"
```

- [ ] Replace the working directory copy of a file with the file committed to the repository

```
git checkout -- file_name
git checkout -- "EG11-12 Complete Fashion Shop.py"
```

- [ ] Set up a gitignore file

```
touch .gitignore

/node_modules

>git: Add file to .gitignore
Node
```

- 1. If you have not yet created a .git file, run the git commit command.

- [ ] Stage working directory (minus ignored files/directories)

`git add .`

- [ ] See all staged files

`git diff --name-only --cached`

- [ ] Auto reload flask server

```
set FLASK_DEBUG=1
flask run --reload
```

- [ ] Change login Branch

`git checkout login`

- [ ] Change commit message (Be careful, rebase deletes files)

```
git log
git rebase -i 50c2543ec7f781cca402062777626595f563eb2b
(replace "pick" with "reword")
reword 50c2543 inistial commit
git commit --amend -m "initial commit"

git rebase -i f616e5c6bf560a193337ca299fcefda29e73f2d5
reword f616e5c time how long the search takes

git rebase --abort

git reflog
git commit --amend -m "initial commit"
git rebase -i HEAD~22
```

werkzeug.routing.BuildError: Could not build url for endpoint 'suppliers'. Did you mean 'products' instead

url_for() takes in a method, not a string. So url_for('products') actually says, "Look for the method products() and figure out what link is pointing to it. Since it's underneeth @app.route("/products"), your app is localhost:5000, and your route("/products") appends /products, so the url_for() function returns localhost:5000/products.

If there is no method defined as "suppliers", url_for() can't return the route that contains it because it doesn't exist.

Basically you just have to create the routes and methods for suppliers and orders before url_for can find the url that invokes those those methods.

When the Browser visits a url, it sends a GET request to the server (that's us) to load a page (or return json data, etc). @app.route("/products") is handling that GET request with def products():. products() then says, "Find the products.html template, stick data in it from the northwind2.db products table, and render the page."

What url_for does, is it looks for the method passed into it, and figures out what url is triggers that method to execute, essentially.

http://flask.pocoo.org/docs/1.0/api/#flask.url_for

Hope this helps.

the table is actually named orders (plural) not order (singular).

Link to a cloned repository:

```

git remote add tutorial-remote https://github.com/king-melchizedek/Mongo-File-Uploads.git

git remote -v
git push -u tutorial-remote master
```