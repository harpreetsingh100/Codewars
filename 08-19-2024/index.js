// Write a function that doubles every second integer in a list, starting from the left.

// Exapmle
// [1,2,3,4] => [1,4,3,8]

function doubleEveryOther(arr) {
  const doubled = arr.map((elm, i) => {
    if (i % 2 == 0) {
      return elm;
    } else {
      return elm * 2;
    }
  });
  return doubled;
}
