import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.scss';

class Modal extends React.PureComponent {
  render() {
    const {title, body, footer, zIndex, onClose} = this.props;

    return (
      <div className={styles.wrapper} style={{zIndex}}>
        <div className={styles.modal}>
          <div className={styles.modalInner}>
            <div className={styles.header}>
              {title}
              <button
                onClick={onClose}
                className={styles.closeButton}
              >
                x
              </button>
            </div>
            <div className={styles.body}>
              {body}
            </div>
            <div className={styles.footer}>
              {footer}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  zIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
