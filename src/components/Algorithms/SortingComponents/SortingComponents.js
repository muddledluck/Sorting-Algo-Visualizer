export function checkAlgo(array, javaScriptSortedArray){
	if(array.length !== javaScriptSortedArray.length){
		return false;
	}
	for (let i = 0; i < array.length; i++){
		if (array[i] !== javaScriptSortedArray[i]){
			return false;
		}
	}
	return true;
}

export function swap(array, startIdx, endIdx){
	const temp = array[startIdx];
	array[startIdx] = array[endIdx];
	array[endIdx] = temp;
}