Dynamic Path & Model deep-dive
---

* Dynamic paths: url me kuch changing content pass kar pae
* **Query param**: key value pair appended to URL after adding a `?`
    * used to send additional data 
    * controller k pas ek specific tareeka hota hai in query params ko nikalne ka
* **Path param**: ye directly url me embedded hote hain 
    * isme basically hum dynamic values pass karte hain
    * jab bhi url me hum `:` colon laga k likhte hain kuch tuh usko variable ki tarah treat kia jata hai 
    * path k beech me parameter pass kia jata hai hence the name path parameter
    