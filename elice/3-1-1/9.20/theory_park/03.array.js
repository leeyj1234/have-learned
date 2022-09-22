
let arr = [1, 2, 3, 4]; //배열 리터럴-순수한 상태
console.log(arr);
let array = new Array(3); 
//생성자 함수 3개 비어있는 공간 배열 만들어줘
console.log(array);
array = new Array(1, 2, 3);
console.log(array);
array = Array.of(1, 2, 3, 4, 5); 
console.log(array);

// 값추가
//주소값을 참조하기때문에 비어있는 배열생성가능
let subject = []; 
console.log(subject);
subject[0] = 'javascript';
subject[1] = 'html';
subject[2] = 'css';

console.log(subject.length); 

// 값 삭제
delete subject[1];
console.log(subject);

