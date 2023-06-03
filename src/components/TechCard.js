
function TechCard({...techs}) {
    const techProps = Object.entries(techs).map(([key, value]) => (
        <div className="techBox">{value}</div>
    ));
    return (
    <div className="techCard">
        {techProps}
    </div>
    );
}

export default TechCard;
