// type personType = {
//   name: string;
//   age: number;
//   nickname : string;
// }

const person : {
  name: string;
  age: number;
  nickname : string;
} = {
  name: 'HankJoo',
  age: 30,
  nickname : '행크'
};

console.log(person.name);
console.log(person.nickname);
console.log(person.age);

type MapType = {
  seq : number;
  cmptName : string;
  index: number[];
  details:{
    title: string;
    description: string;
  }
}

const map : MapType = {
  seq :0,
  cmptName :'A',
  index : [0.4441,121212],
  details : {
    title : '안녕하세요 저는 주한규',
    description : '반가워요....'
  }
}

console.log(map.seq);
console.log(map.cmptName);
console.log(map.index);
console.log(map.details);

//////////////////ARRAY TYPE////////////////
const person1 :{
  name: string;
  age:30;
  nickname: string;
  hobbies: string[];
  role: [number, string]; ///튜플 타입....특별한 구조...타입스크립트에 존재..자바스크립트에는 존재안함.
} ={ 
  name: 'HankJoo',
  age: 30,
  nickname : '행크',
  hobbies: ['Sports', 'Cooking'],
  role:[2, 'author']
};

person1.role.push('admin');
// person1.role[1] = 10;   ///튜플 정의에 의해 에러가 남.
person1.role[0] = 10;
//person1.role = [0,'admin','user'] ///ERROR

let favoriteActivities: string[];
//let favoriteActivities: any[];  //사용하지 말자...
favoriteActivities = ['Sports'];

console.log(person1.name);

for (const hobby of person1.hobbies){
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());   //!!! ERROR!!!
}

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//ENUM 정의함. 자바스크립트에는 없음...
//OWN NUMBER
enum Role {
  ADMIN =3, READ_ONLY =2, AUTHOR =1
};

enum Role1 {
  ADMIN ='ADMIN', READ_ONLY =2, AUTHOR =1
};

const person2 = { 
  name: 'HankJoo',
  age: 1,
  nickname : '행크',
  hobbies: ['Sports', 'Cooking'],
  role : Role.ADMIN
};

// 타입스크립트 Enum이 자바스크립트로 변환되면 아래처럼됨..신기..
// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
//     Role[Role["AUTHOR"] = 2] = "AUTHOR";
// })(Role || (Role = {}));
// ;



