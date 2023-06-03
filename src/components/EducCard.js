
function EducCard({date, title, subtitle, titlelink, subtitlelink, img, ... courseworks}) {
    const courseWorks = Object.entries(courseworks).map(([key, value]) => (
        <li key={key}> {value}</li>
    ));
    return (
    <div className="educCard">
        <div id="timeline-col">
            <p>{date}</p>
            <img src={img}></img>
        </div>
        <div id="main-col">
            <a href={titlelink} target="_blank">{title}</a><br/>
            <a href={subtitlelink}>{subtitle}</a>
            <h4>Relevant Courseworks:</h4>
            <ul>
                {courseWorks}
            </ul>
        </div>
    </div>
    );
}

export default EducCard;
