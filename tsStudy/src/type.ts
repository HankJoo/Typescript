//자바스크립트의 일곱 가지 기본 원시 타입과 동일!!
// null // null
// undefined // undefined
// true // boolean
// "Louise" // string
// 1337 // number
// 1377n; // bigint
// Symbol("Frnklin") // symbol


// let let wat;                                            //구문 오류
// console.blub("Nothing is worth more than laughter");    //타입 오류 //코드가 실행되면 무언가 충돌하거나 예기치 않게 작동할 수 있음을 나타냅니다.

// 할당 가능성 (assignability)
// let lastName = 'Joo';
// lastName = true;

//타입 어노테이션(Type annotation)
// let rocker:string;
// rocker = "Hank Joo";
// rocker = 1;

// let rapper = "Queen Latifah";   //타입을 이미 알고 있음.
// rapper.length;
// rapper.push('!');  //속성이....해당 변수의 타입에 정의 되어 있는지 확인....

// let cher = {
//     firstName: "Cherilyn",
//     lastName: "Sarkissian",
//     middleName : 'hank joo'
// };
//
// cher.middleName;


//둘중에 하나..undefined 혹은 string
//union 선언 순서는 중요하지 않다고 함.
// let mathematician:string|undefined = Math.random() > 0.5 ? undefined : "Mark Goldberg";

// let physicist:string|number = Math.random() > 0.5
//     ? "Marie Curie"
//     : 84;
//
// physicist.toString();
// physicist.toUpperCase();
// physicist.toFixed();

// //narrowing 값 할당을 통한 내로잉!
// let admiral: number | string;
// // admiral = "Grace";
// admiral = 486;
//
// admiral.toUpperCase();
// admiral.toFixed();
//
// let scientist = Math.random() > 0.5
//     ? "Rosalind"
//     : 51;
//
// //(조건 검사)   를 통한 내로잉..
// //일반적으로 타입스크립트에서는 변수가 알려진 값과 같은지 확인하는 if 문을 통해 변수의 값을 좁히는 방법을 사용합니다.
// if (scientist === "Rosalind") {
//     scientist.toUpperCase();
// }
// // scientist.toUpperCase();


// let scientist = Math.random() > 0.5
//     ? "Rosalind"
//     : 51;
// //typeof 검사를 통한 내로잉..
// if (typeof scientist === "string") {
//     scientist.toUpperCase();
// }
// scientist.toUpperCase();

//논리 부정 if 문 활용
// let scientist = Math.random() > 0.5
//     ? "Rosalind"
//     : 51;
// if (!(typeof scientist === "string")) {
//     scientist.toFixed();
// } else {
//     scientist.toUpperCase();
// }

// //삼항 연산자를 활용한 속성 콜~.
// let scientist = Math.random() > 0.5 ? "Rosalind" : 51;
// typeof scientist === "string" ?
//     scientist.toUpperCase() : scientist.toFixed();

//strict null checking
//const firstName:string = null;

// //파스칼케이스(PascalCase)
// type RawData = boolean | number | string | null | undefined;
// let rawDataFirst: RawData;
// let rawDataSecond: RawData;
// let rawDataThird: RawData;
//
// //type 결합? 타입명칭 +타입명칭....
// type ID = number | string;
// type IDMaybe = ID | undefined | null;


// //object 선언할 때 타입을 지정하여 할당 가능성을 확인할 수 있음...
// let poetLater: {
//     born: number;
//     name: string;
// }
// poetLater = {
//     born: 1935,
//     name: "Mary",
// }
// poetLater.name = "sat";
// poetLater.born = 19790403;

// //Object Type을 정의해서...
// type Poet = {
//     born: number;
//     name: string;
// }
//
// //재사용했다...와...
// let poetLater: Poet;
// poetLater = {
//     born: 1935,
//     name: "sara",
// }
//
// poetLater = "Emily";


