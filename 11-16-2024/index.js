// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

function bald(x) {
  let ans = "";
  let count = 0;
  let ans2;
  for (let i = 0; i < x.length; i++) {
    if (x[i] == "/") {
      count++;
      ans += "-";
    } else {
      ans += "-";
    }
  }
  if (count === 0) {
    ans2 = "Clean!";
  }
  if (count === 1) {
    ans2 = "Unicorn!";
  }
  if (count === 2) {
    ans2 = "Homer!";
  }
  if (count === 3 || count === 4 || count === 5) {
    ans2 = "Careless!";
  }
  if (count > 5) {
    ans2 = "Hobo!";
  }
  return [String(ans), ans2];
}
