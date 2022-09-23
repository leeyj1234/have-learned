//원시타입은 불변성을 보장한다. 복사
let myAge = 30;
function setMyAge(age) { //외부에서 초기값을 받은 변수
	return (age += 5);
}

//console.log('함수 호출전', myAge);
//console.log('setMyAge = ', setMyAge(myAge));
//console.log('함수 호출후', myAge);

//객체 타입은 얕은복사로 불변성을 보장하지 않는다. 주소값변경
function showName(obj) {
	obj.name = '황재성';
	console.log(obj);
}

const member = { name: '박연미' };
//console.log(member);
showName(member);
//console.log(member); 

member.name = '박연미';

//freeze : 속성 변경을 맊음 
const cat = { name: '나비' };
Object.freeze(cat);
cat.age = 3;
cat.name = '냐옹이';
console.log(cat);

// Object.assign 사용
function changeName2(obj) {
	let newObj = Object.assign({}, obj);
	newObj.name = '유재석';
	return newObj;
}
let obj2 = changeName2(member);
console.log(member);
console.log(obj2);

function changeName(obj) {
	return { ...obj, name: '유재석' };
}

const newObj = changeName2(member);
console.log(newObj);
console.log(member);

