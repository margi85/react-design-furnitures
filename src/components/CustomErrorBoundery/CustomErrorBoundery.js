import React from 'react';

class CustomErrorBoundery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    return this.props.children;
  }
}

export default CustomErrorBoundery
