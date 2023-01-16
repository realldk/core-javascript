import { diceAnimation, disableElement, enableElement, getNode, getNodes, invisibleElement, visibleElement, insertLast, attr, clearContents} from './lib/index.js';

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 



// diceAnimation()
// 버튼 그룹을 일일이 받기
// const rollingDice = getNode('.buttonGroup > button:nth-child(1)')
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetButton = getNode('.buttonGroup > button:nth-child(3)');

// 버튼 그룹을 배열로 받기. 배열 구조 할당을 이용
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');



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
const recordListWrapper = getNode('.recordListWrapper');

// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기 

// 주사위 굴린 기록을 받아와서 출력하기
/* -------------------------------------------------------------------------- */
/*                                   render                                   */
/* -------------------------------------------------------------------------- */
let total = 0;
let round = 1;
function renderRecordListItem(){
  let diceResult = attr('#cube', 'data-dice')
  let template = /* html */ `
  <tr>
  <td>${round++}</td>
  <td>${diceResult}</td>
  <td>${total += +diceResult}</td>
  </tr>
  `;
  insertLast('.recordList > tbody',template);
  // 발생하는 스크롤을 내리지 않고 최근 결과가 바로 보이게
  // console.log(recordListWrapper.scrollTop)
  // console.log(recordListWrapper.scrollHeight)
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}
/* -------------------------------------------------------------------------- */
/*                                    event                                   */
/* -------------------------------------------------------------------------- */
// 클로저. 호출을 두 번 해야 한다.

const handlerRollingDice = () => {
  let stopAnimation;
  let isRolling = false; //주사위 굴리기 버튼하나로 굴리고 멈추는 toggle을 구현하기 위해서
  
  return () => {
    // diceAnimation()
    // 주사위 굴리기 toggle 구현
    if(!isRolling) {
      stopAnimation = setInterval(diceAnimation, 100);
      disableElement(recordButton);
      disableElement(resetButton);
    }else{
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }
    isRolling = !isRolling;
  }
}

const handlerRecord= () => {
  visibleElement(recordListWrapper);

  renderRecordListItem();
}

const handlerReset = () => {
  invisibleElement(recordListWrapper);
  clearContents('.recordList > tbody');
  round = 1;
  total = 0;
}
rollingDiceButton.addEventListener('click', handlerRollingDice())
recordButton.addEventListener('click',handlerRecord)
resetButton.addEventListener('click', handlerReset)

// 이 이벤트를 끄는 변수만들기 
// let eventOff = bind