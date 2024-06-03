//return filters array

const arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

let res = arr.myReduce((acc, cur) => {
  return acc + cur;
}, 9);

console.log(res);
