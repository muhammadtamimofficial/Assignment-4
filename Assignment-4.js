/*  problem 1 */
/* ------------------------------
    Seer to mon converter start. 
   ------------------------------*/

function seerToMon(number) {
    /* If input is string */
    if (typeof number == 'string') {
        let total = "Please, Give me number";
        return total;
    }
    /* If input is positive number */
    else if (0 < number) {
        let seer = number / 40;
        mon = seer;
        return mon;
    }
    /* If input is negative number */
    else if (0 > number !== -0) {
        let total = "Sorry, your number is not valid give me positive number";
        return total;
    }
    /* If have a some problem */
    else {
        console.log("Please, Try again");
    }
}
/* This is input variable */
let total = seerToMon(80);
console.log(total);

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



/*     Problem 3 */

/*  ----------------------
      deliveryCost start
    ----------------------*/


function deliveryCost(number) {

    const first100Tshirt = 100;
    const second200Tshirt = 80;
    const thirdRestTshirt = 50;
    /* If input is string */
    if (typeof number == 'string') {
        var total = "Please, Give me number";
        return total;
    }

    /* If input is negative number */
    else if (0 > number) {
        let total = "Sorry, your number is not valid give me positive number";
        return total;
    }

    /* If input is positive number */
    /* first100Tshirt */
    else if (number <= 100) {
        let totalCost = number * first100Tshirt;
        return totalCost;
    }
    /* second200Tshirt */
    else if (number <= 200) {
        const firstTshart = 100 * first100Tshirt;
        const restTshirt = number - 100;
        const secondTshirt = restTshirt * second200Tshirt;
        const totalCost = firstTshart + secondTshirt;
        return totalCost;
    }

    /* If T-shart more then 200 */
    else if (200 < number) {
        const firstTshart = 100 * first100Tshirt;
        const secondTshirt = 100 * second200Tshirt;
        const restNumber = number - 200;
        const restTshirt = restNumber * thirdRestTshirt;
        const total = firstTshart + secondTshirt + restTshirt;
        return total;
    }
    else {
        let total = "Please, Try again "
        return total;
    }

}
/* This is input variable */
let totalCost = deliveryCost(500);
console.log(totalCost);


/*  ----------------------
      deliveryCost end
    ----------------------*/


/*   Problem 4    */
/* ----------------------------------
       Find five letter  name start
   ----------------------------------*/


function perfectFriend(number) {
    for (let friend of myFriends) {
        if (friend.length == 5) {
            return friend;
        }

    }
}
let myFriends = ["Jon", 'Tamim', "Mojdalif", "Mark", "Kasim"]
let lergestFriend = perfectFriend(myFriends)
console.log(lergestFriend);

/* ----------------------------------
       Find five letter  name end
   ----------------------------------*/