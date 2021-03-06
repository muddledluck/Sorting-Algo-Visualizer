import { checkAlgo, swap } from "../SortingComponents/SortingComponents";

export function getQuickSortAnimations(array) {
	const animations = [];
	if (array.length <= 1){
		return array;
	}
	const auxiliaryArray = array.slice();
	quickSortHelper(auxiliaryArray, 0, array.length-1, animations);
	const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
	array = auxiliaryArray;
	console.log("alog is correct?(Quick Sort) ", checkAlgo(array, javaScriptSortedArray))
	return animations;
}


function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max-min + 1) + min);
}

function quickSortHelper(auxiliaryArray, startIdx, endIdx, animations){
	let pivot;
	if(startIdx < endIdx){
		pivot = partition(auxiliaryArray, startIdx, endIdx, animations);
		quickSortHelper(auxiliaryArray, startIdx, pivot - 1, animations);
		quickSortHelper(auxiliaryArray, pivot + 1, endIdx, animations);
	}
}

function partition(auxiliaryArray, startIdx, endIdx, animations){
	let pivotIdx = randomIntFromInterval(startIdx, endIdx);
	// Index we are comparing, so we push them once to change their color
	animations.push([pivotIdx, endIdx]);
	// Index we are comparing, so we push them second time to revert their color
	animations.push([endIdx, pivotIdx]);
	// Index we are swaping with element
	animations.push([pivotIdx, auxiliaryArray[endIdx]]);
	animations.push([endIdx, auxiliaryArray[pivotIdx]]);

	swap(auxiliaryArray, pivotIdx, endIdx);

	let lessTailIdx = startIdx;

	for (let i = startIdx; i< auxiliaryArray.length; i++){
		if (auxiliaryArray[i] < auxiliaryArray[endIdx]){
			// Index we are comparing, so we push them once to change their color
			animations.push([i, lessTailIdx]);
			// Index we are comparing, so we push them second time to revert their color
			animations.push([i, lessTailIdx]);
			// Index we are swaping with element
			animations.push([i, auxiliaryArray[lessTailIdx]]);
			animations.push([lessTailIdx, auxiliaryArray[i]]);

			swap(auxiliaryArray, i, lessTailIdx);
			lessTailIdx++;
		}
	}
	animations.push([lessTailIdx, endIdx]);
	animations.push([lessTailIdx, endIdx]);
	animations.push([lessTailIdx, auxiliaryArray[endIdx]]);
	animations.push([endIdx, auxiliaryArray[lessTailIdx]]);
	swap(auxiliaryArray, lessTailIdx, endIdx);
	return lessTailIdx
}