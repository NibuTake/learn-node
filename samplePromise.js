// Promise
// 1. 宣言時にPending状態になる（callback処理未確定）
function hoge(data) {
  return new Promise(function (callback) {
    setTimeout(function () {
      callback(data * 2);
    }, 1000);
  });
}

console.log("Before declaring promise");

// 2. thenで結果を取り出す(処理結果が定まる)
const h = hoge(100);

h.then((data) => {
  console.log(data); // => 200
});

console.log("Done");

// async function callPromise() {
//   console.log("Start");
//   const v = await hoge(100);
//   console.log(v);
//   console.log("Finish");
// }

// callPromise();
