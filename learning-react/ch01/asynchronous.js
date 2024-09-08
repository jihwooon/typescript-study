const fetch = require('node-fetch');

// fetch 함수는 네트워크 요청을 보내고 프로미스를 반환합니다.
// 프로미스는 비동기 작업이 완료되었을 때 결과 값을 제공하는 객체입니다.
// fetch 함수는 URL을 인수로 받아 해당 URL로 HTTP 요청을 보냅니다.
fetch('https://fakestoreapi.com/products')
  // 첫 번째 then 블록은 fetch 요청이 완료되었을 때 호출됩니다.
  // 응답 객체를 JSON 형식으로 변환합니다.
  .then(res=>res.json())
  // 두 번째 then 블록은 JSON 변환이 완료되었을 때 호출됩니다.
  // 변환된 JSON 데이터를 콘솔에 출력합니다.
  .then(json=>console.log(json))

getFakeProduct()

async function getFakeProduct() {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const getPeople = ()=> {
  new Promise((resolve, reject) => {
    const url = 'https://fakestoreapi.com/products'
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
      request.status == 200 ? resolve(JSON.parse(request.response).results)
        : reject(Error(request.statusText))
    }
    request.onerror = err => reject(err);
    request.send()
  })
}

getPeople()
