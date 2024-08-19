// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

const getMinMaxNumber = (arr) => {
  if (arr.length === 1) {
    return [arr[0], arr[0]];
  }
  const minNumber = Math.min([...arr]);
  const maxNumber = Math.max([...arr]);
  return [minNumber, maxNumber];
};

//Exapmle

// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
