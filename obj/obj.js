//dynamic key

// TWO KEY WITH SAME NAME FIRST KEY WILL BE REPLACED WITH FIRSY KEY WITH LAST VALUE

const property = "age";
const age = 22;

const user = {
  firstname: "fawas",
  lastname: "a m",
  [property]: age,
  firstname: "FAWAS",
};

// console.log(user.firstname);

for (key in user) {
  //   console.log(key + ":" + user[key]);
}

//  2
const nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
multiplyByTwo(nums);
console.log(nums);

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  //   console.log(code); // 1, 41, 44, 49
}

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

console.log(family);
