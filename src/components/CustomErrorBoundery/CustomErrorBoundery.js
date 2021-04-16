import React from 'react';

class CustomErrorBoundery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('error from componentDidCatch: ', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Some Error Here</h1>
    }
    return this.props.children;
  }
}

export default CustomErrorBoundery
