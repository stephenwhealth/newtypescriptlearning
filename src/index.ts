// number
let age: number= 49;

// string
let username: string = "ebule";
let user: string = `ebus`;

// boolean
let loggedin: boolean = true;

// null
let data: null = null;

// undefined
let value: undefined = undefined;

// any
let userprofile: any = true;

// unknown
let type: unknown = 'you can input anything';

// void
// its mainly use for a function return type, indicating that the return value will be absent

// never
// it represent value that never occcurs
// it is used when a function never finishes
// when a function always throws an error

// bigint
let largenumber: bigint = 898393749393873498393n;

// symbol
// its used to create a unique identifiers

let id: Symbol = Symbol("id");

let sym1 = Symbol("key");
let sym2 = Symbol("key");

console.log(sym1 === sym2);


// how to implement arrays

let numbers: number[] = [1, 2, 3, 4, 5];

let String : string[] = ["steve", "me"];

// or

let mynumber: Array<number> = [1, 2, 3, 4];

let mystring : Array<string> = ["ebus", "alex"];

// or

let myown = [2, 3, 4];
// number[]


let items = [];
// any[]


// multi dimmention array
let matrix: number[][] = [
    [1,2],
    [4,5]
];

// topple
// difining arrays with missed types
let mixed: (string|number)[] = [2, "alexis"];
// or
let othermised: [string,number] = ['mywon', 0];


// enum: it helps in defining a fixed set of name constants
// ennumeration: it allows us to define a group of related constants

enum Direction{
    up,
    down,
    left,
    right
}

let move: Direction = Direction.down;
console.log(move);


// string enum

enum Role{
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let userRole: Role = Role.Admin
console.log(userRole);


// INDEX SIGNATURES -- Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.


// TYPE ALLIAS -- Type aliases are used to give a type a new name. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you'd otherwise have to write by hand.


type User = {
    name: string,
    age: number
}


const student : User = {
    name: "ebus",
    age: 32
}


function printname(usr : User):string{
    return `${usr.name} is ${usr.age} years old`
}

// OR

type addme = (a:number, b:number)=> number;

const addition : addme = (a,b) =>{
    return a+b;
}

//  OR


type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};


// UNION AND INTERSECTION TYPES -- Union types allow us to define a variable that can hold multiple types. Intersection types allow us to combine multiple types into one.

type animal = { name: string };
type Bear = animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";


// OR


type employer ={
    name: string
}

type manager = {
    empid: number
}

type staff = employer & manager;

const person : staff ={
    name: "ebus",
    empid: 11
}


// OR

type A ={a:number};
type B ={b:number};

function printdata(data: A&B):string{
    return `a=${data.a}, b=${data.b}`
}

console.log(printdata({a:10, b:20}))



// optional parameter in Type

type Greet = (name?:string)=>string;

const greeting:Greet=(name)=>{
    return `hello` +(name || "guest")

}

console.log(greeting("ebus"));
console.log(greeting());


// INTERFACES -- Interfaces are used to define the shape of an object. They can be used to define the properties and methods that an object should have.

interface Rectangle {
  height: number;
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};


// INTERFACE MERGING -- Interface merging allows us to define multiple interfaces with the same name, and TypeScript will merge them into a single interface.

interface Point {
  x: number;
}   

interface Point {
  y: number;
}

const point: Point = {
  x: 10,
  y: 20
};  


// OR

interface Animal { 
    name: string; 
}; 

interface Animal { 
    age: number; 
};

const dog: Animal = { name: "Fido", age: 5 };


// EXTENDING INTERFACES -- Interfaces can extend other interfaces, allowing us to create a new interface that includes all the properties of the original interface.

interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredother: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

console.log(coloredother)

//                                              Optional interface

interface Users {
    name: string;
    age?: number
}

const details:Users={
    name: "odogwu"
}


const details2: User ={
    name: "boss",
    age: 32
}


//                                               FUNCTIONS

function greet(name:string){
    console.log('hello' +name)
}

greet("alex")


//                                             UNION TYPE
// union types allow us to define a variable that can hold multiple types. Intersection types allow us to combine multiple types into one.


function printeduser(id: number | string):string{

    return `id is` +id
}

// OR

function printlength(value: number | string){

    if(typeof value == "string"){
        return value.length;
    }
    return value.toString().length;
}

// OR

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
console.log(printStatusCode(404));
console.log(printStatusCode('404'));



//                                     typescript function return types
// the `: number` here specifies that this function returns a number

function getTime(): number {
  return new Date().getTime();
}


function addall(a: number, b:number):number{
    return a+b;
}

console.log(addall(5,10))



//                                               void return type
// The type void can be used to indicate a function doesn't return any value.

function printHello(): void {
  console.log('Hello!');
}



//                                              function parameters
// TypeScript allows us to specify the types of function parameters. This helps catch errors at compile time.

