function add(num1: number, num2: number, num3?: number) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(4, 6));
console.log(add(4, 6, 3));

const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;
console.log(sub(8, 5));
console.log(sub(8, 5, 3));

const mul = function (num1: number, num2: number): number {
    return num1 * num2;
}
console.log(mul(8, 5));

//rest parameter
function restadd(num1:number, num2:number,...num3:number[]):number{
    return num1 + num2 + num3.reduce((a,b)=>a+b);
}
let numr:number[] = [2,3,4,5,6,7,8,9];
console.log("Show rest parameter addition: " + restadd(1,2,...numr));
console.log("Show rest parameter addition: " + restadd(1,2,...[2,3,4,5,6,7,8]));

//types
function getItems<Type>(item: Type[]):Type[]{
    return new Array<Type>().concat(item);
}
let concatres= getItems<number>([1,2,3,4,5]);
let concatString = getItems<string>(["as","sa"]);
console.log(concatres, concatString);