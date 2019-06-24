import {hot} from 'react-hot-loader';
import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';

import ModalsContainer from 'containers/common/ModalsContainer';
import MainRouter from 'components/main-router/MainRouter';
import locales from 'locales/index';

function App(props) {
  const {store, isInitialised, isAuthenticated, locale} = props;

  if (!isInitialised) {
    return <div>Loading...</div>;
  }

  const messages = locales && locales[locale];

  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages}>
        <React.Fragment>
          <ModalsContainer/>
          <MainRouter isAuthenticated={isAuthenticated}/>
        </React.Fragment>
      </IntlProvider>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  isInitialised: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired
};

export default hot(module)(App);
