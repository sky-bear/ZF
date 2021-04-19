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

// 11undefinedaanull10false

const b = {
  1: 1000,
};
Object.keys(b).forEach((key) => {
  console.log(typeof key);
});
