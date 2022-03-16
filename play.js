const connect = require('./client');
const setupInput = require('./input')
// establishes a connection with the game server


console.log("Connecting ...");
let connection = connect();

setupInput(connection);
