// NPM used: request
//Start the project with npm init -y to create the default project file (json)

const request = require('request');
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// request({url: url,json:true}, (error,response) => {
//     if (error) 
//     {
//         console.log('Unable to connect to the weather service')
//     } else if (response.body.error) {
//         console.log(response.body.error.description)
//     } else {
//     //const data = JSON.parse(response.body) //recupero la proprietà body e la salvo in data
//     //console.log(data.response.ob.weather) // impostando l'opzione jason:true lo fornisce già in modalità json
//     console.log('A Seattle l umidità è di ' + response.body.response.ob.humidity + '% con '+ response.body.response.ob.tempC + 'C°')
//     /*///////////////////////////////////////////////
//     / RICORDATI CHE SE UN JSON ha le parentesi [] è un array e devi accederci tramite indice 
//     *////////////////////////////////////////////////
//     //console.log('ok');
//     }
// })

const place = process.argv[2]

if(!place)
{
    console.log('Please provide a place')
} else {
    // Without the Object destructuring
    // geocode(place, (error,data) => {
    //     if(error){
    //         return console.log(error)
    //     }

    //     forecast(data.latitude,data.longitude, (error, forecastData) => {
    //         if(error) {
    //             return console.log(error)
    //         }

    //         console.log(data.location)
    //         console.log(forecastData)
            
    //     })
    // })

    //With the Object destructuring
    geocode(place, (error,{latitude,longitude,location}) => {
            if(error){
                return console.log(error)
            }
    
            forecast(latitude,longitude, (error, forecastData) => {
                if(error) {
                    return console.log(error)
                }
    
                console.log(location)
                console.log(forecastData)
                
            })
        })
}
