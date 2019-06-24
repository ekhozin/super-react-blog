import React from 'react';
import PropTypes from 'prop-types';

import ModalContainer from 'containers/common/ModalContainer';

class AnotherModal extends React.PureComponent {
  handlePrevModal = () => {
    return this.props.closeModal(this.props.id);
  };

  render() {
    const {id, config, closeAllModals} = this.props;

    return (
      <ModalContainer
        id={id}
        title='Another modal title'
        body={
          <div>
            Another modal
            <button onClick={this.handlePrevModal}>
              Previous modal
            </button>
            <button onClick={closeAllModals}>
              Close all modals
            </button>
          </div>
        }
        footer='Another modal footer'
      />
    );
  }
}

AnotherModal.propTypes = {
  id: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired
};

export default AnotherModal;
