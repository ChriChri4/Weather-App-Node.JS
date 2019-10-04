setTimeout(() =>{
    console.log('2 seconds')
},2000)

const geocode = (address,callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }

    callback(data)
}

// const data = geocode('Philadelphia')
// console.log(data)
geocode('hola', (data) => {
    console.log(data)
})

geocode('hola 1',() => {
    console.log('j');
})

const add = (a,b,callback) => {
    setTimeout(() => {
        callback(a+b)
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})