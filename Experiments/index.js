const http = require('http')



const newServer = http.createServer((req, res) => {

    console.log('new req. receieved!')
    res.end('Hello')
})



const port = 3000



newServer.listen(port, () => {

    console.log('server started')
})




