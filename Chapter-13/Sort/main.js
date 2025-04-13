const numbers = [50, 12, 25, 8, 15];
numbers.sort((a, b) => a - b);
console.log(numbers);

const num = [13, 2, 45, 9, 6];
num.sort((a, b) => b - a);
console.log(num);

const friends = [
  { name: "Ali", age: 29 },
  { name: "Sara", age: 22 },
  { name: "Tariq", age: 35 },
];
friends.sort((a, b) => a.age - b.age);
console.log(friends);

const names = ["nlice", "Bob", "Charlie", "Aavid"];
names.sort();
console.log(names);
