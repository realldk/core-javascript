import { deleteStorage, getNode, loadStorage, saveStorage } from './lib/index.js';

const textField = getNode('#textField')
const deleteButton = getNode('input[value="삭제"]')

// 새로고침해도 입력값이 날아가지 않도록
loadStorage('area').then((res)=>{
  textField.value = res;
})

function inputHandler(){
  saveStorage('area',textField.value);
}

// 삭제버튼을 클릭했을 때 storage가 다 날아가는
function deleteHandler(){
  deleteStorage('');
}


// 인풋창에 입력이 들어오는걸 계속 체크하는 이벤트 input
textField.addEventListener('input', inputHandler)
deleteButton.addEventListener('click', deleteHandler)