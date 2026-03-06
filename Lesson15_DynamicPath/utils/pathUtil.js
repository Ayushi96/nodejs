// Core Module
const path = require('path')

// main --> entry point of the application and the below line gives
// you the absolute path of the main file. 
module.exports = path.dirname(require.main.filename);