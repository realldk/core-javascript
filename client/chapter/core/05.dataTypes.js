/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(null);
// 2. 값이 할당되지 않은 상태
console.log(undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
"text";
let message1 = 'text';
let message2 = `text`;
let nickName = 'DG';
let message3 = `안녕 내 이름은 ${'안녕' / 3}야`;
console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 77;
let floatnumber = 88.77;
console.log('number : ',typeof number);
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(12913n + 10n);
console.log(BigInt(9007199254740991 + 100));
// 6. 참(true) 또는 거짓(false)
let forCheck = true;
console.log(typeof forCheck);
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});
// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol('id'));

console.log(typeof Math);

const fuc = function() {

};

console.log(typeof fuc);
/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// typeof null; 이 object로 나오는 것


// Object

const user = {
  name: 'donggyeong',
  age: 27
};

console.log(user);
// Array

let list = [10, 100, 1000, 1, 2 , 3];
list.length;

// function

function sum(a, b){
  return a + b;
}

console.log(sum(1, 2));
// this


