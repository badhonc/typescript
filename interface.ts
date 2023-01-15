export interface IUsers{
    id : number;
    name : string;
    age? : number;
    email : string;
}

//let users : IUsers = {id :1, name : "dort", email : ""};
//object desruction
//let {name: userName, email:userLogin}: IUsers = {id:7,name:"jonh",email:""};
//console.log(userName);

interface IEmployee extends IUsers{
    salary : number;
}
let employees : IEmployee = {id:1, name : "aasa", email:"",salary:2223232};

export interface Login{
    Login() : IUsers;
}

let [user1,user2, ...restUsers] : IUsers[] = [
    {id :1, name:"abid", email:""},
    {id :2, name:"abed", email:""},
    {id :3, name:"abad", email:"asdas"},
    {id :4, name:"aabad", email:"asdasasda"},
]

console.log(user1);
console.log(user2);
console.log(restUsers);