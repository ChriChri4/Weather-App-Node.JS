// NPM used: request
//Start the project with npm init -y to create the default project file (json)

const request = require('request');

const url = 'https://api.aerisapi.com/observations/seattle,wa?client_id=tCpPcAJT7b9v3Yjnpigg5&client_secret=F2htG8UjXvwvy9aym1PNolgmuWqBPY6GjPOgidnI'

request({url: url,json:true}, (error,response) => {
    //const data = JSON.parse(response.body) //recupero la proprietà body e la salvo in data
    //console.log(data.response.ob.weather) // impostando l'opzione jason:true lo fornisce già in modalità json
    console.log('A Seattle l umidità è di ' + response.body.response.ob.humidity + '% con '+ response.body.response.ob.tempC + 'C°')
    /*///////////////////////////////////////////////
    / RICORDATI CHE SE UN JSON ha le parentesi [] è un array e devi accederci tramite indice 
    *////////////////////////////////////////////////
    //console.log('ok');
})

const urlMap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2hyaXMzNiIsImEiOiJjazFiM3BmNzcyYm4wM2NuaTZkcG40cDl0In0.XTHKJE05WYuKvwkvR4s-0A&limit=1'


request({url:urlMap,json:true}, (error,response) => {
    console.log('Le coordinate di Los Angeles sono '+ response.body.features[0].geometry.coordinates[0] + ' longitudine e '+ response.body.features[0].geometry.coordinates[1] +' latitudine')
})