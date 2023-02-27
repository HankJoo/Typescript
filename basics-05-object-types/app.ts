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


const person1 ={ 
  name: 'HankJoo',
  age: 30,
  nickname : '행크',
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
// let favoriteActivities: any[];
favoriteActivities = ['Sports'];

console.log(person1.name);

for (const hobby of person1.hobbies){
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}



