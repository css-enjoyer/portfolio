import Flair from "./Flair";

function ProjCard({title, subtitle, titlelink, subtitlelink, img}) {
    return (
    <div className="projCard">
        <div id="timeline-col">
            <img src={img}></img>
        </div>
        <div id="main-col">
            <a href={titlelink} target="_blank">{title}</a><br/>
            <p>{subtitle}</p>
            <div className="flairs">
                <Flair text="HTML"/>
                <Flair text="JavaScript"/>
                <Flair text="CSS"/>
            </div>
        </div>
    </div>
    );
}

export default ProjCard;
