/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', function(){
  console.log('%c visual','background:dodgerblue');
})
news.addEventListener('click', function(){
  console.log('%c news','background:orange');
})
// // desc.addEventListener('click', function(){
// //   console.log('%c desc','background:pink');
// // })

//원하는 구역만 찍기 위해서, 안에 메서드
// desc.addEventListener('click', function(e){
//   e.stopPropagation()
//   console.log('%c desc','background:pink');
// })

// e.target과 e.currentTarget
visual.addEventListener('click', (e) => {
  // console.log('target: ', e.target ); // 마우스가 제일 처음 클릭한 애
  // console.log('currentTarget: ', e.currentTarget) // 
  // console.log(this === e.currentTarget);
  // console.log(e.currentTarget); 
  console.log(this) //는 window가 나온다. 화살표 함수이기 때문
  console.log('%c visual','background:dodgerblue');
  css('.pop', 'display', 'block');
})

// getNode('.pop').addEventListener('click', (e)=>{
//   e.stopPropagation();
//   css('.pop', 'display', 'none');
// })

/* 캡처링 ----------------------------------------------------------------- */