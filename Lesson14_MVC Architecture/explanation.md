MVC 
---

* It is an architectural pattern that helps us identify ki kis chez ki kya responsibility hai
* Folder structure clear define karne me help karta hai 
* Model me koi file hai tuh uska kya kaam hai, View me hai tuh kya kaam hai, and Controller me hai tuh uska kya kama hai 

### Separation of Concerns

* Concerns = responsibilities 
* ui kaisa dikhna chahiye, kaha pe data store hoga, communication kaise hoga, etc. 
* tuh isse meko ye phle se samajh me aa jaega ki is chez ka code likhna hai tuh meko model me likhna hai ya controller me ya view me 

#### Model

* Manages data and business logic of the application
* kya data aaya and gaya, data base se interaction, files se interaction
* example: airbnb k case me hume kya kya store karna hai: location, image, rating, price etc. 


### View

* Kya display karna hai user ko
* example: airbnb wale case me humare pas kya kya stored hai Model will decide, lekin kya kya hume user ko dikahan hai that view will decide


### Controller

* Model and view k beech ka interaction controller kara raha hota hai
* it processes the user input, usko model k pas bhejna, jab model ne koi changes kie ki jaise mai database se kuch information le aaya hu, ya maine iski booking confirm kar di hai etc. usko view pe ja k update karna
* example: Routes wala jo folder humne banaya hai airbnb k case me that will be a part of our Controller


* So basically end-user ki request Controller pe ja rahi hai, and then controller ye decide karta hai ki kya view ko dena hai and kya view se lena hai
* Similarly Controller hi decide karega ki model se kya dena aur lena hai
* Database se interaction sirf Model ka hoga

#### Issue with nodemon
 
 * So when we store the newly added homes in a file in data folder, nodemon assumes the data writing in json file to be a code change and hence it re-starts the server, due to which the newly added home will not be visible on the home page
 * To avoid this problem, we have added the nodemon.json config file to ignore any changes in the data folder
 * restart the server in order for these configuration changes to take effect
 
 ### Advantage of MVC

 * Now with this structure, different parts of the application have different responsibilities.
 * So now controller just needs to call the `save()` from the Model, and rest is taken care by the Model
 * The `save()` logic can change internally and controller will not be affect by it. Tomorrow Model can decide to store the data in a database instead of a file.
 