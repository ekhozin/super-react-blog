import {connect} from 'react-redux';

import {appActions} from 'ducks/app';
import {authSelectors} from 'ducks/auth';
import {localeSelectors} from 'ducks/locale';
import UserHeader from 'components/common/user-header/UserHeader';

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.selectIsAuthenticated(state),
  userName: authSelectors.selectUser(state).username,
  locale: localeSelectors.selectLocaleState(state)
});

const mapDispatchToProps = {
  onLogout: appActions.logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);

