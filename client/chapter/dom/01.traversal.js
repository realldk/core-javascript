/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// let first = document.querySelector('.first');
let span = document.querySelectorAll('span');

// 결과물을 원소 당 하나의 변수에 할당하고 싶다면?
// 구조 분해 할당 이용
let [first, second] = document.querySelectorAll('span');

// 문서 대상 찾기 함수
// function getNode (node) {
//   if(typeof node !== 'string') {
//     throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.');
//   }
//   return document.querySelector(node);
// }

console.log(getNode('.first'));

/* 문서 대상 확인 */
// - matches
// 선택자 안에 class || id 를 가지고 있는 대상이 있어?
console.log(getNode('.first').matches('.second'));
// - contains
// 선택자의 자식들 중에 해당 element 가 있어?
console.log(getNode('h1').contains(getNode('.first')));