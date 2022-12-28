/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;

console.log(String(YEAR));
// undefined, null
console.log(undefined);
console.log(String(undefined));

console.log(null);
let days = null;
console.log(days);
console.log(String(days));

// boolean
let isKind = true;
console.log(isKind);
console.log(isKind + '');
//+ ''을 하면 문자형으로 강제 형변환
/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined));
// null
console.log(Number(null));
// boolean
console.log(Number(Boolean));
let cutie = true;
console.log(Number(cutie));
console.log(cutie * 1);


// string

let num = '    12 3    ';
console.log(num * 1);
console.log(Number(num));
// numeric string
let width = '320px';

console.log(parseInt(width, 10));
/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(123));
console.log(Boolean(!!' '));
console.log(Boolean(''));