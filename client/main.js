/* global gsap */
import { insertLast, xhrData, xhrPromise, generalLam, delayP, getNode, renderUserCard, changeColor, renderSpinner, renderEmptyCard, getNodes, attr } from './lib/index.js'

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
  renderSpinner(userCardContainer);
  try{
    await delayP(2000);
    // .remove()하면 사라진다. element.remove()메서드가 있다. element를 DOM에서 지워준다.
    getNode('.loadingSpinner').remove();
    let response = await generalLam.get('http://localhost:3000/users')

    let userData = response.data;
    // 객체 전체를 받아 렌더링
    userData.forEach(data => {  
      renderUserCard(userCardContainer, data);  
    })
    //배열로 만들어주는 gsap의 유틸함수
    // gsap.utils.toArray('.user-card')
    // theme.js에 설정해놓은 함수로 배열에 색입혀주기
    changeColor('.user-card')
    //gsap을 이용한 애니메이션 효과 설정
    gsap.to(gsap.utils.toArray('.user-card'), {
      x:0,
      opacity:1,
      duration:1.5,
      stagger: 0.2} ) // 등장하는 요소들간의 시간간격

  }catch(err){
    renderEmptyCard(userCardContainer)
  }
}

// 삭제버튼을 클릭하면 그 카드가 없어지게
// delete통신 만들기
// 이벤트 위임
function deletehandler(e) {
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  // 조건문 안에서는 식으로 작동하지 않는다. true씨 뭐 따져서 나오는게 아니고
  // button을 누르면 button이랑 부모중에 article도 있으니 되고, article누르면 button은 찾을 수 없어서 return이 된다.
  if(!article || !deleteButton) return;
  let id = attr(article, 'data-index').slice(5);
  generalLam.delete(`http://localhost:3000/users/${id}`).then(()=>{
    // 화면을 한 번 초기화 시켜주고, 이걸해야 새로 불러오는게 된다.
    userCardContainer.innerHTML = '';
    rendingUserList();
  })
}


rendingUserList();
userCardContainer.addEventListener('click', deletehandler);