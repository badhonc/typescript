"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Login() {
        return { id: 1, name: "dort", email: "" };
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address.street},${this.address.city},${this.address.state},${this.address.pin}`;
    }
}
let emp1 = new Employee(1, "John", {
    street: "12",
    city: "Dhaka",
    state: "Bangladesh",
    pin: "1206",
});
let emp2 = new Employee(2, "kan", {
    street: "121",
    city: "Dhaka",
    state: "Bangladesh",
    pin: "1204",
});
// emp1.id = 1; emp2.id =2;
// emp1.name = "John"; emp2.name = 'Sad';
// emp1.address = "asdasdasd"; emp2.address = 'asoo iai as';
console.log(emp1);
let addressInfo = emp1.getNameWithAddress();
console.log(addressInfo);
class Department {
    constructor(id, name, empId) {
        this.id = id;
        this.name = name;
        this.empId = empId;
    }
}
let dept = new Department(1, "Psychology", emp1.id);
let dept2 = new Department(2, "Physics", emp2.id);
console.log(dept, dept2);
class Person {
    // constructor(_age: number, _firstname: string, _lastname: string) {
    //   this._age = this.age;
    //   this._firstName = _firstname;
    //   this._lastName = _lastname;
    // }
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirstName) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(theLastName) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
let person = new Person();
person.age = 10;
person.firstName = "asas";
person.lastName = "asaew";
console.log(person.age, person.getFullName());
//# sourceMappingURL=class.js.map