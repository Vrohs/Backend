const fstruct = require('fs')


// Synchronous or Blocking style

fstruct.writeFileSync("./testfile.txt", "Hello World")


// Async

fstruct.writeFile("./testfile.txt", "Hello World Async", (err) => {})

// fstruct.appendFile("./testfile.txt", "Hello World Async\n", (err) => {})


// Sync

const result = fstruct.readFileSync("./contact_extractor.py", "utf-8")
console.log(result)


// Async doesn't return any value, therefore instead of storing it in a variable, we get the result through a callback. 
// Atleast we know a difference hey 🙂

fstruct.readFile("./contact_extractor.py", "utf-8", (err, result) => {

    if(!err){

    console.log(`${result}`)
    } else {

        console.error(`${err}`)
    }
})