/* global gsap */

import {getNode, getInputValue, getRandom, insertLast, clearContents, isNumericString, showAlert, clickCopy, addClass, removeClass} from "./lib/index.js"
import { jujeobData } from "./data/data.js"
const submit = getNode('#submit');
const resultArea = getNode('.result');
console.log(submit);



function clickSubmitHandler(e) {
  e.preventDefault();
  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];
  if (!name) {
    showAlert('.alert-error', '제대로 이름 입력');

    // 밑의 것 GSAP으로 해보기
    // gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    // gsap.fromTo(타겟, duration, vars object from, vars object to)
    //shake 흔들어주는 기능 추가
    addClass(resultArea,'shake');
    //shake 기능 1초마다 없애주기
    setTimeout(() => {
      removeClass(resultArea,'shake')
    }, 1000);
    return;
  }
  if (isNumericString(name)) {
    showAlert('.alert-error', '제대로 이름 입력');
    return;
  }
  console.log(pick)
  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function clickCopyHandler() {
  let text = resultArea.textContent;
  //navigator.clipboard.writeText(text)
  clickCopy(text)  // return값이 있는거랑 왜 promise가 뜨는건지
  // clickCopy(text).then(()=>{
  // showAlert('.alert-success','클립보드 복사가 완료됐습니다.', 2000);
  // })
}

submit.addEventListener('click', clickSubmitHandler)
resultArea.addEventListener('click', clickCopyHandler)