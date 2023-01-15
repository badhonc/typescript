"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employees = { id: 1, name: "aasa", email: "", salary: 2223232 };
let [user1, user2, ...restUsers] = [
    { id: 1, name: "abid", email: "" },
    { id: 2, name: "abed", email: "" },
    { id: 3, name: "abad", email: "asdas" },
    { id: 4, name: "aabad", email: "asdasasda" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
