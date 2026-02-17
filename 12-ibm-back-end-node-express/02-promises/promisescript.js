// creating a promise method. the promise will get resolved when the timer times out after 6 seconds
let myPromise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 6000);
});

// Console log before calling the promise
console.log("Before calling promise");

// Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
  console.log("From callback ", successMessage);
});

console.log("After calling promise");
