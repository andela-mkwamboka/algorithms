const quickSort = (array) =>  {
  if (array.length == 0) {
    return [];
  }  
  let left = [],
      right = [],
      pivot = array[0];
      for (let index = 1; index < array.length; index++) {
        if (array[index] < pivot) { 
          left.push(array[index]);
        } else {  
          right.push(array[index]);  
        }  
     }
     return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = quickSort;