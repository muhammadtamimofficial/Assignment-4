let cart = [
    { name: 'shirt', price: 100, quantity: 5 },
    { name: 'pant', price: 200, quantity: 3 },
    { name: 'shoe', price: 200, quantity: 2 }
]
function totalSales(cart) {
    let cartTotal = 0;
    for (let product of cart) {
        if (typeof product.quantity !== 'number') {
            return "Please give me number"
        }
    }
    for (let product of cart) {
        const totalProduct = product.price * product.quantity;
        cartTotal = cartTotal + totalProduct;
    } return cartTotal;
}
let totalprice = totalSales(cart);
console.log(totalprice);