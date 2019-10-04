// HTTP or HTTPS request without request package

const https = require('https') //is not necessary to install https package because is a Node base library

const url = 'https://api.aerisapi.com/observations/torino,it?client_id=tCpPcAJT7b9v3Yjnpigg5&client_secret=F2htG8UjXvwvy9aym1PNolgmuWqBPY6GjPOgidnI'

const request = https.request(url, (response) => {
    let data=''

    response.on('data', (chunk) => {
        data = data + chunk.toString() //converto il buffer di risposta in string in modo da poterlo leggere
    })

    response.on('end', () => {
        const body = JSON.parse(data) //così diventa JSON
        console.log(body)
    })

})

//con .on rimani in attesa di un evento ad esempio data oppure error dal server
request.on('error', (error) => {
    console.log('An error ', error);
})

request.end()