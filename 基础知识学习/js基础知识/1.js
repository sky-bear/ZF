// console.log(typeof 1);
// console.log(typeof NaN);
// console.log(typeof "1");
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof function () {});

// let i = 1;

// do {
//   i++;
//   console.log(1);
// } while (i < 10);

let num = 0;
out: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      console.log(i, j);
      break out;
    }
    num++;
  }
}
console.log(num);

const aa = { n: 1 };
for (let a in aa) {
  console.log(a);
}
