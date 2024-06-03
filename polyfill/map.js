//return array

const arr = [1, 2, 3, 4];

// arr.map((el) => el*2);

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};

let res = arr.myMap((el) => el * 3);

console.log(res);
