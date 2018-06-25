module.exports = (array) => {
  const length = array.length;
  for(let index = 1; index < length; index++) {
    let currentIndex = index;
    let currentItem = array[index];
    while (currentIndex > 0 && array[currentIndex-1] > currentItem){ 
      array[currentIndex] = array[currentIndex-1];
      currentIndex--;  
     }
     array[currentIndex] = currentItem;
  }
  return array;
};