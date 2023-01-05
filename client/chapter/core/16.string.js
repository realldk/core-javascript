/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';
console.log(message);

// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 재할당하면서 기존에 있던 문자열의 글자를 더해주는건 가능
// message = 'more' + message[5];
// message[3] = 'i';
// console.log(message);

// 부분 문자열 추출
let slice = message.slice(0,3);
// 0번째부터 3전까지[2]까지 원소 추출, 아무것도 지정하지 않으면 전부, end는 지정하지 않으면 끝까지
let subString = message.substring(-1, 5);
console.log('subString: ',subString)
let subStr; //없어짐



// 문자열 포함 여부 확인
let indexOf = message.indexOf('p'); //해당문자가 존재하면 제일 앞에 있는 문자의 위치, 없다면 -1을 반환
let lastIndexOf = message.lastIndexOf('i'); 
// indexOf와 같은데 반대로 뒤에서부터 0,1,2 인덱스를 매긴다.
let includes = message.includes('1');
// 포함하고 있으면 true, 아니면 false
let startsWith;
// 첫 글자가 해당문자이면 true, 아니면 false. 빈 문자열을 넣으면 항상 true
let endsWith = message.endsWith('');
console.log(endsWith);
// 마지막 글자 확인. 빈 문자열을 넣으면 true

// 공백 잘라내기
let trimLeft;
let trimRight;
let trim = message.trim();
// 문자 안에 같이 있는 띄워쓰기는 안없어진다.


// 텍스트 반복
let repeat = message.repeat(3);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase = toCamelCase('less is more');
console.log(toCamelCase);
let toPascalCase;

//브라우저 체크 함수
/* function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chrome") > -1) browser = "chrome";
  else if (ua.indexOf("edge") > -1) browser = "edge";
  else if (ua.indexOf("whale") > -1) browser = "whale";
  else if (ua.indexOf("safari") > -1) browser = "safari";
  else if (ua.indexOf("firefox") > -1) browser = "firefox";

  return browser === browserName;
} */