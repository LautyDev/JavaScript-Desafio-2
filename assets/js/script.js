class Product {
    constructor(name, stock, price) {
        this.name = name
        this.stock = stock
        this.price = price * 1.21
    }
}

const product = new Product('Tesla Model PI', 100, 1000)
const product2 = new Product('Tesla Model 3', 35, 1000000)
const product3 = new Product('Tesla Model S', 78, 2000000)

const order = prompt('Escriba su orden.')

if (order.toUpperCase() === product.name.toUpperCase() || order.toUpperCase() === product2.name.toUpperCase() || order.toUpperCase() === product3.name.toUpperCase()) {
    if (order.toUpperCase() === product.name.toUpperCase()) {
        alert('Perfecto su ' + product.name + ' fue ordenado, el precio final es: ' + product.price)
    }
    
    if (order.toUpperCase() === product2.name.toUpperCase()) {
        alert('Perfecto su ' + product2.name + ' fue ordenado, el precio final es: ' + product2.price)
    }
    
    if (order.toUpperCase() === product3.name.toUpperCase()) {
        alert('Perfecto su ' + product3.name + ' fue ordenado, el precio final es: ' + product3.price)
    }
} else {
    alert('!Lo sentimos! No contamos con ese producto.')
    window.location.reload()
}