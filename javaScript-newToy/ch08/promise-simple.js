// Promise is JavaScript object for asynchornou operation.

// 1. Producer
// when new Promise is creatd, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    reject(new Error('no network'));
  }, 2000);
});

// 2. Consumer: then, catch, finally
promise
  .then((value) => {
  console.log(value);
  })
  .catch((error) => {
  console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => new Promise((resolve) => {
  setTimeout(() => resolve('🐓'), 10000);
});

const getEgg = (hen) => new Promise((resolve) => {
  setTimeout(() => resolve(`${hen} => 🥚`), 1000);
});

const cook = (egg) => new Promise((resolve) => {
  setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen()
  .then(getEgg)
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));
