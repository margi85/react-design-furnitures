import './FurnitureDetails.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as furnitureServices from '../../services/furnitureServices';

const FurnitureDetails = ({
  match
}) => {
  let [furniture, setFurniture] = useState({});
  const loggedUser = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    
    furnitureServices.getOne(match.params.furnitureId)
      .then(res => setFurniture(res));
  }, [match]);

  const like = () => {
    let incrementedLikes = furniture.likes + 1;
    console.log(match.params);
    furnitureServices.furniture(match.params.furnitureId, incrementedLikes)
      .then((updatedFurniture) => {
        setFurniture(state => ({ ...state, likes: Number(updatedFurniture.likes) }))
      });
  }

  return (
    <section className="detailsOtherFurniture">
      <div className="container img">
        <p className="img"><img src={furniture.imageURL} alt="" /></p>
      </div>

      <div className="container">
        <div className="info">
          <p>Designer name: <span>{furniture.name}</span></p>
          <p>Category: <span>{furniture.category}</span></p>
          <p>Project raiting: {furniture.likes}
            <button className="button" onClick={like}>
              Like
          </button>
          </p>

          <p className="description">Description: {furniture.description}</p>
          <p className="created">Created date: {new Date(furniture.created).toLocaleDateString()}</p>

          {loggedUser && loggedUser.objectId === furniture.ownerId &&
            <div className="furn-info">
              <Link to={`/furnitures/details/${furniture.objectId}/edit`}><button className="button">Edit</button></Link>
              <Link to="#"><button className="button">Delete</button></Link>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default FurnitureDetails;
