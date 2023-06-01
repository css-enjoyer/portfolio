import EducCard from './EducCard';
import ProjCard from './ProjCard';
import ticImage from '.././images/tictactoe.jpeg';
import hanImage from '.././images/hanover.png';

import { useInView } from 'react-intersection-observer';


function ProjColumn() {
	const { ref: aboutRef, inView: aboutIsVisible } = useInView();
	const { ref: educRef, inView: educIsVisible } = useInView();
	const { ref: projRef, inView: projIsVisible } = useInView();


  	return (
	<div className="infoColumn">
		<div className="margin" id="about-margin"></div>
		<div ref={aboutRef} className={`${"section"} + ${aboutIsVisible ? "sectionVisible" : ""}`} id="about-section">
			<p>As a child I've always enjoyed tinkering on my computer, modding on video games, installing those suspicious custom cursors (and nearly destroying my os), or trying to run my own minecraft servers, these were some of the experiences that developed my problem solving skills.
			<br />
			<br />
			Today my passion lies in web development. Creating new experiences, implementing eye pleasing designs, and making them come to life with animations is where I find fulfilment.
			<br />
			<br />
			In my free time, you can find me playing pool, working out, or missing my hooks in dota 2. </p>
		</div>
		<div className="margin" id="educ-margin"></div>
		<div ref={educRef} className={`${"section educ-section"} + ${educIsVisible ? "sectionVisible" : ""}`} id="educ-section">
			<h1>University Education</h1>
			<EducCard date="2021 - Present" 
					title="University of Santo Tomas" 
					subtitle="BS Computer Science"
					titlelink="https://www.ust.edu.ph/"
					subtitlelink="https://www.ust.edu.ph/academics/programs/bachelor-of-science-in-computer-science/"/>
		</div>
		<div className="margin" id="proj-margin"></div>
		<div ref={projRef} className={`${"proj-section section"} + ${projIsVisible ? "sectionVisible" : ""}`} id="proj-section">
			<h1>Projects</h1>
			<ProjCard img={ticImage}
					title="Tic-Tac-Toe"
					subtitle="Created with vanilla JavaScript as part of the Odin Project curriculum that aims teach
							the fundamentals of HTML, JavaScript and CSS."
					titlelink="https://css-enjoyer.github.io/odin_tictactoe/"
					f1="HTML"
					f2="CSS"
					f3="JavaScript"/>
			<ProjCard img={hanImage}
					title="Hanover Store"
					subtitle="An online sneaker retail store created with Java Servlets and JSP's with a Derby Database made for my final academic project as a sophomore."
					titlelink="https://github.com/css-enjoyer/HanoverStore"
					f1="Java"
					f2="Servlets"
					f3="JSP"
					f4="Derby"/>
		</div>
	</div>
  	);
}

export default ProjColumn;
