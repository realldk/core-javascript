import { typeError } from '../error/typeError.js';
import { isElement } from '../utils/typeOf.js';


//JSDoc
/**
 * @function isElement checkElement
 * @param {HTMLElement} node
 * @return {disabled} set disabled
 */

export function disableElement(node) {
  if(!isElement(node)){
    typeError('disableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }
  node.disabled = true;
}

export function enableElement(node) {
  if(node.nodeType !==1){  //document.ELEMENT_NODE의 값이 1이다.
    typeError('enableElement 함수의 인자는 DOM 요소 노드여야 합니다.')
  }
  node.disabled = false;
}

export function visibleElement(node) {
  if(!isElement(node)) typeError('vivisibleElement 함수의 인자는 DOM 요소 노드여야 합니다.');
  node.hidden = false;
}

export function invisibleElement(node) {
  if(!isElement(node)) typeError('invivisibleElement 함수의 인자는 DOM 요소 노드여야 합니다.');
  node.hidden = true;
}