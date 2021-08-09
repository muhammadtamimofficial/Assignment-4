
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