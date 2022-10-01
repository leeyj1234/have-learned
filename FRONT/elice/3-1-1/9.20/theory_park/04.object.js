
let animal = 'cat';
let name = 'nabi';
let age = 3;
let isPet = true;
let ownerName = 'Jone';

let obj1 = {}; //객체 리터럴
console.log(obj1);
let obj2 = new Object(); //생성자 함수
console.log(obj2);

let cat = {
	name: '냐옹이',
	age: 3,		
	isPet: true,
	ownerName: 'Jone',
};

let dog = {
	name: '멍멍이',
	age: 5,
	ownerName: 'yeonmi',
};

let rabbit = {
	name: '껑충이',
	age: 1,
	ownerName: null,
};

console.log("cat=", cat);
console.log("dog=", dog);
dog.isPet=true;
console.log("dog=", dog);

console.log("rabbit=", rabbit);
rabbit["isPet"] = false;
console.log("rabbit=", rabbit);