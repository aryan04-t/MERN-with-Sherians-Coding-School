# To set-up cookies, we instal 'cookie-parser' package and then we require it inside our app.js file: 

```
    Command: npm i cookie-parser 
```


# Now include the package in your code:

```
    const cookieParser = require('cookie-parser);
```


# Once we have required the package, now use app.use() method to mount this middleware function in the application's request processing pipeline: 


```
    app.use(cookieParser());
```