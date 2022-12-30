/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  hasOwnProperty: function (){
    return '헤헤';
  }
};

// let key = 'currentVersion';

// console.log(javaScript.hasOwnProperty(key)); 
// 이렇게 써버리면 객체에 hasOwnProperty라는 키가 있고 값으로 함수 객체가 있을 때 함수의 return값이 나올 수 있다. 때문에 이렇게 보다는 진짜 Object의 hasOwnProperty함수를 쓰는게 좋다.

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
// console.log(key in javaScript);
// Object.prototype.nickName = 'tiger';

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// 객체에 hawOwnProperty라는 키가 있는 상황이라면
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));
// 진짜 Object의 기능을 이용한다. call은 빌려쓰기 기능(빌려쓸대상, 실행할 값)이고 빌려쓸대상이 자신이 쓰는 것처럼 쓸 수 있다.

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
for (let key in javaScript) {
  // if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
  // }
  console.log(key);
}
// - 배열 객체 순환에 사용할 경우?
// 객체에 양보하라. for in 쓰지마라.

let tens = [10,100,1000,10000];


for(let value in tens){
  if( ({}).hasOwnProperty.call(tens,value)){
    console.log(tens[value]);
  }
}