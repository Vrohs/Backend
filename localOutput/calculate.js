
const fs = require('fs');
const arithmetic = require('./functions.js');

const result = {
    addition: arithmetic.add(10, 5),
    subtraction: arithmetic.subtract(15, 2),
    multiplication: arithmetic.multiply(260, 6),
    division: arithmetic.divide(2500, 5)
};



fs.writeFile('output.json', JSON.stringify(result, null, 2), err => {
   
    if (err) {

        console.error(err);
        return;
    }
    
    console.log('result saved to output.json');
});


