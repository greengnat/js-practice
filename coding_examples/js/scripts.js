let var1 = true;
let var2 = false;
let IWannaTalk = true;

if (IWannaTalk) {
    console.log("hello")
}

let Will = {
    hair: "black",
    eyes: "hazel",
    wantsToTalk: "Yes",
    thoughts: "smoking weed",
    karatekick: () => {
        console.log("HYAAAAAAA".toLowerCase())
    }
}


if (Will.wantsToTalk == "yes".toLowerCase()) {
    console.log(Will.thoughts)
}

Will.karatekick()

let numberArray = [0, 1, 2, 3, 4, 5]

numberArray.forEach((number) => {
    console.log(number)
})

function SaySomething(wordsToSay) {
    console.log(wordsToSay)
}

SaySomething("These are the things I'm saying")
SaySomething("These are different words")

button = document.querySelector(".button");


button.addEventListener("click", function () {
    alert("you clicked me")
})