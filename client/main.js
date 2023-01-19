import { insertLast, xhrData, xhrPromise, generalLam, delayP, createUserCard } from './lib/index.js'

// async function render(){
//   await delayP(2000);
//   let response = await generalLam.get('https://jsonplaceholder.typicode.com/users/1')

//   console.log(response.data)

// }
// render()

/* xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
  insertLast(document.body, JSON.stringify(res));
})
.catch((err)=>{
  console.log(err);
}) */


/* xhrData.get(

  'https://jsonplaceholder.typicode.com/users/1',
  (result)=>{
    console.log(result)
    insertLast('body',JSON.stringify(result));
  },
  (error)=>{
    console.log(error)
    insertLast('body',error);
  }
) */

//1. rendingUserList라는 함수 만들고
//ajax로 get user list하기

// 2. 유저 카드 생성하는 함수
// 생성된 카드로 렌더링해주는 함수를 만들어야한다.
async function rendingUserList () {
  let response = await generalLam.get('https://jsonplaceholder.typicode.com/users/')

  let userData = response.data;
  
  console.log(userData)
}
  rendingUserList()