import {Login, IUsers} from './interface';

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string
};

class Employee implements Login {
  id: number;
  name: string;
  address: Address;
  constructor(id: number, name: string, address: Address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
  Login(): IUsers {
    return {id :1, name : "dort", email : ""}
  }
  get empId(): number {
    return this.id;
  }
  set empId(id: number) {
    this.id = id;
  }
  getNameWithAddress(): string {
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
  id: number;
  name: string;
  empId: number;

  constructor(id: number, name: string, empId: number) {
    this.id = id;
    this.name = name;
    this.empId = empId;
  }
}
let dept = new Department(1, "Psychology", emp1.id);
let dept2 = new Department(2, "Physics", emp2.id);
console.log(dept, dept2);


class Person {
  private _age!: number;
  private _firstName!: string;
  private _lastName!: string;
  // constructor(_age: number, _firstname: string, _lastname: string) {
  //   this._age = this.age;
  //   this._firstName = _firstname;
  //   this._lastName = _lastname;
  // }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = theAge;
  }
  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error('Invalid first name.');
    }
    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error('Invalid last name.');
    }
    this._lastName = theLastName;
  }
  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
let person = new Person();
person.age = 10;
person.firstName = "asas";
person.lastName ="asaew";
console.log(person.age, person.getFullName());