import EducCard from './EducCard';
import ProjCard from './ProjCard';
import ticImage from '.././images/tictactoe.jpeg';

function ProjColumn() {
  	return (
	<div className="infoColumn">
		<p>As a child, I've always enjoyed tinkering on my computer. Whether it was cheating infinite money on video games, installing those suspicious custom cursors (and nearly destroying my os), or trying to run my own minecraft servers were some of the experiences that developed my problem solving skills.
		<br />
		<br />
		Today my passion lies in web development. Creating new experiences, implementing eye pleasing designs, and making them come to life with animations is where I find fulfilment.
		<br />
		<br />
		In my free time, you can find me enjoying pool, working out, or missing my hooks in dota 2. </p>

		<div className="educ-section">
			<h1>University Education</h1>
			<EducCard date="1999 - Present" 
					title="University of Santo Tomas" 
					subtitle="BS Computer Science"
					titlelink="https://www.ust.edu.ph/"
					subtitlelink="https://www.ust.edu.ph/academics/programs/bachelor-of-science-in-computer-science/"/>
		</div>

		<div className="proj-section">
			<h1>Projects</h1>
			<ProjCard img={ticImage}
					title="Tic-Tac-Toe"
					subtitle="Created with vanilla JavaScript as part of the Odin Project curriculum that aims teach
							the fundamentals of HTML, JavaScript and CSS."
					titlelink="https://css-enjoyer.github.io/odin_tictactoe/"/>
		</div>
	</div>
  	);
}

export default ProjColumn;
