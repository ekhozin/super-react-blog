import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import routes from 'constants/routes';
import Header from 'components/common/header/Header';
import styles from './CommonLayout.scss';

interface IProps {
  isAuthenticated: boolean;
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}

function CommonLayout(props: IProps): React.ReactElement<IProps> {
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
      render={(props): React.ReactNode => (
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

export default CommonLayout;
