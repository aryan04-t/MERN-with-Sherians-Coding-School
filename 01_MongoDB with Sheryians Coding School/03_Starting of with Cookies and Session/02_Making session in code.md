# You can then make session data like this: 


- Create:

```
    req.session.koibhinaam = koibhivalue; 
```


- Read: 

```
    req.session.koibhinaam;  
```


- destroy / delete: 

```
    req.session.destroy(give a callback function which throws error if error occurs);
```