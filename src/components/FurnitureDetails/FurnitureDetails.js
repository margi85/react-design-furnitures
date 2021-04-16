import './FurnitureDetails.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as furnitureServices from '../../services/furnitureServices';

const FurnitureDetails = ({
  match
}) => {
  let [furniture, setFurniture] = useState({});
  const loggedUser = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

  function deleteHandler () {
    furnitureServices.deleteObject(furniture.objectId)
    .then(() => {
      localStorage.removeItem('objectId');
      window.location.replace('/')
    })
  };

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
          <p className="designer-name-details">Designer name: <span>{furniture.name}</span></p>
          <p className="created-date">Created date: {new Date(furniture.created).toLocaleDateString()}</p>
          <p className="category-p">Category: <span>{furniture.category}</span></p>
          <p className="furn-likes-count">Project raiting: <span>{furniture.likes}</span></p>
          <p><button className="button-like" onClick={like}>Like</button></p>
          <p className="description-details">Description: <span>{furniture.description}</span></p>
          

          {loggedUser && loggedUser.objectId === furniture.ownerId &&
            <div className="furn-info-box">
              <Link to={`/furnitures/details/${furniture.objectId}/edit`}><button className="button-edit-det">Edit</button></Link>
              <Link to="#"><button className="button-delete-det" onClick={deleteHandler}>Delete</button></Link>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default FurnitureDetails;
