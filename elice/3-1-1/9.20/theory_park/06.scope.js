
//전역
let myName = '박연미';
console.log(myName);
myName = '아이유';
console.log(myName);

const catName = '나비';

{
	console.log(catName);
	// 전역 참조 접근가능: 스코프체인
	const x = 1;
	console.log('부모 블럭 안이야 x=', x);
	{
		const y = 2;
		console.log('자식 블럭 안이야 x=', x);
		console.log('자식 블럭 안이야 y=', y);
	}
}
console.log(x);
// 자식블럭 참조 접근불가

let me = 'global 전역 scope';
{
	let me = 'local 지역 scope';
	console.log('지역스코프 me=', me);
}
console.log('글로벌 스코프 me=', me);

function printName() {
	const myName = '박연미';
	console.log('함수 안이야', myName);
}

name = '박연미'; //var name="박연미";
console.log('name =', name); //string

var dogName = '멍멍이';
console.log('dogName =', dogName);
var dogName = '강아지';
console.log('dogName =', dogName);


//let const=> 블록스코프 영역
//var => 함수 스코프만 인식
var animal = '고양이';
{
	var animal = '강아지';
	{
		var animal = '토끼';
	}
}
console.log('animal =', animal); 
//let고양이
//var토끼

function test() {
	var z = 3;
}

//console.log(z);
//Error