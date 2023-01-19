
// fetch는 프로미스를 반환한다. 그래서 async await을 이용해서 결과값을 뽑아낼 수 있다.

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credentail: 'same-origin',
  redirect: 'follow',
  referrePolicy: 'no-referre',
  headers: {'Content-Type':'application/json; charset=UTF-8'}
}

export const generalLam = async (options = {}) => {
  
  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    // ...defaultOptions.headers, ... options.headers를 합성을 해서 headers에 반환, ??널리쉬 연산자 앞의 것이 undefined나 null이면 뒤의 값을 반환
    headers: {...(defaultOptions.headers ?? {}), ...(options.headers ?? {})}
  }

    let response = await fetch(url, restOptions)

  // 통신이 성공했는지 확인
  if(response.ok){
    // response.json()이 프로미스이기 때문에 await 해주기
    response.data = await response.json()
  }

  //얘도 프라미스다.
  return response;
}

// generalLam();
// result 값을 읽기 위해서는 await generalLam()을 해야한다.

generalLam.get = async (url, options) => { // async?
  return generalLam({
    url,
    ...options  //!!이렇게 써야한다
  })
}
generalLam.post = (url, body, options) => {
  return generalLam({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options  //!!이렇게 써야한다
  })
}
generalLam.put = (url, body, options) => {
  return generalLam({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options  //받은 객체를 전개
  })
}
generalLam.delete = (url, options) => {
  return generalLam({
    method: 'DELETE',
    url,
    ...options  //!!이렇게 써야한다
  })
}