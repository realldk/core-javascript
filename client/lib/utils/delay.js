import { getNode } from '../dom/getNode.js';


const first = getNode('.first');

function delay(callback, timeout = 1000){
  setTimeout(callback, timeout);
}

// delay(()=>{
//   first.style.top = '-100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//     })
//   })
// })

// 위 콜백함수의 지옥을 아래와 같이 나타낼 수 있다.
delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
}).then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP()
}).then(()=>{
  first.style.top = '0px';
})

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

function delayP(shouldReject = false, timeout = 1000, data = '성공했습니다', errorMessage = '알 수 없는 오류가 발생했습니다.'){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      // 삼항식으로
      // !shouldReject ? resolve(data) : reject(errorMessage) 
      if(!shouldReject){
        resolve(data);
      } else{
        reject(errorMessage);
      }
    }, timeout)
  })
}

// shouldReject 인수를 넣어보기
delayP().then((res)=>{
  console.log(res);
})

/* // resove를 실행했을 때
delayP().then((res)=>{
  console.log(res);
}) */

/* // reject를 실행했을 때
delayP().then((res)=>{
  console.log(res);
})
// 만 하면 uncaught promise가 뜨고
// catch를 해줘야 한다
.catch(err=> {console.log(err);}) */