//return filters array

const arr = [1, 2, 3, 4];

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

let res = arr.myFilter((el) => el < 3);

console.log(res);