// //구조적 타이핑~!!!
// type WithFirstName = {
//     firstName: string;
// }
// type WithLastName = {
//     lastName: string;
//     test: string;
// }
//
// //Value 객체라고 보고...
// const hasBoth = {
//     firstName: "Luci",
//     lastName: "Clifton",
//     test: "hello"
// }
//
// //충족되는 모든 값을 값으로 활용...신기하네...
// let withFirstName: WithFirstName = hasBoth;
// let withLastName: WithLastName = hasBoth;


//교차 타입 합집합인가..
//그런데 생각보다 엄격함...무조건 어사인해줘야함..
// type Artwork = {
//     genre: string;
//     name: string;
//     test: number;
// }
// type Writing = {
//     pages: number;
//     name: string;
// }
// type WrittenArt = Artwork & Writing;
//
// let pa: WrittenArt = {
//     genre: 'A',
//     name: 'hello',
//     pages: 123,
//     //test :1234
// }

// //함수의 매개변수:타입 ...아규먼트(Values)..
// function singTwo(first: string, second: string) {
//     console.log(`${first} / ${second}`);
// }
//
// singTwo("Ball and Chain"); //not Ok
// singTwo("I W ill Survive", "Higher Love"); // Ok
// singTwo("Go Your Own Way", "The Chain", "Dreams"); //not Ok..

// //선택적 매개변수 (optional parameter)
// //파라미터?
// function announceSong(song: string, singer?: string) {
//     console.log(`Song: ${song}`);
//
//     if (singer) {
//         console.log(`Singer: ${singer}`);
//     }
// }
// announceSong("Greensleeves");
// announceSong("Greensleeves", undefined);
// announceSong("Greensleeves", "sia");


//함수에서 사용되는 모든 선택적 매개변수는
// 마지막 매개변수여야 합니다.
// function announceSinger(singer?: string, song: string) {}

//기본값으로 타입을 유추함.
//기본 값이 설정되어 있을 때는 인수 누락 허용.
//undefined 허용한다고 함...
// function rateSong(song: string, rating = 0) {
//     console.log(`${song} gets ${rating}/5 stars!`);
// }
//
// rateSong("Photograph");
// rateSong("Set Fire to the Rain", 5);
// rateSong("Set Fire to the Rain", undefined);
//
// rateSong("At Last!", "100"); //error

// //배열 및 카운트.
// //[0,1,2,3]
// //[  1,2,3]
// //[    2,3]
//
// function singSongsRecursive(songs: string[], count = 0): number {
//     return songs.length ? singSongsRecursive(songs.slice(1), count +1) : count;
// }
//
// const singSongsRecursiveLambda = (songs: string[], count = 0): number =>
//     songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;


//
// let nothingINGivesString: () => string;
// let inputAndOutput: (songs: string[], count?: number) => number;
//
// const fnTest = () => {
//     console.log("aaaa");
// }
//
// const a = (songs: string[], count?: number) => {
//     console.log("Hello world!");
//     return 5;
// }
//
// function logSong(song: string | undefined) : void {
//     if (!song) {
//         return;
//     }
//     console.log(`${song}`);
//
//     return true;
// }
//
//
// //오류를 발생시키거나 무한루프를 실행하는 함수....never을 리턴 타입으로 선언..
// function fail(message: string): never {
//     throw new Error(`Invariant failure: ${message}`);
// }
//
// function workWithUnsafeParam(param: unknown) {
//     if (typeof param !== 'string') {
//         fail(`param should be a string, not ${typeof param}`);
//     }
//     param.toUpperCase();
// }


// type Poet1 = {
//     born: number;
//     name: string;
// }
//
// // 인터페이스는 속성 증가를 위해 병합할 수 있습니다.
// // 이 기능은 내장된 전역 인터페이스 또는 npm 패키지와 같은 외부 코드를 사용할 때 특히 유용합니다.
// interface Poet2{
//     born: number;
//     name: string;
// }
//
// // readonly 제한자는 타입 시스템에만 존재하며,
// // 인터페이스에서만 사용할 수 있습니다.
// interface Page {
//     readonly text:string;
// }
//
// function read(page: Page) {
//     console.log(page.text);
//
//     page.text += "!";
// }
