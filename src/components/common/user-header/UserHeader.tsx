import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import styles from './UserHeader.scss';

function UserHeader(props) {
  const {userName, onLogout} = props;

  return (
    <div className={styles.UserHeader}>
      <div className={styles.name} title={userName}>
        {userName}
      </div>
      <div className={styles.buttonWrap}>
        <button className={styles.button} onClick={onLogout}>
          <FormattedMessage id='auth.signOut'/>
        </button>
      </div>
    </div>
  );
}

UserHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};

export default UserHeader;
