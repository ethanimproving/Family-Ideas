```
PS A:\xampp\htdocs\node.js\neverendingqs-netlify-express> git push
To https://github.com/king-melchizedek/neverendingqs-netlify-express.git
! [rejected]        master -> master (non-fast-forward)

error: failed to push some refs to 'https://github.com/king-melchizedek/neverendingqs-netlify-express.git'hint: Updates were rejected because the tip of your current branch is behind

hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

git fetch origin
git checkout -b fx4100
git commit -a -m "render index.pug"
git push
git push --set-upstream origin fx4100