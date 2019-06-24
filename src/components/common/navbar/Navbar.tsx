import React from 'react';
import {FormattedMessage} from 'react-intl';

import routes from 'constants/routes';
import NavbarLink from './NavbarLink/NavbarLink';
import styles from './Navbar.scss';

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <NavbarLink to={routes.HOME} exact={true}>
        <FormattedMessage id='nav.homepage'/>
      </NavbarLink>
      <NavbarLink to={routes.ARTICLES}>
        <FormattedMessage id='nav.articles'/>
      </NavbarLink>
    </nav>
  );
}

export default Navbar;
