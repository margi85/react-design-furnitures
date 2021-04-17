import './FurnitureCard.css';
import { Link } from 'react-router-dom';

const FurnitureCard = ({
  name, description, likes, imageURL, created, category, objectId, like
}) => {

  return (
    <li className="furniture-card">
      
      <p className="img"><img src={imageURL} alt="some pic"/></p>
      <h3>Designer-name: <span>{name}</span></h3>
      <p>Category: {category}</p>
      <div className="furn-info">
        <p><button className="button-like" onClick={like}>Like</button><span> {likes}</span></p>
      </div>
      <p className="created-at">Created day: {new Date(created).toLocaleDateString()}</p>
      <Link to={`/furnitures/details/${objectId}`}><button className="btn-details">Details</button></Link>
      
    </li>
  )
}

export default FurnitureCard;
