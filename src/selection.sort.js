// import swap function
const swap = require('./swap')

module.exports = (array) => {
  for (let index1 = 0; index1 <= array.length - 2; index1++) {
    let min = index1;
    for (let index2 = index1 + 1; index2 <= array.length - 1; index2++) {
      if (array[index2] < array[min]) {
        min = index2;
      }
    }
    swap(array, index1, min);
  }
  return array;
};