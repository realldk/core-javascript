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
// 여기서 ...은 rest parameter 나머지라는 뜻. 그래서 아무것도 지정하지 않으면 모든 값이 담긴다.
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
let calcAllMoney = (a,b,c,d) => {
  return a+b+c+d;
};


// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 