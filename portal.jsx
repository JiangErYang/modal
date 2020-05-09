import React from 'react';
import ReactDOM from 'react-dom';

class NewPortal extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  state = {
    container: null,
    bodyRoot: null
  };

  showPortal = () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const bodyRoot = document.getElementsByTagName('body')[0];
    this.setState({
      container,
      bodyRoot
    });
  };

  componentDidMount() {
    this.showPortal();
  }
  componentWillReceiveProps(props){
    document.getElementsByTagName('body')[0].style.overflow = props.visible ? 'hidden' : 'auto';
  }

  componentWillUnmount() {
    const { container } = this.state;
    document.body.removeChild(container);
  }

  render() {
    const { container } = this.state;
    if (container) {
      return ReactDOM.createPortal(this.props.children, container);
    } else {
      return null;
    }
  }
}

export default NewPortal;
