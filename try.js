// function myFrieands(num1) {
//     let higestage = freandsage;
//     for (let i = 0; i < freandsage.length; i++) {
//         const element = freandsage[i];
//         if (element.length > higestage.length) {
//             higestage = element;
//         }
//         // higestage=element;
//     } return higestage;
// }
// const frieand =  ['Tamim', "Jon", "Kasim", "Mark", "Mojdalif"];
// let oldestFrieand = myFrieands(frieand)
// console.log(oldestFrieand);

// function perfectFriend(number) {
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         if (myFriends.length <= 5) {
//             return fr
//         }

//     }
// }
// let myFriends = ['Tamim', "Jon", "Kasim", "Mark", "Mojdalif"];
// let lergestFriend = perfectFriend(myFriends)
// console.log(lergestFriend);



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



// function perfectFriend(number) {
//     let friend = 0;
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         // console.log(element);
//         if (element > friend) {
//             friend = element;
//         } return friend;
//     }
// }
// let myFriends = ['Tamim', "Jon", "Kasim", "Mark", "Mojdalif"]
// let bestFriend = perfectFriend(myFriends);
// console.log(bestFriend);