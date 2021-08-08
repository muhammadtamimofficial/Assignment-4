/*  problem 1 */
/* ------------------------------
    Seer to mon converter start. 
   ------------------------------*/

function seerToMon(number) {
    /* If input is string */
    if (typeof number == 'string') {
        console.log("Please, Give me number");
    }
    /* If input is positive number */
    else if (0 < number) {
        let seer = number / 40;
        mon = seer;
        return mon;
    }
    /* If input is negative number */
    else if (0 > number !== -0) {
        console.log("Sorry, your number is not valid give me positive number");
    }
    /* If have a some problem */
    else {
        console.log("Please, Try try again");
    }
}
/* This is input variable */
let total = seerToMon(40);
if (0 < total) {
    console.log(total);
}

/* ---------------------------
    Seer to mon converter end.
   --------------------------- */


/* problem 2 */
/* --------------------
     totalSales start
   --------------------*/

/* This is product info */
let cart = [
    { name: 'shirt', price: 100, quantity: 5 },
    { name: 'pant', price: 200, quantity: 3 },
    { name: 'shoe', price: 200, quantity: 2 }
]
function totalSales(number) {
    let cartTotal = 0;
    for (let product of cart) {
        const totalProduct = product.price * product.quantity;
        cartTotal = cartTotal + totalProduct;
    } return cartTotal;
}
let totalprice = totalSales();
console.log(totalprice);

/* --------------------
      totalSales end
   --------------------*/