
function perfectFriend(myFriends) {
    for (let friend of myFriends) {
        if (typeof friend !== "string") {
            return "Please give me string"
        }
    }

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
//     for (let friend of myFriends) {
//         if (typeof item !== "string") {
//             let total = "give me a string"
//         }
//         if (friend.length == 5) {
//             return friend;
//         }

//     }
// }
// let myFriends = [4, 65, 65, 564, 54]
// let lergestFriend = perfectFriend(myFriends)
// console.log(lergestFriend);