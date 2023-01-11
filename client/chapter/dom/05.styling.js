/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className = 'check');
console.log(first.classList.add('check', 'doublecheck'));
//안에 해당 클래스가 있는지 확인
console.log(first.classList.contains('check'));
// console.log(first.className.contains('double')); //className엔 contains 없음

//addClass 함수 만들기
function addClass (node, value) {
  if(typeof node === 'string') node = getNode(node);
  if(typeof value !== 'string') typeError('addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  node.classList.add(value);
}
addClass('.check', 'hello');

// removeClass 함수 만들기, 입력할 클래스명을 입력하지 않으면 선택한 클래스에 있는 걸 다 지우기
function removeClass (node, className) {
  if(typeof node === 'string') node = getNode(node);
  if(!className) {
    node.className = '';
    return;
  }
  if (typeof className !== 'string') typeError('removeClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  node.classList.remove(className);
}
removeClass('.hello', 'hello');

//toggleClass 함수 만들기
function toggleClass (node, className) {
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string') typeError('toggleClass 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  node.classList.toggle(className);
}
toggleClass ('.check', 'is-active');

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.transform = 'rotate(180deg)';

/* 계산된 스타일 읽기 ------------------------------------------------------- */

let size = getComputedStyle(first).color;
console.log(size);

//자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 .을 사용할 수 없다. [] 각괄호 표기법을 이용해야 한다.
//Css속성을 반환하는 getCss 함수 만들기, 그게 정확한 css 속성인지?
function getCss (node, cssattr) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof cssattr !== 'string') typeError('getCss 함수의 두 번째 인자는 문자 타입이어야 합니다') ;
  if(!(cssattr in document.body.style)){
    syntaxError('getCSS 함수의 두 번째 인자인 cssattr은 유효한 css 속성이어야 합니다.');
  }
  return getComputedStyle(node)[cssattr];
}
// let getcheck = getCss('.first', 'font-size');
// console.log(getcheck);

// setCss 함수 만들기
function setCss (node, cssattr, value) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof cssattr !== 'string') typeError('setCss 함수의 두 번째 인자는 문자 타입이어야 합니다') ;
  if(!(cssattr in document.body.style)){
    syntaxError('setCSS 함수의 두 번째 인자인 cssattr은 유효한 css 속성이어야 합니다.');
  }
  if(!value) syntaxError('setCss 함수의 세 번째 인자는 필수값 입니다.');
  node.style[cssattr] = value;
}
// setCss('.first', 'color', 'red');

// get과 set을 한 번에 쓰는 함수 만들기
function css (node, cssattr, value) {
  if(!value) return getCss(node, cssattr);
  else setCss(node, cssattr, value);
}
// 화살표 함수와 삼항연산자로 간단하게 나타내기
// const css = (node, cssattr, value) => !value ? getCss(node, cssattr) : setCss(node, cssattr, value);

//set으로 부여하고 get으로 바로 출력하면? 적용되는데 시간이 약간 걸리기 때문에 비동기로 출력한다던가 다른 방법을 쓸 것
css('.first', 'color');
// - getComputedStyle(element, [pseudoElement]) `읽기 전용`