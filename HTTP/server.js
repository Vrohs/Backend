const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {


    // res.write("welcome to server")
    // res.end()
    // console.log(req.url)

    if (req.url == "/home.html") {

        fs.readFile("./home.html", "utf-8", (err, data) => {

            if (err) {

                res.write("hmmm...can't reach page 🙂")
            } else {

                res.write(data)
            }
            res.end()
        })
    }

    if (req.url == "/style.css") {

            fs.readFile("./style.css", "utf-8", (err, data) => {

                if (err) {

                    res.write("Hmmm...")
                } else {

                    res.write(data)
                }
                res.end()
            })
        }
    })

        // res.write("<h1> home page, you succesfully reached homepage 🌞</h1>")
        // res.end()



const port = 3000;

server.listen(port, (err) => {

    console.log(`server is running at port: ${port}`)
})