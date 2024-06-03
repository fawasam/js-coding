let sum = (a) => (b) => b ? sum(a + b) : a;

const output = sum(1)();

console.log(output);
