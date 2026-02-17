let promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise A resolved");
  }, 6000);
});

let promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise B resolved");
  }, 3000);
});

promiseA.then((successMessage) => {
  console.log("call A", successMessage);
  promiseB.then((successMessage) => {
    console.log("call B", successMessage);
  });
});
