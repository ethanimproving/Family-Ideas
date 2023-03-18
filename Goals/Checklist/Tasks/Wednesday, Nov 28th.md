**Work Tasks**

- **Time sheet**
- [X] 8 Hours Coding

Today I've spent 2 hours writing and thinking, and absorbed in rich thought. I don't necessarily think it was a waste of time, but I'm not convinced God would characterize it as orderly. I nailed down Francis Chan's fake fear, Steven Anderson's boldness, the New IFB vs. The Porch, and the difference between God's forgiveness and God's mercy (forgiveness is not salvation). I also saved a thought about believers who struggle with knowing whether they're saved or not.

- **nodemon and Browsersync (****refresh browser with nodemon)**
- [X] Install globally

`npm install -g browser-sync`

- [X] Start nodemon server
- [X] Start watcher

`browser-sync start --proxy "localhost:3000" --files "css/*.css"`
"css/*.css" to watch css files in the css directory

Or add  [script](https://www.youtube.com/watch?v=lYLssTpAP-k&t=6m10s) to  [package.json](https://github.com/voorhoede/front-end-tooling-recipes/blob/master/express-with-nodemon-browsersync/package.json)

```
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "browser-sync start --proxy 'localhost:3000' --files '*'"
},
```

- [Express with Nodemon &amp; Browsersync](https://voorhoede.github.io/front-end-tooling-recipes/express-with-nodemon-browsersync/)

-

- [X] Watch in [all directories](https://stackoverflow.com/questions/36653766/browser-sync-and-watching-multiple-folders)

`==browser-sync start --proxy 'localhost:3000' --files '**/*'==`

- [Guard](https://vickev.com/#!/article/auto-refresh-your-browser-when-saving-files-or-restarting-node-js)
- [ ] [Install](https://www.youtube.com/watch?v=F9TSe9JYdaQ) globally

`npm install -g guard-livereload`

- **Website Integration**
- [X] Build subway tr