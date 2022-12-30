/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */


/* 예제
let i = 0;
do {
  console.log('최초 실행');
  i++;
} while (i < 5); */


// // do ~ while 문 (역순환)
// // - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// // - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// // - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
// //   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// // - 순환 중단


// // do ~ while 문 (순환)
// // - 위 do ~ while 문을 순방향으로 순환되도록 설정

let count = +prompt('몇 번 순환할까요?');

do{
  if (count <= 0 || isNaN(count) === true) 
  // 또는 if (count <= 0 || typeof count !== Number) 도 된다.
  {
    console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
    break;
  }
  console.log(count);
  count--;
} while(count > 0);

// 이렇게 할 수도
// do {
//   console.log(count);

//   if (count <= 0 || !count) {
//     console.log("최초실행");
//     break;
//   }
//   count--;
// } while (count);

// // 다음 요소 찾기
// let first = document.querySelector('.first');

// console.log(first.nextSibling);

// // 함수로 만드는 법
// function next(node) {
//   do{
//     node = node.nextSibling;
//   } while(node.nodeType !== document.ELEMENT_NODE);
//   return node;
// }

// 전에 요소 찾기
// prev(second)를 이용해서 first를 찾기
// let second = document.querySelector('.second');

// function prev(node) {
//   do {
//     node = node.previousSibling;
//   } while(node.nodeType !== document.ELEMENT_NODE);
//   return node;
// }

// console.log(prev(second));