// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Example

// well(["bad", "bad", "bad"]), "Fail!";
// well(["good", "bad", "bad", "bad", "bad"]), "Publish!";
// well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
//   "I smell a series!";

function well(x) {
  let goodCount = 0;
  let badCount = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i] == "good") {
      goodCount++;
    } else {
      badCount++;
    }
  }

  if (goodCount === 1 || goodCount === 2) {
    return "Publish!";
  }
  if (goodCount > 2) {
    return "I smell a series!";
  }
  if (goodCount === 0) {
    return "Fail!";
  }
}
