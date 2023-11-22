const compareVariable = () => {
  const number = 10;

  number = 20;
  alert(`${number}은 ${number}입니다.`)
};

const popId = () => {
  const userId = document.getElementById('txt_id').value

  userId ? alert(userId) : alert('아이디를 입력해주세요.')

}

function myFunction() {
  alert('1')
  alert('2')
  alert('3')
}

