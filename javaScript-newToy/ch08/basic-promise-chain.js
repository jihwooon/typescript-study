const worker = (label) => new Promise((resolve, reject) => {
  setTimeout(() => (Math.random() < 0.2 ? reject(new Error(`${label} operation failed`)) : resolve(`${label} result`)), Math.random() * 100);
});

const firstOperation = () => worker('first');
const secondOperation = () => worker('second');
const thirdOperation = () => worker('third');

firstOperation()
  .then(secondOperation)
  .then((secondResult) => thirdOperation(secondResult * 2))
  .then((thirdResult) => {
    console.log('final fulfillment handler, thirdResult:', thirdResult);
    if (Math.random() < 0.2) {
      throw new Error('final fulfillment handler threw');
    }
  })
  .catch((error) => {
    console.error('rejection handler ran, rejection is:', error);
  });
