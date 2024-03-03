const http = require('http')


const newServer = http.createServer((req, res) => {

    console.log('server started')
    res.end('hello')
})


const port = 3000

newServer.listen(port, (err) => {

    if(err) console.error(err)

    console.log(`server running om ${port}`)
})


