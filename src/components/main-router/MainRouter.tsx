import React from 'react';
import {Switch} from 'react-router-dom';

import routes from 'constants/routes';
import CommonLayout from 'components/layout/common-layout/CommonLayout';
import AuthLayout from 'components/layout/auth-layout/AuthLayout';

interface IProps {
  isAuthenticated: boolean;
}

// TODO: find solution how to define type properly lazy's function
type TLazyReturn = Promise<{default: React.ComponentType<any>}>;

const LoginContainer = React.lazy((): TLazyReturn => import('containers/pages/LoginContainer'));
const RegisterContainer = React.lazy((): TLazyReturn => import('containers/pages/RegisterContainer'));
const HomeContainer = React.lazy((): TLazyReturn => import('containers/pages/HomeContainer'));
const ArticlesContainer = React.lazy((): TLazyReturn => import('containers/pages/ArticlesContainer'));
const ArticleContainer = React.lazy((): TLazyReturn => import('containers/pages/ArticleContainer'));

function MainRouter(props: IProps): React.ReactElement<IProps> {
  const {isAuthenticated} = props;
  const fallback: JSX.Element = (<div>Loading...</div>);

  return (
    <React.Fragment>
      <React.Suspense fallback={fallback}>
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
          <CommonLayout
            path={routes.ARTICLE}
            component={ArticleContainer}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </React.Suspense>
    </React.Fragment>
  );
}

export default MainRouter;
