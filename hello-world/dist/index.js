"use strict";
function rolldice(array) {
    return Math.floor(Math.random() * array.length);
}
function getRandom(as, bs) {
    const a = as[rolldice(as)];
    const b = bs[rolldice(bs)];
    return [a, b];
}
const names = [
    "Amelia",
    "Ava",
    "Benjamin",
    "Charlotte",
    "Elijah",
    "Emma",
    "Evelyn",
    "Harper",
    "Henry",
    "Isabella",
    "James",
];
const numbers = [151, 321, 121, 365, 789, 456, 234, 215, 659];
const ans = getRandom(names, numbers);
const [randomName, randomNum] = getRandom(names, numbers);
console.log(ans);
console.log(randomName, randomNum);
const texts = ["A", "B"];
//# sourceMappingURL=index.js.map