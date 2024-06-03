let name = {
  firstname: "fawas",
  lastname: "a m",
};

let printAddress = function ([hometown, state, country]) {
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

Function.prototype.myapply = function (obj, ...args) {
  console.log(args);
  if (typeof this !== "function") {
    throw new Error("not callable");
  }

  if (!Array.isArray(...args)) {
    throw new Error("TypeError: CreateListFromArrayLike called on non-object");
  }
  obj.fn = this;
  obj.fn(...args);
};

let printMyAddress2 = printAddress.myapply(name, [
  "Thiruvambady",
  "kerala",
  "india",
]);
