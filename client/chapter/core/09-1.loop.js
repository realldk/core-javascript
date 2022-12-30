/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

// let i = 0;

// while(i < 10) {
//   console.log('안녕');
//   i++;
// }


const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 배열의 값들을 역순으로 출력하기

let length = frontEndDev.length - 1;

while (length >= 0) {
  console.log(frontEndDev[length]);
  length--;
} */


/* 변수 안쓰고 하는 방법, but 배열이 없어지는

while (frontEndDev.length) {
  console.log(frontEndDev.pop());
} */


/* 배열을 파괴하지 않고 하는 방법
얕은 복사
let copyArray = [... frontEndDev];
let copyArray = frontEndDev 를 하면 frontEndDev.pop했을 때 copyArray도 참조값이 날라간다.

let copyArray = frontEndDev.slice(); */


/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환