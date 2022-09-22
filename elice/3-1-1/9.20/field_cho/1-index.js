// 지시사항을 참고하여 코드를 작성하세요.
//import readline from "readline" 
//바벨 설정으로 사용가능, 지금 안됨
//,호이스팅,es6문법 java python
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

  rl.on("line", (line) => { 
      // 한 줄씩 입력받은 후 실행할 코드
     // 입력된 값은 line에 저장된다.
     console.log(line);
    //process.stdout.write(line);

      rl.close(); // close가 없으면 입력을 무한히 받는다.
  });
  rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
  })  

//from. 지시안님 
//   const readline = require("readline");
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   //요기서 선언을 합니다!
//   let useLine = "";
  
//   rl.on("line", (input) => {
//   // 입력된 값인 input을 useLine에 저장된다.
//     useLine = input;
//     console.log("끝났지요");
//     rl.close();
//   });
  
//   rl.on('close', () => {
//     // 입력이 끝난 후 실행할 코드
//     console.log(useLine)
//   })
