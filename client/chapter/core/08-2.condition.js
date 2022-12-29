/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// let age = Number(prompt("나이를 입력해주세요"));

// if (age >= 14 && age <= 90) {
//   console.log('한창이시네요');
// }



let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB;

// 논리합(또는) 연산자
let AorB;

// 부정 연산자
let reverseValue;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy);


// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};


// 로그인 구현하기

let userName = prompt("ID를 입력하세요");
let pw;

if (userName == 'Admin') {
  pw = prompt("비밀번호를 입력하세요");
  if (pw == "TheMaster") {
    console.log("환영합니다!");
  } else if (pw == '' || pw == null) {
    console.log("취소되었습니다.");
  } else {
    console.log("인증에 실패하였습니다.");
  }
} else if (userName == '' || userName == null) {
  console.log("취소되었습니다.");
} else {
  console.log("잘못 입력하셨습니다.");
}

// 대소문자 구별없이 되게 해보기 String의 속성이용?
// 1. 대문자로 변환 : str.toUpperCase()
// 2. 소문자로 변환 : str.toLowerCase()