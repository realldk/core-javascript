import {getNode, getInputValue, getRandom, insertLast, clearContents, isNumericString, showAlert} from "./lib/index.js"
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

submit.addEventListener('click', clickSubmitHandler)