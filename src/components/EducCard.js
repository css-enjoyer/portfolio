import linkIcon from "../images/arrow-up-right-from-square-solid.svg";

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
            <a href={titlelink} target="_blank">{title}</a><img class="linkIcon" src={linkIcon}></img><br/>
            <a href={subtitlelink}>{subtitle}</a><img class="linkIcon" src={linkIcon}></img>
            <div className="course-works-row">
                <h4>Relevant Courseworks:</h4>
                <ul>
                    {courseWorks}
                </ul>
            </div>
        </div>
    </div>
    );
}

export default EducCard;
