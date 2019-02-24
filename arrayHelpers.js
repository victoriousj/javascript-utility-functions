const areIdentical = arr => arr.every(v => v === arr[0]);

const areSortedNumbers = arr => arr.every((v, i, a) => !i || a[i - 1] <= v);

const shuffleArr = arr => {
  let swapIndex = arr.length;
  let temp, randomIndex;

  while (swapIndex !== 0) {
    randomIndex = Math.floor(Math.random() * swapIndex);

    swapIndex -= 1;

    temp = arr[swapIndex];
    arr[swapIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
};
