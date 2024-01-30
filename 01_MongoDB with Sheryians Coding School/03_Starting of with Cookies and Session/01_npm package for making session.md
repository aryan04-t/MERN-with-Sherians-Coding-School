# Session: 

1. We use `express-session` package for creating sessions 


2. Install this package using this command: 

```
    Command: `npm i express-session` 
```

3. Then require express session in your main routing file using this name: 

```
    const session = require('session');
```


4. Write this piece of code then to create session: 

```
    app.use(session({ 
        resave: false,  
        saveUninitialized: false,  
        secret: 'hehehe'  
    }));
```

5. After that start using session to store data and apply logic. 