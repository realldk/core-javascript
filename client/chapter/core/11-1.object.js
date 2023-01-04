/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  "z-index": 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  "max-width": 800,
  height: "40vh",
  "min-height": 280,
  transform: "translate(-50%, -50%)",
}


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한

let authUser = null;

authUser = {
  uid: 'user-id-asdblah',
  name: 'dg',
  email: 'dg@naver.com',
  isSignIn: true,
  permission: 'paid',
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['uid']);
// console.log(authUser['name']);
// console.log(authUser['email']);
// console.log(authUser['isSignIn']);
// console.log(authUser['permission']);


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = calculateProperty){ //이 매개변수는 defaultparameter

  return {
    name: 'unknown',
    email: 'unknown@company.io',
    [computedProp]: '010-7169-0262'
  };
}

const user = createUser();
console.log(user);
// 프로퍼티 포함 여부 확인

Object.hasOwnProperty.SIGN = true; //전역변수에 SIGN이 추가되어버리면

// Object의 함수를 이용해서 본인이 소유하고 있는 프로퍼티만 불러온다.
for(let key in authUser) {
  if(Object.prototype.hasOwnProperty.call(authUser, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열

let keyarr = Object.keys(authUser);
let valuearr = Object.values(authUser);
let entriesarr = Object.entries(authUser);

console.log(keyarr);
console.log(valuearr);
console.log(entriesarr);

const getPropertiesList = object => Object.keys(object);
let result = getPropertiesList(authUser)


// 프로퍼티 제거 or 삭제 

// 제거
// let removeProperty = (object, key) => {
//   object[key] = null;
// }

// 삭제
function deleteProperty (object, key) {
  delete object[key];
}

console.log(deleteProperty(authUser, 'uid'));

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {name, email, authorization, isLogin};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0이면 ? ture : false
/* 내가 한 것
function isEmptyObject(object) {
  let result = Object.keys(object);
  return result.length === 0 ? true : false
} */


// let empty = {};
// console.log (isEmptyObject(empty));


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430
}

//월급의 총 합
/* let entriesarr = Object.entries(salaries);
entriesarr[1]
 */
let total = 0;
// 예전방식
// for(let keyValue of Object.entries(salaries)) {
//   let value = keyValue[1];
//   total += value;
// }

/* 배열 구조 분해 할당 destructuring assignment */
// for(let [key, value] of Object.entries(salaries)) {
//   // 밑의 두개를 한 것과 같은 효과
//   // let key = keyValue[0];
//   // let value = keyValue[1];
// }
// console.log(total);

//매번 배열의 원소를 지정해서 할당하지 않기 위한 방법, 배열의 원소인 문자열은 원시값이라 복사가 된다.
let color = ['#ff0000', '#2b00ff', '#00ff2f'];
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

// // 위와 같다
// const [COLOR_RED,COLOR_BLUE,COLOR_GREEN] = color;

// // 발췌. COLOR_GREEN만 가져오기
// const [ , , COLOR_GREEN] = color;


/* -------------------------------------------------------------------------- */
/*                                 객체 구조 분해 할당                                */
/* -------------------------------------------------------------------------- */
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 430
// }

const {John, Ann, Pete} = salaries;

console.log(Ann);