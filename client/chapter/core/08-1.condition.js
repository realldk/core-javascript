/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let inputPrompt = prompt("숫자를 입력해주세요");

// if문 이용
if (inputPrompt > 0) {
  console.log(1);
} else if (inputPrompt < 0) {
  console.log(-1);
} else {
  console.log(0);
}

// 삼항연산자 이용
let result = (inputPrompt > 0) ? 1 :
(inputPrompt < 0) ? -1 :
0;

console.log(result);



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'no';

// 영화 볼거니?
let goingToWatchMovie = 'no';


// if 문(statement)
if (didWatchMovie.includes('yes')) {
  console.log('3줄 요약ㄱㄱ');
}
// else 절(caluse)
else {
  if (goingToWatchMovie = 'no') {
    console.log('왜?');
  } else if (goingToWatchMovie = 'yes') {
    console.log('나도 같이 보러 가자~');
  }
}
// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
let conditionResult = (didWatchMovie == 'yes') ? '재밌더나?' :
(goingToWatchMovie.includes('yes')) ? '드가자~' :
'그럼 코노 어떰';

console.log(conditionResult);