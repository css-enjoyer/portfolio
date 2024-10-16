import linkIcon from "../images/arrow-up-right-from-square-solid.svg";
import caretDown from "../images/caret-down.svg";

function EducCard({date, title, subtitle, titlelink, subtitlelink, img, ... courseworks}) {
    const courseWorks = Object.entries(courseworks).map(([key, value]) => (
        <li key={key}> {value}</li>
    ));
    return (
    <div className="educCard cards">
        <div id="timeline-col">
            <p>{date}</p>
            <img src={img}></img>
        </div>
        <div id="main-col">
            <a href={titlelink} target="_blank">{title}</a><img class="linkIcon icon" src={linkIcon}></img><br/>
            <a href={subtitlelink}>{subtitle}</a><img class="linkIcon icon" src={linkIcon}></img>
            <div className="course-works-row">
                <h4>Relevant Courseworks:<img class="caretIcon icon" src={caretDown}></img></h4>
                <ul>
                    {courseWorks}
                </ul>
            </div>
        </div>
    </div>
    );
}

export default EducCard;
