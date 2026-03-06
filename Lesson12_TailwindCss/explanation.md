
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
    

