// Promise 설명
/** 
 * 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
 * Then을 붙이면 결과를 반환함
 * 실행이 완료되지 않았으면 완료된 후에 Then 내부 함수가 실행됨
 * @param resolve 
 * @param reject
 * @returns 호출 성공하면 성공 호출 아닐 시 실패 호출
 */

const condition = true;
const promise = new Promise((resolve, reject) => {
    if (!condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

// Promise.resolve(성공리턴값): 바로 resolve 하는 프로미스
// Promise.reject(실패리턴값): 바로 reject 하는 프로미스
promise.then((message) => {
    console.log(message)
})
    .catch((error) => {
        console.log(error);
    })

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

// Promise.all 설명
/** 
 * 여러 개의 프로미스를 동시에 실행
 *
 * @param {string} promise1
 * @param {string} promise2
 * @returns 호출 성공하면 promise 값을 배열로 반환 
 */
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
