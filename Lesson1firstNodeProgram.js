// get http fs module in variable http
const fs = require('fs');

/*
* output.txt - name of the file
* second arg: what to write
* third arg: error handling function
*/
fs.writeFile('output.txt','Writing file', (err) => {
    if(err) console.log('error occurred');
    else console.log('File written successfully!');
})