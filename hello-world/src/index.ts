// console.log("Hello World");
//////////////////////////////////////////////////
// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);
//////////////////////////////////////////////////
// let sales = 123_456_789;
// let course: string = "Typescript";
// let is_published: boolean = true;
// let level;
//////////////////////////////////////////////////
// function render(document) {
//   console.log(document);
// }
// function render(document: any) {
//   console.log(document);
// }
// function render(document) {
//   console.log(document);
// }
//////////////////////////////////////////////////
// Arrays
// let numbers: number[] = [1, 2, 3];
// let numbers = [1, 2, 3];

// let numbers = []; // now the type of array will be any
// numbers[0] = 1;
// numbers[1] = "a";

// let numbers: number[] = [];
// numbers[0] = 1;
// numbers[1] = "a"; // now compiler will through an error.
// let numbers: number[] = [];
// numbers.forEach(n => n.);

//////////////////////////////////////////////////
// Tuples
// 1, "Harshit"
// let user: [number, string] = [1, "Harshit"];
// user[2] = 0; // This will through an error
// user.push(2); // This will not through an error

//////////////////////////////////////////////////
// Enums
// Size of T-Shirt
// const small = 1;
// const medium = 2;
// const large = 3;

// enum Size {
//   Small, // default value is 0
//   Medium,
//   Large,
// }

// enum Size {
//   Small = 1, //
//   Medium, // now its 2
//   Large, // its 3
// }

// enum Size {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

//////////////////////////////////////////////////
// Functions
function calculateTax(income: number) {
  if (income < 50_000) return income * 1.2;

  return income * 1.3;
}
