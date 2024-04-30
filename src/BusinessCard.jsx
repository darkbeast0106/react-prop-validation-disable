import "./BusinessCard.css";

function BusinessCard(props) {
  return (
    <div className="businessCard">
      <h2 className="name">{props.name}</h2>
      <p className="role">{props.role}</p>
      <p className="email">{props.email}</p>
      <p className="phone">{props.phone}</p>
    </div>
  );
}

export default BusinessCard;
