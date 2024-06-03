let name = {
  firstname: "fawas",
  lastname: "a m",
};

let printAddress = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

Function.prototype.mybind = function (obj, ...args1) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }
  obj.fn = this;
  return function (...args2) {
    obj.fn(...args1, ...args2);
  };
};

let printMyAddress = printAddress.mybind(name, "TDY");
printMyAddress("kerala", "india");
