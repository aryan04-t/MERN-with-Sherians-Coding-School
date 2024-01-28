# Ejs set-up karne ke liye: 

1. Ejs install command: `npm i ejs` 

2. configure ejs, add this line of code to the top of all your GET, POST, PUT, etc. methods and middlewares: `app.set('view engine', ejs);` 

3. Ek "views" folder banao apne project ke main folder me 

4. Uske andar ejs files banao jo banani houn

    - Ejs basically stands for "Embedded JavaScript" Template, and here the concept which we're learning when we're using ejs is "Template Engine". 

5. GET calls me jab data send karte the "res" object ka use karke `res.send()`, ab uske jagha `res.render()` function use karo, and ab is render function ke andar koi bhi ejs file ka naam like do jo `views` folder me present ho, bus file extension ke saath mat likhna. 

6. So, now me know that `ejs` is just a templating language which is used to generate HTML markup, and ejs looks just like html, but ejs is `dynamic html` in most simple words.  

7. Files inside the `views` folders are the files which can be rendered by `Ejs View Engine`, if we don't use any package like `ejs` then we have to write all our HTML in res.send() and this html which we will write will be static 