import {connect} from 'react-redux';

import {appSelectors} from 'ducks/app';
import {authSelectors} from 'ducks/auth';
import {localeSelectors} from 'ducks/locale';
import App from 'components/app/App';

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.selectIsAuthenticated(state),
  isInitialised: appSelectors.selectIsInitialised(state),
  locale: localeSelectors.selectLocaleState(state)
});

export default connect(mapStateToProps)(App);
