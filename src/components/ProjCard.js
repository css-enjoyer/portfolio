import Flair from "./Flair";
import linkIcon from "../images/arrow-up-right-from-square-solid.svg";

function ProjCard({title, subtitle, titlelink, img, f1, f2, f3, f4}) {
    return (
    <div className="projCard">
        <div id="timeline-col">
            <img className="thumbnail" src={img}></img>
        </div>
        <div id="main-col">
            <a href={titlelink} target="_blank">{title}</a><img class="linkIcon" src={linkIcon}></img><br/>
            <p>{subtitle}</p>
            <div className="flairs">
                <Flair text={f1}/>
                <Flair text={f2}/>
                <Flair text={f3}/>
                <Flair text={f4}/>
            </div>
        </div>
    </div>
    );
}

export default ProjCard;
