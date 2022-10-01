// 얕은 복사 깊은 복사

// 깊은 복사: 기존변수와 새로운 변수가 다른 주소값 참조
// 값 자체를 복사해서 기존 값에 영향을 미치지 않음

let myName = '박연미';
let yourName = myName; // myName 값을 복사해옴
console.log('myName=', myName);
console.log('yourName=', yourName);

yourName = '아이유';
console.log('myName=', myName);
console.log('yourName=', yourName);

let arr=[1,2,3,4];
let newArr=arr;
//동일주소 참조, 얕은 복사
newArr[2]=300;
console.log('arr=', arr);
console.log('newArr=', newArr);

// 값이 yourName만 변경된거 확인 => 원시타입은 값이 복사되어 전달됨
// 얕은 복사==주소복사: 기존값에 영향 미침

let cat = {
	name: 'nabi',
};
console.log('복사 전 =', cat);

let dog = cat;
dog.name = '멍멍이';

console.log('복사 후 cat=', cat);
console.log('복사 후 dog=', dog);

// const a=10;
// a=23;
//Error

const obj={
	name:"yj"
}
// heap 동적메모리, 

console.log(obj);
obj.name="jy";
console.log(obj);


