const users = [
  {
    name: "john",
    age: 30,
  },
  {
    name: "smith",
    age: 45,
  },
  {
    name: "due",
    age: 12,
  },
  {
    name: "sam",
    age: 40,
  },
];

function sortingByAge() {
  const data = users.sort((a, b) => a.age - b.age);
  return data;
}

console.log(sortingByAge());

module.exports = sortingByAge;
