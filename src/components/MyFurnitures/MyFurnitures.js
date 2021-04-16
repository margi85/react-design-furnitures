import { Component } from 'react';
import MyFurnitureCard from '../../components/MyFurnitures/MyFurnitureCard/MyFurnitureCard';
import * as furnitureServices from '../../services/furnitureServices';

class MyFurnitures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myFurnitures: [],
    }
  }

  
  componentDidMount() {
    const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
    const userId = user.ownerId;

    furnitureServices.getMyFurnitures(userId)
      .then(res => this.setState({ myFurnitures: res }))
      .catch((error) => console.log('Error:', error));
  }

  render() {
    console.log(this.state.myFurnitures);

    return (
      <ul className="furnitures-list">
        {this.state.myFurnitures.map(x =>
          <MyFurnitureCard
            key={x.objectId}
            name={x.name}
            description={x.description}
            imageURL={x.imageURL}
            category={x.category}
            likes={x.likes}
            created={x.created}
            objectId={x.objectId}>
          </MyFurnitureCard>)}
      </ul>
    );
  }
}

export default MyFurnitures;
