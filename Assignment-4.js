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