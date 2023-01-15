let fname, lname : string;
fname = "sarah"; 
lname = "sar";
let fullname = fname.toUpperCase() + lname.toUpperCase();
let newentry:string[];
newentry = ["aas","sadfew","saas"];
newentry.push(fullname);
console.log(newentry);

let numList:number[];
let numList2:Array<number>;
numList = [1,2,3,4,5];
numList2 = [6,15,11,7,8,9];
let results = numList.filter(x => x>2);
let results2 = numList2.sort(function(a,b){return a-b});
let sum = results2.reduce((a,b) => a+b);
let empf = newentry.find(emp => emp =="saas");
console.log(results);
console.log(results2);  
console.log(empf);
console.log(sum);



const enum color{
    red, green, blue
}
let c : color = 2;
console.log(c);