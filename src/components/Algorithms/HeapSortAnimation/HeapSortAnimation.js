import { checkAlgo, swap } from "../SortingComponents/SortingComponents";

export function getHeapSortAnimations(array){
	const animations = [];
	if (array.length <= 1){
		return array;
	}
	const auxiliaryArray = array.slice();
	heapSortHelper(auxiliaryArray, array.length, animations);
	const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
	array = auxiliaryArray;
	console.log("alog is Correct(Heap Sort)? ", checkAlgo(array, javaScriptSortedArray))
	return animations;
}

function heapSortHelper(auxiliaryArray, arrLength, animations){
	// Build a maxheap
	const midIdx = Math.floor((arrLength / 2) - 1);
	for (let i = midIdx; i >= 0; i--){
		heapify(auxiliaryArray, arrLength, i, animations);
	}

	// One by one  extract elements
	for (let i = arrLength - 1; i > 0; i--){
		animations.push([i, 0]);
		animations.push([0, i]);
		animations.push([i, auxiliaryArray[0]]);
		animations.push([0, auxiliaryArray[i]])
		swap(auxiliaryArray, i, 0);
		heapify(auxiliaryArray, i, 0, animations);
	}
}
function heapify(auxiliaryArray, arrLength, current, animations){
	let largest = current; // Initialize largest as root
	const left = 2 * current + 1; 
	const right = 2 * current + 2;

	// Check if left child of root exists and is greater than root
	if (left < arrLength && auxiliaryArray[current] < auxiliaryArray[left]){
		largest = left;
	}

	// Check if right child of root exists and is greater than root
	if (right < arrLength && auxiliaryArray[largest] < auxiliaryArray[right]){
		largest = right;
	}

	// Change root, if needed
	if (largest !== current){
		animations.push([current, largest]);
		animations.push([largest, current]);
		animations.push([current, auxiliaryArray[largest]]);
		animations.push([largest, auxiliaryArray[current]]);
        swap(auxiliaryArray, current, largest);
		heapify(auxiliaryArray, arrLength, largest, animations);
	}
}