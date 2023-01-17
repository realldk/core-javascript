// readyState
// 0: uninitalized 초기화
// 1: loading 로딩
// 2: loaded 로딩이 완료된
// 3: interative 인터랙티브
// 4: complete 완료

/* const xhr = new XMLHttpRequest();

// 비동기 통신의 시작
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

// addEventListener를 해준다. readystate에 변화가 있을 때 마다 이벤트를 실행
xhr.addEventListener('readystatechange', ()=>{
  // console.log(xhr.readyState); // readyState는 단계별로바뀌는데 그걸 보기위함
  if(xhr.status >= 200 && xhr.status < 400) {  // 통신이 성공 했을 떄
    if(xhr.readyState === 4) console.log('통신 성공');
  }else{
    console.error('통신 실패');
  }
})

// 서버에 보내주는 요청. 통신의 시작과 세트
xhr.send(); */

// 위 내용을 함수로 만들기
// 매개변수로 객체를 받으면서 바로 구조 분해 할당을 한 것
export function xhrData({
  method = 'GET',
  url = '',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",  //동일 출처 정책?  
  },
} = {}) {
  
  // 위를 매개변수를 options를 받아서
  // const {method, url, body, headers} = options; 와 같이 나타낼 수도 있다.
  // 하지만 더 복잡하다. 그래서 매개변수에 바로 구조분해 할당을 쓰는 것
  const xhr = new XMLHttpRequest();

  xhr.open(method, url)

  // !!복습
  // headers를 배열로 구조 분해 할당 
  Object.entries(headers).forEach(([key,value])=>{  //왜 [key,value]로 해주는지
    // header를 요청할 때 set해주는 메서드
    xhr.setRequestHeader(key,value);
  })
  
  /* 작동방식 
  Object.entries(header)
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", 
  }
  가 배열 ["Content-Type": "application/json"], ["Access-Control-Allow-Origin": "*"] 두 개로 된다.
  이 두 개의 배열에 forEach(([key,value])=>{
    xhr.setRequestHeader(key, value);
  })
  첫 번째 순회에
  let ket = "Content-Type"
  let value = "application/json"을 해서 xhr.setRequestHeader(key, value)를 실행
  두 번째 순회에
  let key = "Access-Control-Allow-Origin"
  let value = "*"
  xhr.setRequestHeader(key, value)를 실행하는 것 */
  
  // 객체 구조 분해 할당
  // 객체는 할당할 때 순서는 상관없고, 객체에 있는 것만 가져올 수 있다.
  xhr.addEventListener('readystatechange', ()=>{
    const {status, readyState, response} = xhr;
    if(status >= 200 && status < 400) {  // 통신이 성공 했을 떄
      if(readyState === 4) {
        console.log('통신 성공');
        // JSON.parse(response)는 return이 안되어서 콜백함수를 이용한다
        onSuccess(JSON.parse(response));
        // console.log(JSON.parse(response));
      }
    }else{
      onFail('통신 실패');
      /* console.error('통신 실패'); */
    }
  })
  xhr.send(JSON.stringify(body));
}

/* xhrData({
  url: 'https://jsonplaceholder.typicode.com/users/1',
  onSuccess: (result)=>{console.log(result)},
  onFail: (err)=>{console.error(err)}
}) */

// 메서드로 crud만들기
// 단축표기법 쓴거 (shorthand property) 
// 여기에서 매개변수로 들어갈 것의 순서는 지켜야 한다
xhrData.get = (url, onSuccess, onFail, header) =>{
  xhrData({
    url,  // 단축표기법 url:url
    onSuccess,  //onSuccess:onSuccess
    onFail,  //onFail:onFail
    header
  })
}

xhrData.post = (url, body, onSuccess, onFail) =>{
  xhrData({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}
// 실행하면
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (result)=>{
    console.log(result)
  },
  (error)=>{
    console.error(error)
  }
)

// xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
//   "name": "DG",
//   "username": "dongGyeong",
//   "email": "Sincere@april.biz",
//   "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//       }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//   }
// })
