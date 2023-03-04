function add (n1:number, n2:number){
    return n1 + n2;
}

function printResult(num: number) : void {
    console.log('Result:' + num);
}

console.log(printResult(add(5, 12)));

//let combineValues: Function;  //함수 타입 지정.

let combineValues: (a:number, b:number) => number;

// let combineValues: any;

combineValues = add;
// combineValues = 5;

console.log(combineValues(8,8));


