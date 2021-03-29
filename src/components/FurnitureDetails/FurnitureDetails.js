import './FurnitureDetails.css';
import { useEffect, useState } from 'react';
import * as furnitureServices from '../../services/furnitureServices';

const FurnitureDetails = ({
  match
}) => {
  let [furniture, setFurniture] = useState({});

  useEffect(() => {
    furnitureServices.getOne(match.params.furnitureId)
      .then(res => setFurniture(res));
  }, [match]);

  return (
    <section className="otherFurniture">
      <h3>Name: {furniture.name}</h3>
      <p>Category: {furniture.category}</p>
      <p className="img"><img src={furniture.imageURL} /></p>
      <p>Furniture counter: {furniture.likes} <a href="#"><button className="button">Like</button></a></p>
      <p className="description">{furniture.description}</p>
      <p className="created">{new Date(furniture.created).toLocaleDateString()}</p>

    </section>
  );
};

export default FurnitureDetails;
