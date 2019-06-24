import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'components/common/modal/Modal';
import {modalsActions, modalsSelectors} from 'ducks/modals';

class ModalContainer extends React.PureComponent {
  handleClose = () => {
    const {closeModal, onClose, id} = this.props;
    closeModal(id);
    onClose(this.props);
  };

  render() {
    return <Modal {...this.props} onClose={this.handleClose}/>;
  }
}

ModalContainer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  zIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func,
  closeModal: PropTypes.func.isRequired
};

ModalContainer.defaultProps = {
  onClose: () => {}
};

const mapStateToProps = (state, ownProps) => {
  return {
    zIndex: modalsSelectors.selectModalIndexById(state, ownProps.id)
  };
};

const mapDispatchToProps = {
  closeModal: modalsActions.closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
