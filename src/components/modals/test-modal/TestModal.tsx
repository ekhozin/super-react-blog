import React from 'react';
import PropTypes from 'prop-types';

import MODALS from 'constants/modals';
import ModalContainer from 'containers/common/ModalContainer';

class TestModal extends React.PureComponent {
  handleShowModal = () => {
    return this.props.showModal(MODALS.ANOTHER_MODAL);
  };

  render() {
    const {id} = this.props;

    return (
      <ModalContainer
        id={id}
        title='Test modal title'
        body={
          <div>
            <button onClick={this.handleShowModal}>
              show another modal
            </button>
          </div>
        }
        footer='Test modal footer'
      />
    );
  }
}

TestModal.propTypes = {
  id: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired
};

export default TestModal;
