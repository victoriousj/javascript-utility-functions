const areIdentical = arr => arr.every(v => v === arr[0]);

const areSortedNumbers = arr => arr.every((v, i, a) => !i || a[i - 1] <= v);

const shuffleArr = arr => {
  const newArr = [];
  const copy = [...arr];

  while (arr.length) {
    const i = Math.floor(Math.random() * arr.length);
    newArr.push(arr.splice(i, 1)[0]);
  }

  console.log(arr);
  arr = copy;
  console.log("copy", copy);
  console.log("arr", arr);
  return newArr;
};
