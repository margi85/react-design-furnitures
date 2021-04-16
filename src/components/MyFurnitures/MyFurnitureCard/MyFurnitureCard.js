import './MyFurnitureCard.css';
import { Link } from 'react-router-dom';

const MyFurnitureCard = ({
  name, description, likes, imageURL, created, category, objectId
}) => {
  return (
    <li className="furniture-card">
      
      <p className="img"><img src={imageURL} alt="some pic"/></p>
      <h3>Designer-name: <span>{name}</span></h3>
      <p>Category: {category}</p>
      <div className="furn-info">
        {/* <Link to="#"><button className="btn">Like</button></Link> */}
        <div>Likes: <span>{likes}</span></div>
       
      </div>
      <p className="created-at">Created day: {new Date(created).toLocaleDateString()}</p>
      <Link to={`/furnitures/details/${objectId}`}><button className="btn-details">Details</button></Link>
      
    </li>
  )
}

export default MyFurnitureCard;
