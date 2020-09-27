import { checkAlgo, swap } from "../SortingComponents/SortingComponents";

export function getBubbleSortAnimations(array){
	const animations = [];
	if (array.length <= 1){
		return array;
	}
	const auxiliaryArray = array.slice();
	bubbleSortHelper(auxiliaryArray, array.length, animations);
	const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
	array = auxiliaryArray;
	console.log("alog is Correct (Bubble Sort)? ", checkAlgo(array, javaScriptSortedArray));
	return animations;
}

function bubbleSortHelper(auxiliaryArray, arrLength, animations){
	for(let i = 0; i < arrLength; i++){
		let swapped = false;
		for(let j = 0; j < arrLength - 1; j++){
			if (auxiliaryArray[j] > auxiliaryArray[j + 1]){
				animations.push([j, j+1]);
				animations.push([j + 1, j]);
				animations.push([j, auxiliaryArray[j+1]]);
				animations.push([j+1, auxiliaryArray[j]]);
				swap(auxiliaryArray, j, j+1);
				swapped = true;
			}
		}
		if(!swapped){
			break;
		}
	}
}