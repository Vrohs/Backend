const http = require("http");


const server = http.createServer((req, res) => {

    res.write("welcome to the server");
    res.end();
})


const port = 3000;

server.listen(port, (err) => {

    if(err){

        console.log("err");
    } else {

        console.log(`server is running at port ${port}`)
    }
})