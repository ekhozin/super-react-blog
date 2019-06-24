import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch} from 'react-router-dom';

import routes from 'constants/routes';
import CommonLayout from 'components/layout/common-layout/CommonLayout';
import AuthLayout from 'components/layout/auth-layout/AuthLayout';
import LoginContainer from 'containers/pages/LoginContainer';
import RegisterContainer from 'containers/pages/RegisterContainer';
import HomeContainer from 'containers/pages/HomeContainer';
import ArticlesContainer from 'containers/pages/ArticlesContainer';

function MainRouter(props) {
  const {isAuthenticated} = props;

  return (
    <BrowserRouter>
      <Switch>
        <AuthLayout
          path={routes.LOGIN}
          component={LoginContainer}
          isAuthenticated={isAuthenticated}
        />
        <AuthLayout
          path={routes.REGISTER}
          component={RegisterContainer}
          isAuthenticated={isAuthenticated}
        />
        <CommonLayout
          exact={true}
          path={routes.HOME}
          component={HomeContainer}
          isAuthenticated={isAuthenticated}
        />
        <CommonLayout
          path={routes.ARTICLES}
          component={ArticlesContainer}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </BrowserRouter>
  );
}

MainRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default MainRouter;
