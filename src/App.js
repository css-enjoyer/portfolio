import './App.css';
import BioColumn from './components/BioColumn';
import InfoColumn from './components/InfoColumn';
import React, { useEffect, useRef } from 'react';


function App() {
	const bgRef = useRef(null);
	useEffect(() => {
		const updateMousePosition = (ev) => {
			if(!bgRef.current) return;
			const {clientX, clientY} = ev;
			// console.log(clientX, clientY);
			bgRef.current.style.setProperty("--x", `${clientX}px`);
			bgRef.current.style.setProperty("--y", `${clientY}px`);
		}
		window.addEventListener('mousemove', updateMousePosition)
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		}
	}, []) 
	
  	return (
	<div ref={bgRef} className="App">
		<BioColumn />
		<InfoColumn />
	</div>
  	);
}

export default App;
