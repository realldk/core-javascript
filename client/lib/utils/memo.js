// chche는 memo함수를 통해서만 접근할 수 있는 객체로 만드는 것이 목적
// 

// 클로저로 만들 때는 바깥에 있을 함수의 매개변수를 안쪽 함수의 매개변수로 옮겨준다.
// IIFE 패턴까지 적용
export const memo = (() => {
  const cache = {}

  return (key, callback) => {
    if(!callback) return cache[key];  // key에 있는 값을 가져오길 바래서
    if(cache[key]) {
      console.warn(`${key}에는 이미 캐시된 값이 존재합니다.`);
      return;
    }
    cache[key] = callback();
    console.log(cache);
  }
})()

//똑같은 key이름으로 값을 두 번 주면 덮어쓴다.
// memo('cube', () => document.querySelector('#cube'));
// memo('cube', 'kkukku')
// console.log(memo('cube'));