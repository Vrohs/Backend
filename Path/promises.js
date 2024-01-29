function getWeather() {

    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            resolve('sunny')
        }, 100)
    })
}



function getWeatherEmoji(weather){

    return new Promise(function(resolve, reject){

        setTimeout( () => {

            switch(weather){

                case 'sunny': resolve('🌞')
                break
                
                case 'cloudy': resolve('☁️')
                break

                default: resolve('No emoji for this one')

            }
        }, 100)
    })
}

function onResolve(data){

    console.log(`resolved: ${data}`)
}

function onReject(error){

    console.log(`rejected 😣: ${error}`)
}

const newPromise = getWeather();

newPromise
    .then(getWeatherEmoji)
    .then(onResolve, onReject)
