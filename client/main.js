import { diceAnimation, getNode} from './lib/index.js';

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// diceAnimation()

const rollingDice = getNode('.buttonGroup > button:nth-child(1)')

// 클로저. 호출을 두 번 해야 한다.

const handlerRollingDice = () => {
  let stopAnimation;
  let isRolling = false; //주사위 굴리기 버튼하나로 굴리고 멈추는 toggle을 구현하기 위해서
  
  return () => {
    // diceAnimation()
    // 주사위 굴리기 toggle 구현
    if(!isRolling) {
      stopAnimation = setInterval(diceAnimation, 100);
    }else{
      clearInterval(stopAnimation);
    }
    isRolling = !isRolling;
  }
}

// IIFE 핸들러함수를 한 번만 호출하면 된다.
// const handlerRollingDice = (() => {
//   let stopAnimation;
//   let isRolling = false; //주사위 굴리기 버튼하나로 굴리고 멈추는 toggle을 구현하기 위해서
  
//   return () => {
//     // diceAnimation()
//     // 주사위 굴리기 toggle 구현
//     if(!isRolling) {
//       stopAnimation = setInterval(diceAnimation, 100);
//     }else{
//       clearInterval(stopAnimation);
//     }
//     isRolling = !isRolling;
//   }
// })();

rollingDice.addEventListener('click', handlerRollingDice())
// 이 이벤트를 끄는 변수만들기 
// let eventOff = bind