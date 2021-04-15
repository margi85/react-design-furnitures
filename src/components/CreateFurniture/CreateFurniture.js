import './CreateFurniture.css';
import * as furnitureServices from '../../services/furnitureServices';
import { useState } from 'react';


const CreateFurniture = ({
  history
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [nameErr, setNameErr] = useState({});
  const [descriptionErr, setDescriptionErr] = useState({});
  const [imageErr, setImageErr] = useState({});
  

  const onCreateFurnitureSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
    const ownerId = user.ownerId;
    const { name, description, imageURL, category, } = e.target;

    const isValid = formValidation();

    if (isValid) {
      furnitureServices.create(name.value, description.value, imageURL.value, category.value, ownerId)
      .then(() => {
        history.push('/')
      })
      .catch((error) => console.log('Error:', error));
    }
  };

  const formValidation = () => { 
    const nameErr = {};
    const descriptionErr = {};
    const imageErr = {};
    
    let isValid = true;

    if (name.trim().length < 4) {
      nameErr.nameShort = 'Name should be longer than 4 symbols';
      isValid = false;
    }

    if (image.trim().length === 0) {
      imageErr.imageIsMissing = 'Image must be provided';
      isValid = false;
    }

    if (description.trim().length < 10) {
      descriptionErr.descriptionShort = 'Description must be at least 10 symbols';
      isValid = false;
    }

    setNameErr(nameErr);
     setDescriptionErr(descriptionErr);
     setImageErr(imageErr);
     
     return isValid;
  }

  return (

    <form className="create" onSubmit={onCreateFurnitureSubmitHandler}>
      {/* <fieldset> */}
      <img className="img-holder" src="/furn-pic.jpg" alt="living room" />

      <div className="cont-add-info">
        <legend>Add new furniture</legend>
        <div className="field">
          <label htmlFor="name">Furniture designer</label>
          <input type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <br />
          {Object.keys(nameErr).map((key) => {
            return <div key={nameErr[key]} style={{ color: "red" }}>{nameErr[key]}</div>
          })}
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea rows="8" cols="60" type="text" 
          name="description"
            id="description" 
            placeholder="Description"
            value={description}
            onChange={(e) => {setDescription(e.target.value)}} 
            ></textarea>
            <br/>
            {Object.keys(descriptionErr).map((key) => {
              return <div key={descriptionErr[key]} style={{color : "red"}}>{descriptionErr[key]}</div>
            })}
        </div>

        <div className="field">
          <label htmlFor="image">Image</label>
          <input type="text" 
          name="imageURL" 
          id="image" 
          placeholder="Image" 
          value={image}
          onChange={(e) => {setImage(e.target.value)}} 
          />
          <br/>
            {Object.keys(imageErr).map((key) => {
              return <div key={imageErr[key]} style={{color : "red"}}>{imageErr[key]}</div>
            })}
        </div>

        <div className="field">
          <label htmlFor="category">Category</label><br></br>
          <select htmlFor="category-sel" type="text" name="category">
            <option htmlFor="category-select" value="All">All</option>
            <option htmlFor="category-select" value="Appartments">Appartments</option>
            <option htmlFor="category-select" value="Houses">Houses</option>
            <option htmlFor="category-select" value="Hotels">Hotels</option>
            <option htmlFor="category-select" value="Offices">Offices</option>
          </select>
        </div>
        <input className="button-submit" type="submit" value="Add Furniture" />
      </div>
      {/* </fieldset> */}
    </form>

  );
};

export default CreateFurniture;
