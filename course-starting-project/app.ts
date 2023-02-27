function add(n1: number, n2: number, showResult: boolean, phrase:string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }

    let result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return n1 + n2;
    }
}


//타입 추론....
let number0 : number;
// number0 = '5';
const number1 = 5;
const number2 = 3.5;
const printResult = true;
let resultPhrase = 'Result is: ';
// resultPhrase = 0;
add(number1, number2, printResult,resultPhrase);

//Core Types....Object
