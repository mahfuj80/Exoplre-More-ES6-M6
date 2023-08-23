const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num => num * 2)
// console.log(doubled);
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);
const halves = numbers.map(num => num / 2);
// console.log(halves);
const firends = ['Tom', 'John', "Micheal", 'Oliver'];

const lengths = firends.map(frnd => frnd.length)
// console.log(lengths);
const fristLetter = firends.map(friend => friend[0]);
console.log(fristLetter);