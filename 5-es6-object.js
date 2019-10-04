//Object property shorthand

const name = 'Christian'
const userAge = 24

const user = {
    name, //shorthand, invece che come age sotto
    age: userAge,
    location: 'Torino'
}

console.log(user)

//Object desctructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    setPrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label:productLabel,stock,rating,newProductProperty = 5} = product //in questo modo crei delle variabili per non andare a modificare per sbaglio i valori all'interno dell'oggetto product

// console.log(label) qui il programma fallisce perchè gli abbiamo detto di creare una variabile productLabel da label di product ma la variabile label non esiste perchè si chiama productLabel 
console.log(productLabel)
console.log(stock)
console.log(rating) //verrà fuori undefined perchè rating non si trova nell'oggetto product
console.log(newProductProperty) //creata nuova proprietà all'interno di product

/*const transaction = (type, myProduct) => {
    const {label} = myProduct
} QUESTO LO PUOI FARE COSI' COME SOTTO*/

const transaction = (type, {label,stock} = myProduct) => {
    console.log(type, label, stock)
}

transaction('order', product)
