let x = [1, 2, 3];
let y = x;
let z = [4, 5, 6];
y[0] = 10;
y = z;
z[1] = 20;
x[2] = z = 30;
console.log(x, y, z);

const add = () => {
  console.log(this, 123);
};

const A = {
  fn() {
    console.log(this);
    add();
  },
};
A.fn();

let a = 10 + null + true + [] + undefined + "aa" + null + [] + 10 + false;

const n = [100, 20, 400];
const x = [200, 300];
const m = [200, 300];

let n = [10, 20];
let m = n;
let x = m;
m[0] = 100;
x = [30, 40];
x[0] = 200;
m = x;
m[1] = 300;
n[2] = 400;
console.log(x, m, n);

// const a = { n: 2 };
// const b = { n: 1, x: { n: 2 } };

let a = { n: 1 };
let b = a;

a.x = a = {
  n: 2,
};

console.log(a, b);
a.y = 5;
console.log(a, b);
