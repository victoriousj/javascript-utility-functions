const areIdentical = arr => arr.every(v => v === arr[0]);

const areSortedNumbers = arr => arr.every((v, i, a) => !i || a[i - 1] <= v);

const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return null;
};
