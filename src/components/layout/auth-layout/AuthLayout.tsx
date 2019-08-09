import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import routes from 'constants/routes';
import LanguageSwitcherContainer from 'containers/common/LanguageSwitcherContainer';
import styles from './AuthLayout.scss';

interface IProps {
  isAuthenticated: boolean;
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}

function AuthLayout(props: IProps): React.ReactElement<IProps> {
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
      render={(props): React.ReactNode => (
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

AuthLayout.defaultProps = {
  exact: false
};

export default AuthLayout;
