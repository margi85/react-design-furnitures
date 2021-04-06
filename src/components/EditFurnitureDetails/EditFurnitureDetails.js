import './EditFurnitureDetails.css';
import * as furnitureServices from '../../services/furnitureServices';
import { useEffect, useState } from 'react';
import InputError from '../Shared/InputError/InputError';

const EditFurnitureDetails = (
  {match, history}
) => {
  console.log(match);
  const [furniture, setFurniture] = useState({});
  const [errorMessageName, setErrorMessageName] = useState('');
  const [errorMessageDescription, setErrorMessageDescription] = useState('');

  useEffect(() => {
    furnitureServices.getOne(match.params.furnitureId)
      .then(res => setFurniture(res));
  }, [match]);

  const onEditChangeHandler = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.value);
    let furnitureId = match.params.furnitureId;
    const { name, description, imageURL, category } = e.target;

    furnitureServices.update(furnitureId, {name: name.value, description: description.value, imageURL: imageURL.value, category: category.value})
      .then(() => {
        history.push(`/furnitures/details/${furnitureId}`);
        return;
      })
  }

  const onNameInputChangeHandler = (e) => {
    // console.log(e.target.value);
    if (e.target.value.length <= 2) {
      setErrorMessageName('Name should be more than 2 symbols');
    } else {
      setErrorMessageName('');
    }
  }

  const onDescriptionInputChangeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value.length <= 10) {
      setErrorMessageDescription('Description should be more than 10 symbols');
    } else {
      setErrorMessageDescription('');
    }
  }

  return (
    <section className="edit-furniture">

      <p>Furniture likes: <span>{furniture.likes}</span></p>

      <form onSubmit={onEditChangeHandler}>

        <p className="field">
          <label htmlFor="name">Furniture designer</label>
          <span className="input">
            <input type="text" name="name" id="name" onBlur={onNameInputChangeHandler} defaultValue={furniture.name} />
            <InputError>{errorMessageName}</InputError>
            <span className="actions"></span>
          </span>
        </p>
        <p className="field">
          <label htmlFor="image">Image</label>
          <span className="input">
            <input type="text" name="imageURL" id="image"  defaultValue={furniture.imageURL} />
          </span>
        </p>

        <p className="field">
          <label htmlFor="category">Category</label>
          <span className="input">
            <select type="text" name="category">
              <option value="All">All</option>
              <option value="Appartments">Appartments</option>
              <option value="Houses">Houses</option>
              <option value="Hotels">Hotels</option>
              <option value="Offices">Offices</option>
            </select>
          </span>
        </p>
        <p className="field">
          <label htmlFor="description">Description</label>
          <span className="input">
            <textarea rows="8" cols="60" type="text" name="description"
              id="description" onBlur={onDescriptionInputChangeHandler} defaultValue={furniture.description}></textarea>
            <InputError>{errorMessageDescription}</InputError>
            <span className="actions"></span>
          </span>
        </p>
        {/* <textarea type="text" name="description" defaultValue={furniture.description}></textarea>
        <p className="img"><img src={furniture.imageURL} /></p> */}
        <button className="button">Save</button>

      </form>
    </section>
  );
};

export default EditFurnitureDetails;
