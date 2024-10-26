import EducCard from './EducCard';
import ProjCard from './ProjCard';
import TechCard from './TechCard';

// import ticImage from '.././images/tictactoe.jpeg';
import dotaiImage from '.././images/dotai.png';
import drrsImage from '.././images/drrs.png';
// import dotaiImage2 from '.././images/dotai2.png';
import enrollSysImage from '.././images/enrollsys.png';
import hanImage from '.././images/hanover.png';

import javaImg from '.././images/technologies/java.png';
import htmlImg from '.././images/technologies/html-5.png';
import cssImg from '.././images/technologies/css-3.png';
import jsImg from '.././images/technologies/js.png';
import sassImg from '.././images/technologies/sass.png';
import sqlImg from '.././images/technologies/sql.png';
import phpImg from '.././images/technologies/php.png';
import nodeImg from '.././images/technologies/node.png';
import reactImg from '.././images/technologies/react.png';
import expressImg from '.././images/technologies/express.png';
import mongoImg from '.././images/technologies/mongodb.png';
import muiImg from '.././images/technologies/mui.png';
import tsImg from '.././images/technologies/ts.png';
import fbImg from '.././images/technologies/fb.png';

import { useInView } from 'react-intersection-observer';

function ProjColumn() {
	const { ref: aboutRef, inView: aboutIsVisible } = useInView();
	const { ref: techRef, inView: techIsVisible } = useInView();
	const { ref: projRef, inView: projIsVisible } = useInView();
	const { ref: educRef, inView: educIsVisible } = useInView();
	
	const { ref: techHeadRef, inView: techHeadIsVisible } = useInView();
	const { ref: projHeadRef, inView: projHeadIsVisible } = useInView();
	const { ref: eduHeadRef, inView: eduHeadIsVisible } = useInView();
	
  	return (
	<div className="infoColumn">
		<div className="margin" id="about-margin"></div>
		<div ref={aboutRef} className={`${"section"} + ${aboutIsVisible ? "sectionVisible" : ""}`} id="about-section">
			<p>As a child I've always enjoyed tinkering on my computer, modding on video games, installing those suspicious custom cursors (and nearly destroying my os), trying to run my own minecraft servers, these were some of the experiences that developed my problem solving skills.
			<br />
			<br />
			Today my passion lies in web development. Creating new experiences, implementing eye pleasing designs, and making them come to life with animations is where I find fulfillment.
			<br />
			<br />
			In my free time, you can find me playing pool, working out, or missing my hooks in dota 2. </p>
		</div>
		
		{/* =================== TECHNOLOGIES SECTION =================== */}
		<div className="margin" id="tech-margin"></div>
		<div ref={techRef} className={`${"tech-section section"} + ${techIsVisible ? "sectionVisible" : ""}`} id="tech-section">
			<h1 ref={techHeadRef} className={`${techHeadIsVisible ? "headerVisible" : ""}`}>Technologies</h1>
			<TechCard image0={javaImg}
						imag1e={htmlImg}
						image2={cssImg}
						image3={jsImg}
						image4={sassImg}
						image5={sqlImg}
						image6={phpImg}
						image10={mongoImg}
						image8={expressImg}
						image9={reactImg} 
						image7={nodeImg} 
						image11={muiImg} 
						image12={tsImg} 
						image13={fbImg} 
						
						
						/>
		</div>
		{/* =================== PROJECT SECTION =================== */}

		<div className="margin" id="proj-margin"></div>
		<div ref={projRef} className={`${"proj-section section"} + ${projIsVisible ? "sectionVisible" : ""}`} id="proj-section">
			<h1 ref={projHeadRef} className={`${projHeadIsVisible ? "headerVisible" : ""}`}>Projects</h1>
			<ProjCard img={drrsImage}
					title="University of Santo Tomas Miguel de Benavides Library - Discussion Room Reservation System"
					subtitle="Software Engineering capstone for Junior Year. Real-time updates of rooms for all satellite library branches within the University of Santo Tomas Manila campus. Features automated email notifications, automated reservation cancellation, student authentication, data analytics. "
					titlelink="https://github.com/css-enjoyer/drr-system"
					f1="React"
					f2="Typescript"
					f3="Firebase"
					f4="MUI"
					f12="SASS"
					f5="Google OAuth"
					f9="Toastify"/>
			<ProjCard img={dotaiImage}
					title="DotAI - Dota 2 Drafter"
					subtitle="An online tool that filters heroes based on selected traits to simplify drafting phases, with 2000 (seriously) lines of hand written hero categorization, created as a passion project for both Dota 2 and Web Development"
					titlelink="https://dotaidraft.netlify.app/"
					f1="MongoDB"
					f2="Express"
					f3="React"
					f4="Node"
					f12="SASS"
					f5="OpenDotaAPI"
					f6="REST"
					f7="Render"
					f8="Netlify"
					f10="Framer Motion"
					f11="Axios"/>
			<ProjCard img={hanImage}
					title="Hanover Store"
					subtitle="An online sneaker retail store created with Java Servlets and JSP's with a Derby Database made for my final academic project as a sophomore. Could be better, but proud of the challenges I overcame and concepts I learned for this project."
					titlelink="https://github.com/css-enjoyer/HanoverStore"
					f1="Java"
					f2="Servlets"
					f3="JSP"
					f4="MySQL"
					f5="Derby"
					f6="CSS"/>
			<ProjCard img={enrollSysImage}
					title="College Enrollment System"
					subtitle="A student enrollment management system created with JavaScript and PHP which focuses on database add, update, and deletion. Submitted as my final academic project as a freshman. Pretty scuffed, but learned alot anyway."
					titlelink="https://css-enjoyer.github.io/odin_tictactoe/"
					f1="HTML"
					f2="JavaScript"
					f3="PHP"
					f4="CSS"/>
		</div>

		{/* =================== EDUCATION SECTION =================== */}

		<div className="margin" id="educ-margin"></div>
		<div ref={educRef} className={`${"section educ-section"} + ${educIsVisible ? "sectionVisible" : ""}`} id="educ-section">
			<h1 ref={eduHeadRef} className={`${eduHeadIsVisible ? "headerVisible" : ""}`}>Education</h1>
			<EducCard date="2021 - Present" 
					title="University of Santo Tomas" 
					subtitle="BS Computer Science"
					titlelink="https://www.ust.edu.ph/"
					subtitlelink="https://www.ust.edu.ph/academics/programs/bachelor-of-science-in-computer-science/"
					courseWork1="Data Structures and Algorithms"
					courseWork2="Object Oriented Programming"
					courseWork3="Human Computer Interaction"
					courseWork4="Applications Development Front-End and Back-End"
					courseWork5="Database Management Systems"
					courseWork6="Theory of Automata"
					courseWork7="Design and Analysis of Algorithms"
					courseWork8="Artificial Intelligence"
					courseWork9="Computer Architecture and Organization" 
					courseWork10="Full-stack Web Development" 
					courseWork11="Mobile Development" 
					courseWork12="Software Engineering" 
					courseWork13="Data Communications & Networking" 
					courseWork14="Natural Language Processing" 
					/>
		</div>
		<div className="margin"></div>
	</div>
  	);
}

export default ProjColumn;
