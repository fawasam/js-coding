let arr = [1, 2, 3, [4, 5, 6, [7, [8], 9]]];

// console.log(arr.flat(3));

Array.prototype.myflat = function (depth) {
  let res = [];
  if (!Array.isArray(this)) {
    throw new Error(`${this}.flat is not a function`);
  }
  this.forEach((el) => {
    if (Array.isArray(el) && depth > 0) {
      res.push(...el.myflat(depth - 1));
    } else {
      res.push(el);
    }
  });
  return res;
};

console.log(arr.myflat(3));
