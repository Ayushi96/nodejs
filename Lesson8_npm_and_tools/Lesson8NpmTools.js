// ----------------- NPM & Tools --------------

/**
 * We will create a project using npm init --> create package.json file
 * Making a project means making the package.json file.
 * All the dependencies of your project will be present in this file only.
 * scripts: section in the package.json 
 * 
 * start is a special script, that will work just like npm start
 * Baki jo scripts aap likhte ho unk lie you need to write npm run <....>
 * 
 * npm: node js ka package manager.
 * 
 * Registry: Public storage for open-source packages.
 * 
 */

// ---------------- INSTALLING PACKAGES ------------------

/**
 * npm install < package-name > : registry se package ko dhundh k la k install kar dega.
 * 
 * --save-exact: exact specified version
 */

// ----------------- nodemon -----------------

/**
 * jo bhi changes kar rahe hain server me wo apne aap le lie jae, 
 * humko bar bar server kill kar k restart na karna pade. 
 * 
 * npm install nodemon --save-dev
 * 
 * Ye sirf dev environment me chahiye, qki production me hum ek ek line to change karenge nahi. 
 * Ek bar me code update kar k deploy karenge. 
 * 
 * Jab aap install command run karoge tuh package.json me add apne aap ho jaega, why is this required ?
 * package.json me add is lie hota hai taki project share karne me easy pade, package.json se dusre ko
 * pata chal jae kaun kaun se packages chahiye. 
 * 
 */