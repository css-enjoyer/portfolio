
function EducCard({date, title, subtitle, titlelink, subtitlelink, img}) {
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
            <p></p>
        </div>
    </div>
    );
}

export default EducCard;
