import './App.css';
import BioColumn from './components/BioColumn';
import InfoColumn from './components/InfoColumn';
import React, { useEffect, useRef } from 'react';

// USE NPM DEPLOY
function App() {
	const bgRef = useRef(null);
	useEffect(() => {
		document.title = "Isaac Reyes"
	 }, []);

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

// To Add:
// - Relevant Course Works == DONE
// -- Add a hover indicator == DONE
// -- Add a link indicator == DONE
// - Add more secondary colors (green) == DONE
// - Make fonts uniform == DONE
// -- For links == DONE
// -- For headers == DONE
// -- For descriptions == DONE
// -- For lists == DONE
// -- For buttons == DONE
// - List of Technologies == DONE
// - Add images/logos/icons/emojis/color for more personality
// - Better intro on bio column
// - Graduation/School Year Countdown
// - Create an optional button to show ALL projects made
// - Idle video display on bio bio column
// - Create interesting and impressive projects == sorta
// - Start contributing to open source projects
// - Fix display on ipads (both columns intersect)