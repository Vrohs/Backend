// function getWeather() {

//     return new Promise(function (resolve, reject) {

//         setTimeout(() => {
//             resolve('sunny')
//         }, 100)
//     })
// }



// function getWeatherEmoji(weather){

//     return new Promise(function(resolve, reject){

//         setTimeout( () => {

//             switch(weather){

//                 case 'sunny': resolve('🌞')
//                 break

//                 case 'cloudy': resolve('☁️')
//                 break

//                 default: resolve('No emoji for this one')

//             }
//         }, 100)
//     })
// }

// function onResolve(data){

//     console.log(`resolved: ${data}`)
// }

// function onReject(error){

//     console.log(`rejected 😣: ${error}`)
// }

// const newPromise = getWeather();

// newPromise
//     .then(getWeatherEmoji)
//     .then(onResolve, onReject)



const fs = require('fs').promises;
const path = require('path');

async function readDirRec(dir) {

    let files = await fs.readdir(dir);
    for (let file of files) {

        let fullPath = path.join(dir, file);
        
        let stat = await fs.stat(fullPath);
        if (stat.isDirectory()) {

            console.log(`Directory: ${fullPath}`);
            await readDirRec(fullPath); 
            
        } else {

            console.log(`File: ${fullPath}`);
        }
    }
}


readDirRec('./contents')
    .then(() => console.log('Done reading directories recursively.'))
    .catch((err) => console.error('An error occurred:', err));
