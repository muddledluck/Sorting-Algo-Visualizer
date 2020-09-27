import React from 'react';
import SizeRange from '../SizeRange/SizeRange';
import Buttons from '../Buttons/Buttons';
import { getMergeSortAnimations } from '../Algorithms/MergeSortAnimation/MeargeSortAnimation';
import { getQuickSortAnimations } from '../Algorithms/QuickSortAnimation/QuickSortAnimation';
import { getHeapSortAnimations } from '../Algorithms/HeapSortAnimation/HeapSortAnimation';
import { getBubbleSortAnimations } from '../Algorithms/BubbleSortAnimation/BubbleSortAnimation';
import './SortingVisualizer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class SortingVisualizer extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			array: [],
			size: 20,
			color: 'red',
		}
	}
	componentDidMount(){
		this.resetArray(this.state.size);
	}

	handleOnChange = (value) => {
		this.setState({size: value})
	}

	resetArray = (value) => {
		const array = [];
		for (let i = 0; i< value; i++){
			array.push(randomIntFromInterval(5, 700));
		}
		this.setState({array, color: 'green'});
		const arrayBars = document.getElementsByClassName('array-bar');
		for (let i = 0; i < arrayBars.length; i++){
			arrayBars[i].style.backgroundColor = this.state.color;
		}
	}

	mergeSort = () => {
		const {array, size} = this.state;
		const animations = getMergeSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName('array-bar');
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 3 === 0 ? "red" : "purple";
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, (i * 500)/size);
			} else {
				setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.backgroundColor = "turquoise";
          barOneStyle.height = `${newHeight}px`;
        }, (i * 1000)/ size);
			}
		}
	}

	quickSort = () => {
		const { array, size } = this.state;
		const animations = getQuickSortAnimations(array);
		for (let i = 0; i < animations.length; i++){
			const arrayBars = document.getElementsByClassName('array-bar');
			const isColorChange = i % 4 < 2;
			if (isColorChange){
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 4 === 0 ? 'red' : 'turquoise';
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, (i * 1000)/size);
			} else {
				setTimeout(() => {	
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.height = `${newHeight}px`;
				}, (i * 1000)/size);
			}
		}
	}

	heapSort = () => {
		const { array, size } = this.state;
		const animations = getHeapSortAnimations(array);
		for (let i = 0; i < animations.length; i++){
			const arrayBars = document.getElementsByClassName('array-bar');
			const isColorChange = i % 4 < 2;
			if (isColorChange){
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 4 === 0 ? 'red' : 'turquoise';
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, (i * 1000)/ size);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.height = `${newHeight}px`;
					}, (i * 1000) / size);
			}
		}
	}


	bubbleSort = () => {
		const { array, size } = this.state;
		const animations = getBubbleSortAnimations(array);
		for (let i = 0; i < animations.length; i++){
			const arrayBars = document.getElementsByClassName('array-bar');
			const isColorChange = i % 4 < 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 4 === 0 ? 'red' : 'turquoise';
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, (i * 1000) / size);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.backgroundColor = "purple";
					barOneStyle.height = `${newHeight}px`;
				}, (i * 100) / size);
			}
		}
	}
	render() {
		const {array} = this.state;
		let { size } = this.state;
		return (
			<div>
				<Buttons resetArray={this.resetArray} mergeSort = {this.mergeSort} quickSort = {this.quickSort} heapSort = {this.heapSort} bubbleSort = {this.bubbleSort} volume={size}/>
				<SizeRange state={this.state} resetArray={this.resetArray} />
				<div className="array-container">					
					{
						array.map((value, idx) => (
										
										<div  
											className="array-bar" 
											key={idx} 
											style={{height: `${value}px`, width: `${600/size}px`, background: this.state.color}}></div>
										)
						)
					}
				</div>
			</div>
			);
		}
	}


//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max-min + 1) + min);
}
export default SortingVisualizer;