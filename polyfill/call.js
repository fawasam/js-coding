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

Function.prototype.mycall = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }
  //  attach this function into obj.fn then call it
  obj.fn = this;
  obj.fn(...args);
};

let printMyAddress2 = printAddress.mycall(
  name,
  "Thiruvambady",
  "kerala",
  "india"
);
