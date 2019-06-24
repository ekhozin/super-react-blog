import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'components/common/navbar/Navbar';
import UserHeaderContainer from 'containers/common/UserHeaderContainer';
import LanguageSwitcherContainer from 'containers/common/LanguageSwitcherContainer';
import styles from './Header.scss';

function Header(props) {
  return (
    <header className={styles.Header}>
      <div className={styles.navbar}>
        <Navbar/>
      </div>
      <div className={styles.languageSwitcher}>
        <LanguageSwitcherContainer/>
      </div>
      <div className={styles.user}>
        <UserHeaderContainer/>
      </div>
    </header>
  );
}

export default Header;
