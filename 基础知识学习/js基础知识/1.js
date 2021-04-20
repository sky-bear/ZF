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
for(let i = 0;i<3; i++) {
  for (let j = 0; j< 3;j++) {
    console.log(i,j,num)
    if(i===1 && j === 1) {
      console.log(i,j)
      break;
    };
    num ++;
  }
}
console.log(num)



