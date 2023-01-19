import { isString } from './typeOf.js'

const {
  localStorage: storage,
  JSON: {stringify:serialize, parse: deserialize}  //직렬화, 역직렬화 JSON.stringify() 를 serialize로 한 것
} = globalThis

// // 키 세팅하기
// storage.setItem('name', 'dg')

// // 키 읽어오기
// console.log(storage.getItem('name'))

// // 제거하는거
// storage.removeItem('name')
// storage.clear() // 다 제거

// 또틸함수 만들기

const albums = [ 'asdf', 'gsdafg'

]

export function saveStorage(key, value){
  return new Promise((resolve, reject)=>{
    if(isString(key)){
      // 배열이나 객체를 저장하려면 문자화해줘야한다
      storage.setItem(key,serialize(value));
      resolve();
      }else{
        reject({message: 'key는 문자타입이어야 합니다.'})
      }
  })
}

// saveStorage('name', albums)
// loadStorage()

export function loadStorage(key){
  return new Promise((resolve, reject)=>{
    if(isString(key)){
      resolve(deserialize(storage.getItem(key)))
    }else{
      reject({message: 'key는 문자 타입이어야 합니다.'})
    }
  })
}

// loadStorage('name').then((res)=>{
//   console.log(res);
// })

export function deleteStorage(key){
  return new Promise((resolve, reject)=>{
    if(isString(key)){
      !key ? storage.clear() : storage.removeItem(key);
      resolve();
    }else{
      reject();
    }
    // if(!key){
    //   storage.claer();
    // }else{
    //   storage.removeItem(key);
    // }
  })
}