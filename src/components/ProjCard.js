import Flair from "./Flair";
import linkIcon from "../images/arrow-up-right-from-square-solid.svg";

function ProjCard({title, subtitle, titlelink, img, ... flairs}) {
    const flairProps = Object.entries(flairs).map(([key, value]) => (
        <Flair text={value} />
    ));
    return (
    <div className="projCard cards">
        <div id="timeline-col">
            <img className="thumbnail" src={img}></img>
        </div>
        <div id="main-col">
            <div><a href={titlelink} target="_blank">{title}</a><img class="linkIcon" src={linkIcon}></img></div><br/>
            <p>{subtitle}</p>
            <div className="flairs">
                {flairProps}
            </div>
        </div>
    </div>
    );
}

export default ProjCard;
