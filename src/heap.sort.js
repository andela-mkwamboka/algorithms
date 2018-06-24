// import swap function
const swap = require('./swap')

// build the heap
const buildHeap = (array) => {
  const heapSize = array.length;  
  for (let index = Math.floor(array.length / 2); index >= 0; index--) {
    heapify(array, heapSize, index);  
  } 
};

// transform array to a heap
const heapify = (array, heapSize, index) => {
  let left = index * 2 + 1,
      right = index * 2 + 2,
      largest = index;
  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }
  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, heapSize, largest);
  }
};

module.exports = (array) => {
  let heapSize = array.length;
  buildHeap(array);
  while(heapSize > 1) {
    heapSize--;
    swap(array, 0, heapSize);   
    heapify(array, heapSize, 0);
 }
 return array;
};