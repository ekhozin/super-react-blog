import React from 'react';
import PropTypes from 'prop-types';

import MODALS from 'constants/modals';
import TestModal from './test-modal/TestModal';
import AnotherModal from './another-modal/AnotherModal';
import styles from './Modals.scss';

class Modals extends React.PureComponent {
  modalsMap = {
    [MODALS.TEST_MODAL]: (props) => <TestModal key={props.id} {...props}/>,
    [MODALS.ANOTHER_MODAL]: (props) => <AnotherModal key={props.id} {...props}/>
  };

  renderModal = (props) => this.modalsMap[props.id]({...this.props, ...props});

  renderModals = () => this.props.modals.map(this.renderModal);

  renderBackdrop = () => {
    return !!Object.keys(this.props.modals).length && <div className={styles.backdrop}/>;
  };

  render() {
    return (
      <div>
        {this.renderBackdrop()}
        {this.renderModals()}
      </div>
    );
  }
}

Modals.propTypes = {
  modals: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired
};

export default Modals;
