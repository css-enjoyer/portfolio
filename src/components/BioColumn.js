import igImage from "../images/instagram.svg";
import ghImage from "../images/github.svg";
import liImage from "../images/linkedin.svg";
import logo from "../images/favicons/IRLOGO-WHITE.png";

function BioColumn() {
  	return (
	<div className="bioColumn">
		<h1>Hey, my name is <span>Isaac Reyes</span></h1>
		<h4>I study <span>Computer Science</span> at the <br />Univeristy of Santo Tomas, Philippines</h4>
		
		<img className="logo" src={logo} alt="logo"></img>

		<div className="sec-list">
			<a href="#about-margin">About Me</a>
			<a href="#tech-margin">Technologies</a>
			<a href="#proj-margin">Projects</a>
			<a href="#educ-margin">Education</a>
		</div>
		
		<div className="soc-list">
			<a href="https://www.linkedin.com/in/isaac-reyes-893572274/" target="_blank"><img src={ghImage}></img></a>
			<a href="https://www.instagram.com/isaac_djss/" target="_blank"><img src={igImage}></img></a>
			<a href="https://github.com/css-enjoyer" target="_blank"><img src={liImage}></img></a>
		</div>
	</div>
  	); 
}

export default BioColumn;
