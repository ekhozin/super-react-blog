import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

import styles from './NavbarLink.scss';


function NavbarLink(props) {
  const {children, className, ...restProps} = props;
  const cssClass = classNames(styles.NavbarLink, className);

  return (
    <NavLink
      className={cssClass}
      activeClassName={styles.active}
      {...restProps}
    >
      {children}
    </NavLink>
  );
}

NavbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  exact: PropTypes.bool
};

NavbarLink.defaultProps = {
  exact: false
};

export default NavbarLink;
