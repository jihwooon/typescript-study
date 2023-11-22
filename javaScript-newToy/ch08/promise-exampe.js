const run = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      const succeed = Math.random() > 0.5;
      if (succeed) {
        console.log('42라는 값으로 이행(프라미스를 확장한다)');
      } else {
        console.log("new Error('failed')로 거부");
        throw new Error('failed');
      }
    } catch (e) {
      reject(e);
    }
  }, 100);
});

run()
  .then((firstResult) => {
    console.log('다음 값으로 이행', firstResult); // 프로미스가 이행 된 경우 호출
  })
  .then((secondResult) => {
    console.log('그 다음값으로 이행', secondResult * 2);
  })
  .then((thirdResult) => {
    console.log('그 그 다음값으로 이행', thirdResult * 3);
  })
  .catch((error) => {
    console.log('다음 값으로 거부', error); // 프로미스가 거부된 경우 호출
  })
  .finally(() => {
    console.log('finally'); // 호출/ 거부 상관없이 무조건 호출
  });
