import React, { Component } from 'react';
import classnames from 'classnames';
import NewPortal from './portal';
import Transition from './transition';
import './modal.css';
class Uimodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  // componentDidMount() {
  //   this.setState({ visible: this.props.visible })
  // }

  componentWillReceiveProps(props) {
    this.setState({ visible: props.visible });
    if (props.visible) {
      document.getElementsByClassName('');
    }
  }

  closeModal = () => {
    const { onClose } = this.props;
    onClose && onClose();
    this.setState({ visible: false });
  };

  // confirm = () => {
  //   const { confirm } = this.props
  //   confirm && confirm()
  //   this.setState({ visible: false })
  // }

  maskClick = (maskClosable = true) => {
    if (!maskClosable) {
      return null;
    }
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    const {
      closeText,
      children,
      bodyStyle,
      maskStyle,
      closeTextStyle,
      maskClosable,
      closeTextButton = true,
      animationType,
    } = this.props;
    return ( 
      <NewPortal visible={visible}>
        <Transition visible={visible} animationType={animationType}>
          <div className={classnames({modal:true,modalBottomInTopOut:animationType === 'bottomInTopOut'})} style={bodyStyle}>
            <div className="modal-content">{children}</div>
            {closeTextButton && (
              <span
                onClick={this.closeModal}
                className="modal-operator-close"
                style={closeTextStyle}
              >
                {closeText || '我知道了'}
              </span>
            )}
          </div>
          <div
            className="mask"
            onClick={() => this.maskClick(maskClosable)}
            style={maskStyle}
          ></div>
        </Transition>
      </NewPortal>
    );
  }
}
export default Uimodal;
