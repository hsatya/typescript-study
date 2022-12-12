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
// function calculateTax(income: number, taxYear?: number): number {
//   if ((taxYear || 2022) < 2022) return income * 1.2;
//   return income * 1.3;
// }

// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10000);

//////////////////////////////////////////////////
// Objects
// let employee: {
//   id: number;
//   name: string;
// } = { id: 1, name: "" };

// let employee: {
//   id: number;
//   name?: string;
// } = { id: 1 };

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => console.log(date),
// };

// employee.id = 0; // readonly cannot modify the value
// employee.name = "Harshit";

//////////////////////////////////////////////////
// Type Aliases
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "",
//   retire: (date: Date) => console.log(date),
// };

//////////////////////////////////////////////////
// Union Types
// function kgs2lbs(weight: number | string): number {
//   // Narrowing
//   if (typeof weight === "number") return weight * 2.2;
//   return parseInt(weight) * 2.2;
// }

//////////////////////////////////////////////////
// Intersection Types
// let weight: number & string; // Both a number and a string at the same time but it's not possible

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

//////////////////////////////////////////////////
// Literals Types
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";
// let metric: Metric = "cm";

//////////////////////////////////////////////////
// Nullable Types
// function greet(name: string | null | undefined): void {
//   if (name) console.log(`Hello, ${name.toUpperCase()}`);
//   else console.log("Namaste!");
// }

// greet(null);

//////////////////////////////////////////////////
// Optional Chaining
// type Customer = {
//   birthDay?: Date;
// };

// function getCustomer(id: Number): Customer | null | undefined {
//   return id === 0 ? null : { birthDay: new Date() };
// }

// let customer = getCustomer(1);
// Optional property access operator ?.
// console.log(customer?.birthDay?.getFullYear());

// Optional element access operator
// customers is an array
// if(customers !== null && customers !== undefined) customers[0]
// or
// customers?.[0]

// Optional call
// let log: any = (message: string) => console.log(message);
// let log: any = null;
// log?.("a");

////////////////////////////////////////////////// Generic //////////////////////////////////////////////////
// Generic Funtions
// function getRandom<T>(array: T[]): T {
//   const diceRoll = Math.floor(Math.random() * array.length);
//   return array[diceRoll];
// }

// const names = [
//   "Amelia",
//   "Ava",
//   "Benjamin",
//   "Charlotte",
//   "Elijah",
//   "Emma",
//   "Evelyn",
//   "Harper",
//   "Henry",
//   "Isabella",
//   "James",
// ];

// const randomName = getRandom<string>(names);
// console.log(randomName, typeof randomName);

// const numbers = [151, 321, 121, 365, 789, 456, 234, 215, 659];
// const randomNumber = getRandom<number>(numbers);
// console.log(randomNumber, typeof randomNumber);

//////////////////////////////////////////////////
// Multiple Generic Parameters
function rolldice(array: any[]): number {
  return Math.floor(Math.random() * array.length);
}

function getRandom<A, B>(as: A[], bs: B[]): [A, B] {
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

const ans = getRandom<string, number>(names, numbers);
const [randomName, randomNum] = getRandom<string, number>(names, numbers);
console.log(ans);
console.log(randomName, randomNum);


///////////////////////////////////////////////////////////
// let printName: (name: string) => never;

// type Person = {
//   name: string;
//   age?: number;
// };

// interface Person {
//   name: string;
//   age?: number;
// }

// let person1: Person = {
//   name: "Harshit",
//   age: 36,
// };

// let lotsOfPeople: Person[] = [
//   {
//     name: "Eve",
//   },
//   {
//     name: "Simon",
//     age: 35,
//   },
// ];

// type X = {
//   a: string;
//   b: number;
// };

// type Y = X & {
//   c: string;
//   d: number;
// };

// let y: Y = {
//   c: "sdddd",
//   d: 25,
// };

interface Person {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}


// Generic Array Systax
const texts: Array<string> = ["A", "B"];
