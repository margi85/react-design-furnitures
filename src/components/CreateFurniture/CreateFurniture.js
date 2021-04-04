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
    <section class="create">
      <form onSubmit={onCreateFurnitureSubmitHandler}>
        <fieldset>
          <legend>Add new furniture</legend>
          <p className="field">
            <label htmlFor="name">Furniture designer</label>
            <span className="input">
              <input type="text" name="name" id="name" placeholder="Name" />
              <span class="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea rows="8" cols="60" type="text" name="description"
                id="description" placeholder="Description"></textarea>
              <span className="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input type="text" name="imageURL" id="image" placeholder="Image" />
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
          <input className="button submit" type="submit" value="Add Furniture" />
        </fieldset>
      </form>
    </section>
  );
};

export default CreateFurniture;
