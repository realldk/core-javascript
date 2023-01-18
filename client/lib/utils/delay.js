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


function delayP(timeout = 1000){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      // resolve('성공!');
      reject('실패');
    }, timeout)
  })
}


// resove를 실행했을 때
delayP().then((res)=>{
  console.log(res);
})

// reject를 실행했을 때
delayP().then((res)=>{
  console.log(res);
})
// 만 하면 uncaught promise가 뜨고
// catch를 해줘야 한다
.catch(err=> {console.log(err);})