/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

console.log(Array.isArray(arr));

// isArray가 만들어지는 원리
function isArray(data) {
  return Object.prototype.toString.call(null).slice(8, -1).toLowerCase() === 'array';
}
// 
/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {};

arr.forEach(function (item, index) {
  this[index] = item;
}, user)

// span요소를 선택해서 이벤트만들기
// const span = document.querySelectorAll('span');
// span.forEach((item,index)=>{

//   item.addEventListener('click',(e)=>{
//     console.log(e.target.style.background = 'orange');
//     console.log(index);
//   })

// })


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
arr.reverse();
// splice
arr.splice(1,3,23,5);
// sort
arr.sort((a, b)=>{
  return a - b;
})
// 내부 알고리즘
function compare(a, b) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우
  if (a < b) return -1; //  첫 번째 값이 두 번째 값보다 작은 경우
}
/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ['밥먹기', '미용실가기', '코딩공부하기'];

let template = todo.map(list=>{  //todoList가 들어가는 이유. 그냥 변수이름
  return /* html */ `<li>${list}</li>`;
})

//? 뭐인지 모르겠음
template.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item)
})

let newArray = arr.map(item => item * 2);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
arr.indexOf();
// lastIndexOf
// includes
arr.includes();

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]

// find
const find = users.find((item,index)=>{
  return item.id === 3; // id < 2 , id < 5에서 해당되는 처음 하나만 반환
})
// findIndex 해당 요소의 index만 반환
const findIndex = users.findIndex((item)=>{
  return item.id === 3; //
})


/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

let filter = arr.filter((number)=>{
  return number > 100;
})
/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

// reduce

//친구들 나이의 총합 구하기
let reduceAge = friends.reduce((acc,cur)=>{
  return acc + cur.age;
}, 0);

let template2 = todo.reduce((acc,cur,index)=>{
  return /* html */acc + `<li>할일${index + 1} : ${cur}의 값</li>`
},'');
// reduceRight
// 오른쪽에서부터 돌아서 순서가 반대로 되는 것

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현';

// split : 문자를 구분자를 기준으로 -> 배열
let nameArray = str.split(' ');

// join : 배열을 문자로 합치는 것
let join = nameArray.join(' / ');