
function InfoCard({title, subtitle, titlelink, subtitlelink, img}) {
    return (
    <div className="infoCard">
        <div id="timeline-col">
            <img src={img}></img>
        </div>
        <div id="main-col">
            <a href={titlelink} target="_blank">{title}</a><br/>
            <p>{subtitle}</p>
            <div className="flairs">
                {/* <Flair /> */}
            </div>
        </div>
    </div>
    );
}

export default InfoCard;
