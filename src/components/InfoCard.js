
function InfoCard({date}) {
    return (
    <div className="infoCard">
        <div id="timeline-col">
            <p>{date}</p>
        </div>
        <div id="main-col">
            <a href="https://www.ust.edu.ph/" target="_blank">University of Santo Tomas</a><br/>
            <a href="https://www.ust.edu.ph/academics/programs/bachelor-of-science-in-computer-science/">BS Computer Science</a>
        </div>
    </div>
    );
}

export default InfoCard;
