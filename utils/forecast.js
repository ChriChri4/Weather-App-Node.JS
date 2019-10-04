const request = require('request')

const forecast = (address,callback) => {

const url = 'https://api.aerisapi.com/observations/'+ encodeURIComponent(address)/*torino,it*/+ '?client_id=tCpPcAJT7b9v3Yjnpigg5&client_secret=F2htG8UjXvwvy9aym1PNolgmuWqBPY6GjPOgidnI'

request({url:url,json:true},(error,response) => {
    if(error)
    {
        callback('Unable to connect with the weather service',undefined)
    } else if (response.body.error)
    {
        callback(response.body.error.description,undefined)
    } else {
        callback(undefined,'La temperatura a '+address+' è di '+response.body.response.ob.tempC+' invece il tempo è '+response.body.response.ob.weather)
    }
})
}

module.exports = forecast