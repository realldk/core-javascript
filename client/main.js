import { insertLast, xhrData, xhrPromise, generalLam, delayP, getNode, renderUserCard } from './lib/index.js'

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

// dom/userList.js에
// 2. 유저 카드 생성하는 함수
// 생성된 카드로 렌더링해주는 함수도 만들자.
const userCardContainer = getNode('.user-card-inner')

async function rendingUserList () {
  let response = await generalLam.get('https://jsonplaceholder.typicode.com/users/1')

  let userData = response.data;  
  renderUserCard(userCardContainer, userData);  //객체 하나만 받아서 렌더링
}

rendingUserList();