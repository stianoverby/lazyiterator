
require("./index.js");

/* Test case for the filter method */
test("Lazy iterator filters values correctly", () => {
  const input = [1, 2, 3, 4, 5];
  const expectedOutput = [2, 4];
  const lazyIterator = input.lazyIterator().filter((x) => x % 2 === 0);
  const actualOutput = Array.from(lazyIterator);
  expect(actualOutput).toEqual(expectedOutput);
});

/* Test case for the map method */
test("Lazy iterator maps values correctly", () => {
  const input = [1, 2, 3, 4, 5];
  const expectedOutput = [2, 4, 6, 8, 10];
  const lazyIterator = input.lazyIterator().map((x) => x * 2);
  const actualOutput = Array.from(lazyIterator);
  expect(actualOutput).toEqual(expectedOutput);
});

/* Test case for the take method */
test("Lazy iterator takes correct number of elements", () => {
  const input = [1, 2, 3, 4, 5];
  const expectedOutput = [1, 2, 3];
  const lazyIterator = input.lazyIterator().take(3);
  const actualOutput = Array.from(lazyIterator);
  expect(actualOutput).toEqual(expectedOutput);
});

/* Test case for the forEach method */
test("Lazy iterator executes forEach correctly", () => {
  const input = [1, 2, 3, 4, 5];
  const expectedOutput = [2, 4, 6, 8, 10];
  const lazyIterator = input.lazyIterator().map((x) => x * 2);
  const actualOutput = [];
  lazyIterator.forEach((x) => actualOutput.push(x));
  expect(actualOutput).toEqual(expectedOutput);
});

/* Test case for chaining multiple operations */
test("Lazy iterator correctly applies multiple operations", () => {
  const input = [1, 2, 3, 4, 5];
  const expectedOutput = [6, 8, 10];
  const lazyIterator = input
    .lazyIterator()
    .map((x) => x * 2)
    .filter((x) => x > 5);
  const actualOutput = Array.from(lazyIterator);
  expect(actualOutput).toEqual(expectedOutput);
});