function multiply(a: number, b: number) {
  return a * b;
}

//                                              Normal Function

function greetme(name:string){
    return "hello" +name
}

console.log(greetme("ebule"))


//                                            optional parameters
// In TypeScript, we can specify that a parameter is optional by adding a question mark (?) after the parameter name.
// optional paremeter should come after the required parameter

function greetus(name?:string){

    if(name){
        return "hello" +name;
    }
    return "hello guest"
}

console.log(greetus());
console.log(greetus("ebule"));

// OR

function adds(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}


// OR

function greetUser(name:string, age?:number){
    console.log("hello" +name)
}


greetUser('alexis');
greetUser('ebule', 32);


// default parameter

function hello(name:string = "guest"):void{
    console.log("hii" +name)
}

hello();
hello("ebus");


//                                                named parameters
// TypeScript allows us to use named parameters in functions. This can make our code more readable and easier to understand.

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

//                                               Rest parameters
// TypeScript allows us to use rest parameters in functions. This allows us to pass an arbitrary number of arguments to a function.

function totalsum(...numbers: number[]):number{
    let total = 0;
    for(let num of numbers){
        total += num;
    }

    return total
}

console.log(totalsum(3,5,7,9,6));

// OR

function sum(...numbers: number[]) {
  return numbers.reduce((total, num) => total + num, 0);
}

// or

function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}


//                                               Arrow function in return type

const substract = (a:number, b:number):number =>{
    return a-b;
}

console.log(substract(10,5))


//                                              Object types in typescript
// using readonly will make the name or any value that is inserted into unable to change because its only to read

const users: {readonly name: string; age: number} = {
    name: "alexis",
    age: 22
}


//                                          OBJECT TYPE IN FUNCTION

function printuser(user:{name: string; age: number}):string{

    return `hello my name is ${user.name} i am ${user.age} years old`
}

console.log(printuser({name:"kaka", age:32}));


//                                        Narrowing with in operator

type Userss = {name:string};
type Admin = {role:string};

function printin(person: Userss|Admin){
    if("name" in person){
        console.log(person.name)
    }else{
        console.log(person.role)
    }
}

printin({name:"alexis"});
// or
printin({role:"Actor"});




//                                               LITTERAL TYPE
// Allowing a specific value or restricting a value for particular variable

let direction : "up" | "down";

direction = "up"
console.log(direction);

// OR
function moves(spaces: "up" | "down"){
    console.log(`moving` + spaces)
}

moves("down");


// OR

let dice : 1|2|3|3|5|6;
dice=1;
dice=2;
dice=3


// OR


type status = "success" | "error" | "loading";

type response = {
    Status: status
};

const res: response = {
    Status: "loading"
} ;


//                                               TYPE ASSUMPTION


let values : any = "hello typescript";
let length : number = (values as String).length;
console.log(length)

// OR

let val : any = "hello typescript";
let leng : number = (<string>val).length;
console.log(leng)


//                                              OPTIONAL CHAINING
// IT ALLOWS YOU TO SAFELY ACCESS PROPERTIES

const userprofile1 = {
    name: "ebus",
    address: {
        city: "luck"
    }
}

console.log(userprofile1.address?.city)

// OR USING AN ARRAY

const userprofile2 = [{name: "bubu", address:{city: "lucky"}}, null];
console.log(userprofile2[0]?.name);
console.log(userprofile2[1]?.name);

//                                          null callisting in Typescipt
// null or undefined
// ??

let value1 = null;
let result = value1 ?? "default"
// console.log(result) default


// ||
let value2 = 0;
let result1 = value2 || 100
// console.log(result1) default
// its seeing the 0 as a false when you use thr OR || operator

let value3 = 0;
let result2 = value3 ?? 100
// console.log(result2) 0
// this is giving the correct answer, you can only get the 100 when the value3 is either null or undefined



//                                       Discriminated unions in Typescript
// it is used to handle multiple object types

type Circle = {radius : number}
type Square = {side: number}

function getArea(shape: Circle|Square){
    if("radius" in shape){
        return shape.radius * shape.radius
    }else{
        return shape.side * shape.side
    }
}

getArea({radius:5})


//                                               DISCRIMINATED UNION

type Circle1 = {kind : "circle"; radius: number};
type Square1 = {kind: "square"; side: number};

function getAreas(shape: Circle1|Square1){

    if(shape.kind === "circle"){
        return Math.PI * shape.radius * shape.radius
    }else{
        return shape.side * shape.side
    }
}

const circlearea = getAreas({
    kind: "circle",
    radius: 5
})

console.log(circlearea);

//                                        THE UTILITY TYPES IN TYPESCRIPT
// it helps to modify existing types

type Manage = {
    id: number;
    name: string;
    email: string

}

//                                               Typescript casting 

let x: unknown = 'hello';
console.log((x as string).length);


