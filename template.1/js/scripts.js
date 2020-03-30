// let URL = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";

// fetch(URL).then(function (response) {
//     return response.json();
// }).then(function (data) {
//     console.log(data.people);
//     return data.people;
// }).then(function (peepsURLs) {
//     console.log(peepsURLs);
//     peepsURLs.forEach(function (thisURL) {
//         fetch(thisURL).then(function (response1) {
//             return response1.json();
//         }).then(function (res1string) {
//             console.log(res1string);
//         })
//     })

// })


// let userNumber = prompt("Give me a number");
// let userNumber2 = prompt("Gimme another one");

function displayHighNum(n1 = 5, n2 = 10) {


    if (n1 > n2) {
        alert(`${n1} is higher`)
    } else if (n1 < n2) {
        alert(`${n2} is higher`)
    }
    else { alert("they samsies bruh") }
}

function shorterDisplayHighNum(num1, num2) {
    alert("The higher number is " +
        (num1 > num2 ? num1 : num2))
}
// MyObject =
let hello = () => {
    var variableimusinginthisfunction = 15;
    return 20;
}
let ourArray = ["hello", "howdy", "hola", "gotcha", "amigo"]
let [word1, word2, ...rest] = ourArray
console.log(rest)
console.log(word1, word2)


    // shorterDisplayHighNum(userNumber, userNumber2);

    // displayHighNum(userNumber, userNumber2);
