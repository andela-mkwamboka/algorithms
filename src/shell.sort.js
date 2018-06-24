module.exports = (array) => {
	const gap = [701, 301, 132, 57, 23, 10, 4, 1];
	for (let gapIndex = 0; gapIndex < gap.length; gapIndex++) {
		for (let arrayIndex = gap[gapIndex]; arrayIndex < array.length; arrayIndex++) {
			let temp = array[arrayIndex];
			for (var index = arrayIndex; index >= gap[gapIndex] && array[index-gap[gapIndex]] > temp; index -= gap[gapIndex]) {
				array[index] = array[index - gap[gapIndex]];
			}
			array[index] = temp;
		}
	}
  return array;
}