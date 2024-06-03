const sortingByAge = require("./app");

test("Testing if the first user is due after sorting", () => {
  const sortedData = sortingByAge();

  expect(sortedData[0].name).toBe("due");
});

test("Testing if the lat user is smith after sorting", () => {
  const sortedData = sortingByAge();

  expect(sortedData[sortedData.length - 1].name).toBe("smith");
});

test("Testing if the sorted data has length of 4", () => {
  const sortedData = sortingByAge();

  expect(sortedData).toHaveLength(4);
});

test("Testing if the ouptput is not undefined", () => {
  const sortedData = sortingByAge();

  expect(sortedData).not.toBe(undefined);
});
