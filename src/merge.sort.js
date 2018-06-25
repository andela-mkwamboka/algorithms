const mergeSort  = (array) => {
  const length = array.length;
  if(length === 1) {
    return array;
  };
  const mid = Math.floor(length/2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [],
      leftIndex = 0,
      rightIndex = 0;

  while( leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else{  
      result.push(right[rightIndex++]); 
    }  
  }
  
  while (leftIndex < left.length){
    result.push(left[leftIndex++]);  
  }  
  while (rightIndex < right.length){
    result.push(right[rightIndex++]);  
  }  
  return result;
};

module.exports = mergeSort