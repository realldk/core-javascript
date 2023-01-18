import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';


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

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

/* // 위 콜백함수의 지옥을 아래와 같이 나타낼 수 있다.
delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
}).then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP()
}).then(()=>{
  first.style.top = '0px';
}) */


export function delayP(options = {}){

  let config = {...defaultOptions}; //얕복

  // 인수로 숫자 3000만 넣었을 때 처리를 위해
  if(isNumber(options)){
    config.timeout = options;
  }

  // 함수의 인수로 객체 키:값을 기본값과 다르게 쓰려고 정의 해놓은 객체와 내가 쓰고 싶은 걸 합성하는
  // 객체 합성 mixin
  if(isObject(options)){
    config = {...config, ...options};  //같은 키가 있다면 뒤에 합성한 것으로 덮어쓴다.
  }

  const {shouldReject, data, errorMessage, timeout} = config;
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

/* // shouldReject 인수를 넣어보기
delayP({
  shouldReject: true,
  timeout: 1500,
  data: '안녕',
  errorMessage: '잘가'
}).then((res)=>{
  console.log(res);
}).catch((err)=>{console.log(err);}) */

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


// async : 일반 함수를 promise를 반환하는 함수로 만든다. 
// await : 1. promise가 반환하는 result를 가져오기, 2. 코드 실행 흐름 제어

async function delayA(){
  return '완료'
}

let result = await delayA();


// await 개편한데?
async function 라면끓이기(){

  try{
    await delayP(1500)
    first.style.top = '-100px';
  
    await delayP(1500)
    first.style.transform = 'rotate(360deg)';
  
    await delayP(1500)
    first.style.top = '0px';
  
    await delayP(1500)
    console.log('계란넣기');
  
    // throw new Error('계란 껍질이 들어가버렸다');
    await delayP(1500)
    console.log('그릇에담기');
  }catch(err){
  console.log(err);
  }
}

// 라면끓이기()