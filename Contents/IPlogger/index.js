const http = require('http');
const fs = require('fs');


const newServer = http.createServer((req, res) => {


    console.log(req.headers);
   
    let date = new Date("2024");

    const log = `${date}: New req received\n`;

    fs.appendFile("log.txt", log, () => {

        console.log("user logged in");
    })


    res.end("Hello from server");
})



const port = 3000;

newServer.listen(port, () => {

    console.log(`Server listening on port: ${port}`);
})
