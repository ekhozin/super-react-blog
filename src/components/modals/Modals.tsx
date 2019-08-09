import React from 'react';
import PropTypes from 'prop-types';

import FixedPreloader from 'components/common/preloader/FixedPreloader';
import styles from './Modals.scss';
import {modalPaths} from './modals-map';

class Modals extends React.Component {
  renderModal = (props) => {
    const pathToModal = modalPaths[props.id];

    if (!pathToModal) {
      return null;
    }
    // TODO: catch errors when import is failed
    const ModalComponent = React.lazy(() => import(`${pathToModal}`));

    return (
      <React.Suspense key={props.id} fallback={<FixedPreloader/>}>
        <ModalComponent {...this.props} {...props}/>
      </React.Suspense>
    );
  };

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
