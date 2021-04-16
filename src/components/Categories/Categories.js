import './Categories.css'
import { Component } from 'react';
import FurnitureCard from '../FurnitureCard/FurnitureCard';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import * as furnitureServices from '../../services/furnitureServices';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      furnitures: [],
      currentCategory: 'All'
    }
  }

  componentDidMount() {
    furnitureServices.getAll()
      .then(res => this.setState({ furnitures: res }))
      .catch((error) => console.log('Error:', error));
  }

  componentDidUpdate(prevProps, prevState) {
    let category = this.props.match.params.category;
    if (prevProps.match.params.category === category) {
      return;
    }
    furnitureServices.getAll(category)
      .then(res => {
        this.setState({
          furnitures: res,
          currentCategory: category
        })
      })
  }

  render() {
    console.log(this.state.furnitures);
    return (
      <section className="categories">
       
        <CategoryNavigation />

        <ul className="furnitures-list">
          {this.state.furnitures.map(x =>
            <FurnitureCard
              key={x.objectId}
              name={x.name}
              description={x.description}
              imageURL={x.imageURL}
              category={x.category}
              likes={x.likes}
              created={x.created}
              objectId={x.objectId}>
            </FurnitureCard>)}
        </ul>
      </section>
    );


  }
}
export default Categories;
