/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


/* const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
} */
/* 화살표함수로 바꾸기
const calculateTotal = (moneyA, moneyB, moneyC, moneyD) => moneyA + moneyB + moneyC + moneyD; */

// arguments 활용하기
// sum(1,2,3,4,)
// 여기서 ...은 rest parameter 나머지라는 뜻. 그래서 아무것도 지정하지 않으면? ...args인지 ...인지 모든 값이 담긴다.
let arr  = [1,2,3,4];
const calculateTotal = (...args) => {
  let total = 0;
  args.forEach(item=>{
    total += item;
  })

  // console.log(args);
  // args.reduce((acc,item)=> acc + item);
  
  return total;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d) => a+b+c+d;


// 화살표 함수와 this

function normalFunction(){
  console.log('일반함수 : ' ,this);
}

const arrowFunction = ()=>{
  console.log('화살표함수 : ',this);
}

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋다.
const user = {
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function (){
    // let total = 0;
    // this.grades.forEach((item)=>{
    //   total += item;
    // })
    // return total;
    function foo(){
      console.log('foo : ', this);
    }
    const bar = ()=>{
      console.log('bar : ', this);
    }
    foo.call(user) //user
    bar() //user object
  }
}

console.log(user.totalGrades());
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (base, power) => {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= base;
  }
  return result;
}

// Array.fill을 이용한 화살표 함수식
// let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc=>acc * numeric,1);

console.log(pow(2, 53));
// repeat(text: string, repeatCount: number): string;
let repeat; 

let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc=>acc + text,'');

console.log(repeatExpression('hello', 3)); //'hellohellohello'가 나와야한다.