import { checkAlgo } from "../SortingComponents/SortingComponents";

export function getMergeSortAnimations(array) {
	const animations = [];
	if (array.length <= 1){
		return array;
	}
	const auxiliaryArray = array.slice(); // copy of a main array
	const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
	mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
	console.log("alog is correct(Marge Sort)? ", checkAlgo(array, javaScriptSortedArray))
	return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations){
	if (startIdx === endIdx){
		return;
	}
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
	mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
	doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations){
	let k = startIdx;
	let i = startIdx;
	let j = middleIdx + 1;
	while(i <= middleIdx && j <= endIdx){
		//Index we are comparing, so we push them once to change their color
		animations.push([i, j])
		// Index we are comparing, so we push them second tiem to revert their color
		animations.push([i, j])
		if (auxiliaryArray[i] <= auxiliaryArray[j]){
			//we compair the ith element of auxiliary array with jth element of auxiliary array, and then replace in main array
			animations.push([k, auxiliaryArray[i]]);
			mainArray[k++] = auxiliaryArray[i++]
		} else {
			//we compair the ith element of auxiliary array with jth element of auxiliary array, and then replace in main array
			animations.push([k, auxiliaryArray[j]]);
			mainArray[k++] = auxiliaryArray[j++];
		}
	}
	while (i<=middleIdx){
		//Index we are comparing, so we push them once to change their color
		animations.push([i, i])
		// Index we are comparing, so we push them second tiem to revert their color
		animations.push([i, i])
		// We orverwrite the value at index k in the original array with the value at index i in the auxiliary array
		animations.push([k, auxiliaryArray[i]]);
		mainArray[k++] = auxiliaryArray[i++];
	}
	while(j <= endIdx){
		//Index we are comparing, so we push them once to change their color
		animations.push([j, j])
		// Index we are comparing, so we push them second tiem to revert their color
		animations.push([j, j])
		// We orverwrite the value at index k in the original array with the value at index j in the auxiliary array
		animations.push([k, auxiliaryArray[j]]);
		mainArray[k++] = auxiliaryArray[j++];
	}
}