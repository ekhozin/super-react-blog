import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import routes from 'constants/routes';
import LanguageSwitcherContainer from 'containers/common/LanguageSwitcherContainer';
import styles from './AuthLayout.scss';

function AuthLayout(props) {
  const {
    component: Component,
    isAuthenticated,
    ...restProps
  } = props;

  if (isAuthenticated) {
    return <Redirect to={routes.HOME}/>;
  }

  return (
    <Route
      render={(props) => (
        <div className={styles.AuthLayout}>
          <LanguageSwitcherContainer className={styles.languageSwitcher}/>
          <div className={styles.content}>
            <Component {...props}/>
          </div>
        </div>
      )}
      {...restProps}
    />
  );
}

AuthLayout.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

AuthLayout.defaultProps = {
  exact: false
};

export default AuthLayout;
