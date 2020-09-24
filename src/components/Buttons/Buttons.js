import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Buttons = ({resetArray, mergeSort, quickSort, heapSort, volume }) => {
		return(
			<Navbar bg="light" expand="lg">
				<Button 
					className="mr-3" 
					onClick={() => resetArray(volume)}>
						Generate New Array
				</Button>
				<Button 
					className="mr-3" 
					onClick={() => mergeSort()}>
						Marge Sort
				</Button>
				<Button 
					className="mr-3" 
					onClick={() => quickSort()}>
						Quick Sort
				</Button>
				<Button 
					className="mr-3" 
					onClick={() => heapSort()}>
						Heap Sort
				</Button>
				<Button 
					className="mr-3" 
					onClick={() => resetArray(volume)}>
						Bubble Sort
				</Button>
			</Navbar>
			)
}

export default Buttons;