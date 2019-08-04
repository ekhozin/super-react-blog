import React from 'react';

import styles from './Modal.scss';

interface IProps {
  title?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  zIndex: number;
  onClose: () => void;
}

class Modal extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
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

export default Modal;
