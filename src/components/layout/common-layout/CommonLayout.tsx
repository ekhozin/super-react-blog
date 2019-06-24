import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import routes from 'constants/routes';
import Header from 'components/common/header/Header';
import styles from './CommonLayout.scss';

function CommonLayout(props) {
  const {
    component: Component,
    isAuthenticated,
    ...restProps
  } = props;

  if (!isAuthenticated) {
    return <Redirect to={routes.LOGIN}/>;
  }

  return (
    <Route
      render={(props) => (
        <div className={styles.CommonLayout}>
          <Header/>
          <div className={styles.content}>
            <Component {...props} />
          </div>
        </div>
      )}
      {...restProps}
    />
  );
}

CommonLayout.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

CommonLayout.defaultProps = {
  exact: false
};

export default CommonLayout;
