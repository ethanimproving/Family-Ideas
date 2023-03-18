**Work Tasks**

- **Time sheet**
- [X] 10 Hours Coding

- **nodemon and Browsersync (****refresh browser with nodemon)**
- [X] Run scripts with nodemon

`nodemon --exec npm start`

- [X] Access forbidden!

```
[Browsersync] Access URLs:
----------------------------------------------------------
       Local: http://localhost:3000/%27localhost:3000%27
    External: http://192.168.1.22:3000/%27localhost:3000%27
----------------------------------------------------------
          UI: http://localhost:3001
UI External: http://localhost:3001
----------------------------------------------------------
[Browsersync] Watching files...
```

It's trying to launch the proxy server on the same port as the original server.

- [X] Use --port and --ui-port to specify ports.

`browser-sync start --proxy 'localhost:3000' --port '3005' --files '**/*'`

- [X] Remove quotes from --proxy and --port values

`browser-sync start --proxy localhost:3000 --port 3001 --files '**/*'`

- [X] Working

```
[Browsersync] Proxying: http://localhost:3000
[Browsersync] Access URLs:
-------------------------------------
       Local: http://localhost:3001
    External: http://192.168.1.22:3001
-------------------------------------
          UI: http://localhost:3002
UI External: http://localhost:3002
-------------------------------------
[Browsersync] Watching files...
```

- By default, bootstrap sets everything as [border-box](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing).

```

* content-box gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and ==the width of any border or padding will be added to the final rendered width==.

* border-box tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and ==the content box will shrink to absorb that extra width==. This typically makes it much easier to size elements.

```