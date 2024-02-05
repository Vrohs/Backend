// const path = require("path");

// console.log(path.basename(__dirname)); // absolute path


// const EventEmmitter = require('events');
// const eventEmmitter = new EventEmmitter();

// eventEmmitter.on('start', () => {

//     console.log("🙋🙋");
// })

// eventEmmitter.emit('start');


import EventEmmitter from 'events';
const eventEmmitter = new EventEmmitter();

eventEmmitter.on('start', (name) => {

    console.log("🙋🙋", `${name}`);
})

eventEmmitter.emit('start', 'Vivek Rohtasvi');