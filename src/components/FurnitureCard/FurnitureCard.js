import './FurnitureCard.css';
import { Link } from 'react-router-dom';

const FurnitureCard = ({
  name, description, likes, imageURL, created, category, objectId
}) => {
  return (
    <li className="furniture-card">
      <h3>Designer-name: {name}</h3>
      <p>Category: {category}</p>
      <p className="img"><img src={imageURL} /></p>
      <div className="furn-info">
        <Link to="#"><button className="btn">Like</button></Link>
        <span>{likes}</span>
        <Link to={`/furnitures/details/${objectId}`}><button className="btn">Details</button></Link>
      
      </div>
      <p className="created-at">{new Date(created).toLocaleDateString()}</p>
    </li>
  )
}

export default FurnitureCard;
