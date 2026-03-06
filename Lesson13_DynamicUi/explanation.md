
Serving Static Files
---

* You can not access any local files like home.css directly in the browser
* It is standard to create a Public folder and then place your css files inside the Public folder

Tailwind CSS
---
* You will have to install the tailwind extension
* So basically tailwind defines utility classes, and hence the intellisense helps in prompting those class names.
* There are two ways to install Tailwind CSS:
    * Play CDN : link the url from its website => drawback: Run time dependency. ( Not recommended)
    * Install it using npm install tailwindcss
    * we have additionally installed postcss and autoprefixer
    * next run npx tailwindcss init --> this will create a tailwind config file --> this will not run on v4+ so yo can manually create the tailwind.config.js file and populate it with defaults
    * next we will create a input.css file in the folder which has our html files. 
    * finally we will add the stylesheet link to an output.css file in the home.html
    * Run this command mentioned on the tailwindcss website with updated path: npx @tailwindcss/cli -i ./views/input.css -o ./public/output.css --watch

Embedded JS
---

* In order to serve dynamic content on websites, i.e show different content to different users, we will need some information from the js files to be rendered on the html
* For this dynamic rendering, we use EJS which is a package provided by node
* You can install it using `npm run --save ejs`
* This enables you to use js code in html files
* You will need to set the view engine to `ejs` in order to use this feature --> `app.set('view engine', 'ejs'); ` 
* Next thing you need to set is the location of your template files by using ` app.set('views', 'views') `
* Now you will need to change the extension of the file from `html` to `ejs` where ever you want to use js code 
* You can write any js code inside `<% %>` and if you want the result of your js code to be parsed as html i.e rendered as is in the view, you need to use `<%= %>`
* Finally, in order to pass any JS variable to the `.ejs` file, you need to use `render` in place of `sendFile` like: `app.render('home', {registeredHouse : registeredHouse});`
* Now this object `{registeredHouse: registeredHouse}` is avaialble to be used in the `home.ejs` file

#### Partials in EJS

* Say there is some code in your templates that is getting used in many views, then you can create a partials of that code
* For that you can create a `partials` folder inside the `views` folder, and create `.ejs` files inside it which will have the common code
* Now in order to include that file, you will use `<%- include('partials/head') %>`

    

