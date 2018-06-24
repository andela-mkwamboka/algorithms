// import swap function
const swap = require('./swap')

module.exports = (array) => {
  const length = array.length;
  for (let index1 = 0; index1 < length; index1++){
    for (let index2 = 0; index2 < length - 1; index2++ ){
      if (array[index2] > array[index2 + 1]){
        swap(array, index2, index2 + 1);
      }
    }
  }
  return array
}