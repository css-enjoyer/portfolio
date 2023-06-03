
function TechCard({...techs}) {
    const techProps = Object.entries(techs).map(([key, value]) => (
        <img src={value} className="techBox" />
    ));
    return (
    <div className="techCard">
        {techProps}
    </div>
    );
}

export default TechCard;
