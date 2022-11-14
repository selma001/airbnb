import star from "../images/star.png"



function Card (props) {

    let badgeText
    if (props.openSpots ===0) {
        badgeText= "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText= "ONLINE"
    }

   return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.coverImg} />
        <p className="rating">
        <img src={star} /> {props.stats.rating} <span> ({props.stats.reviewCount}) {props.location}</span>
        </p>
        <h5>{props.title}</h5>
        <h6>From ${props.price} <span>/ person</span></h6>
    </div>
   )
}

export default Card 