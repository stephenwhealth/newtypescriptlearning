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