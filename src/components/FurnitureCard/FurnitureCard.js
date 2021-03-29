import './FurnitureCard.css'

const FurnitureCard = ({
  name, description, likes, imageURL, created, category
}) => {
  return (
    <li className="furniture-card">
      <h3>Designer-name: {name}</h3>
      <p>Category: {category}</p>
      <p className="img"><img src={imageURL} /></p>
      <div className="furn-info">
        <a href="#"><button className="btn">Like</button></a>
        <span>{likes}</span>
        <a href="#"><button className="btn">Details</button></a>
      
      </div>
      <p className="created-at">{created}</p>
    </li>
  )
}

export default FurnitureCard;
