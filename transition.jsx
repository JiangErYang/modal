import React from 'react';
import classnames from 'classnames';

class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      classModal: null,
      classMak: null
    };
  }

  // componentWillMount() {
  //   const { visible } = this.props;
  //   console.log(visible)
  //     this.setState({ visible })

  // }
  componentWillReceiveProps(props) {
    const { visible, animationType } = props;
    console.log(animationType)
    this.setState({ animationType });
    if (visible) {
      this.setState({ visible });
      if (animationType) {
        setTimeout(() => {
          this.setState({
            classModal: animationType === 'fadeInFadeOut' ? 'fadeInFadeOut-modal-enter' : 'bottomInTopOut-modal-enter',
            classMak: 'fadeInFadeOut-mask-enter'
          });
        }, 50);
      } else {
        this.setState({
          classModal: 'normal-modal-enter',
          classMak: 'normal-mask-enter'
        });
      }
    } else {
      if (animationType) {
        this.setState({ visible: true });
        setTimeout(() => {
          this.setState({
            classModal: 'fadeInFadeOut-modal-leave',
            classMak: 'fadeInFadeOut-mask-leave'
          });
        }, 50);
        setTimeout(() => {
          this.setState({ visible: false });
        }, 600);
      } else {
        this.setState({ visible: false });
      }
    }
  }

  cloneChildren() {
    const { classModal, classMak } = this.state;
    return React.Children.map(this.props.children, child => {
      // if (fadeInFadeOut){
      return React.cloneElement(child, {
        className: `${child.props.className} ${
          child.props.className === 'mask' ? classMak : classModal
        }`
      });
      // }else{
      //   return  React.cloneElement(child,{className: `${ child.props.className}`})
      // }
    });
  }

  render() {
    const { visible } = this.state;
    return visible && this.cloneChildren();
  }
}

export default Transition;
