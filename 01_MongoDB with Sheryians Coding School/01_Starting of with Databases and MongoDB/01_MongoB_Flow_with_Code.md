1. When we setup MongoDB database in code, then the database gets created in in MongoDB 

2. When we make a model in code, then the collection gets created in Database  

3. When we make schema of database in code, then the document gets created in the collection 


Ex: I have a company called TrackIt which provides 4 services to user: 

1. Helps users track their daily calories and protein intake 
2. Helps user track their expenses 
3. Reminds user birthday and anniversaries of their loved ones 
4. And then you have a short notepad to keep short notes of important things that you want to do today 


-> So, now we have "TrackIt's Database" 

-> and inside TrackIt's database there are different collections for storing different types of data like "users", "admins", etc. 

-> And inside this each collection we have documents, and each document represent data of a single individual thing/person, like inside "users" collection, data of user named "Rahul" is stored in one document, data of user named "Anjali" is stored in another document, like this things work in MongoDB. 


# "Document" is the smallest entity of MongoDB 

- Schema tells that how a document should look like, means what fields document should have 