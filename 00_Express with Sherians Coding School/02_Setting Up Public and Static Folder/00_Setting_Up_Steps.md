## Static Files setup karne ke liye: 

1) Create a folder called public 

2) Create three folders inside it: images, stylesheets, javascripts 

3) Configure the express static: 

    - Add this to your `index.js` file at the top, we're using the `middleware static()` to add public folder to our API:
    
    ``` 
    app.use(express.static('public'))
    ```

4) Understand the path 

    - Now go to your .ejs files and link external css and image files with respect to the path served to the index.js by the static function 