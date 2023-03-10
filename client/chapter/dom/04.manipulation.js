/* ---------------------------------------------------------------------- */
/* DOM Manipulation                                                       */
/* ---------------------------------------------------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

let div = document.createElement('div');
div.className = 'third';
div.textContent = '세 번째 입니다.';
/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */
const h1 = getNode('h1');

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// h1.append(div);
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// h1.prepend(div);
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// h1.before(div);
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// h1.after(div);
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거
// h1.remove(div);

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText

let index = 1;
let template = /* html */ `<div class='box0${index}'> 새롭게 추가된 엘리먼트 입니다.</div>`

// h1.insertAdjacentHTML('beforeend', template);

// 함수명이 어려워서 함수명 바꾸기 first는 자식중에 처음으로
//insertBefore
function insertBefore(node, text) {
  if (typeof node === 'string') node = getNode(node);
  
  if (node.nodeType !== document.ELEMENT_NODE) throw new TypeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('beforebegin', text);
}
insertBefore('h1', template);

// insertFirst
function insertFirst (node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) throw new TypeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('afterbegin', text);
}
insertFirst('h1', template);

// insertLast
function insertLast (node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) throw new TypeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('beforeend', text);
}
insertLast('h1', template);

// insertAfter
function insertAfter (node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) throw new TypeError('insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
  node.insertAdjacentHTML('afterend', text);
}
insertLast('h1', template);
// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입