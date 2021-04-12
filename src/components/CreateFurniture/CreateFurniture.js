import './CreateFurniture.css';
import * as furnitureServices from '../../services/furnitureServices';


const CreateFurniture = ({
  history
}) => {
  const onCreateFurnitureSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);

    const { name, description, imageURL, category } = e.target;

    furnitureServices.create(name.value, description.value, imageURL.value, category.value)
      .then(() => {
        history.push('/')
      });
  };

  return (

    <form className="create" onSubmit={onCreateFurnitureSubmitHandler}>
      {/* <fieldset> */}
     <img className="img-holder" src="/furn-pic.jpg" alt="living room" />

      <div className="cont-add-info">
        <legend>Add new furniture</legend>
        <p className="field">
          <label htmlFor="name">Furniture designer</label>
          <input type="text" name="name" id="name" placeholder="Name" />
            {/* <span className="actions"></span> */}
        </p>

        <p className="field">
          <label htmlFor="description">Description</label>
          <textarea rows="8" cols="60" type="text" name="description"
              id="description" placeholder="Description"></textarea>
            {/* <span className="actions"></span> */}
        </p>

        <p className="field">
          <label htmlFor="image">Image</label>
          <input type="text" name="imageURL" id="image" placeholder="Image" />
        </p>

        <p className="field">
          <label htmlFor="category">Category</label><br></br>
            <select htmlFor="category-sel" type="text" name="category">
              <option htmlFor="category-select" value="All">All</option>
              <option htmlFor="category-select" value="Appartments">Appartments</option>
              <option htmlFor="category-select" value="Houses">Houses</option>
              <option htmlFor="category-select" value="Hotels">Hotels</option>
              <option htmlFor="category-select" value="Offices">Offices</option>
            </select>
        </p>
        <input className="button-submit" type="submit" value="Add Furniture" />
      </div>
      {/* </fieldset> */}
    </form>

  );
};

export default CreateFurniture;
