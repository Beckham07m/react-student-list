import "./StudentTag.css"

function StudentTag(props) {
    const year = new Date().getFullYear() - props.age;
    const age = props.age

    let retired = age > 60;
    let ClassYear;

    if(age % 4 === 0){
        ClassYear = "Blue";
    } else if (age % 4 === 1){
        ClassYear = "Red";
    } else if (age % 4 === 2){
        ClassYear = "Grenn"
    } else {
        ClassYear = "LightBlue"
    }

    return (
        <div className="AgeGroup"> 
        <div className={"Tag " + ClassYear}>{year}</div>
        <div className={retired ? "Tag Retired":"Tag Working"}>{retired ? "Retried":"Working"}</div>
    </div>
    );
}

export default StudentTag;