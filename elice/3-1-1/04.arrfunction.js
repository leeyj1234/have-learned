const animals = ['rabbit','dog','cat','bird'];

for(let i=0; i<animals.length;i++){
    console.log(animals[i]);
}

//불변성, 순수함수

//고차함수 forEach
animals.forEach(function(val, idx, arr){
    console.log('val=', val); //값
    console.log('idx=', idx); //index
    console.log('arr=', arr); //전체
});

//주로 value값이 필요
animals.forEach(function(val){
    console.log('val=', val); //값
    //console.log('idx=', idx); //index
    //console.log('arr=', arr); //전체
});
//화살표함수로 한 줄 표현가능.
animals.forEach((val)=> console.log('val=', val));

const cat = { kind: '고양이', age: 4 };
const dog = { kind: '개', age: 13 };
const rabbit = { kind: '토끼', age: 2 };
const hamster = { kind: '햄스터', age: 0.5 };

const pets = [cat, dog, rabbit, hamster, cat]; //객체배열

let result1 = pets.find((obj) => obj.kind === '개');
console.log(result1);
let result2 = pets.find((obj) => obj.kind === '뱀');
console.log(result2);//없을 시 undefined

//배열요소중에 해당되는 요소를 따로 빼서 새로운 배열을 만든다.
result1=pets.filter((obj)=>obj.kind==='고양이');
console.log(result1);

//map배열에서 요소들을 각각 다른 요소로 맵핑해서 새로운 배열만듬
const arr=[1,2,3,4,5,6];
result1=arr.map((num)=>num*10);
console.log(result1);
const arr2=arr.map((num)=> [num,num+1]);
console.log(arr2);

const result=arr2.flatMap((num)=>num);
console.log(result);

let text=[]

