import igImage from "../images/instagram.svg";
import ghImage from "../images/github.svg";
import liImage from "../images/linkedin.svg";

function BioColumn() {
  	return (
	<div className="bioColumn">
		<h1>Hi, my name is <span>Isaac Reyes</span></h1>
		<h4>I study <span>Computer Science</span> at the <br />Univeristy of Santo Tomas, Philippines</h4>
		
		<div className="sec-list">
			<a href="">About Me</a>
			<a href="">Projects</a>
			<a href="">Education</a>
		</div>
		
		<div className="soc-list">
			<button><img src={ghImage}></img></button>
			<button><img src={igImage}></img></button>
			<button><img src={liImage}></img></button>
		</div>
	</div>
  	);
}

export default BioColumn;
