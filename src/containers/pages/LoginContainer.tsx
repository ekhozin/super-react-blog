import {connect} from 'react-redux';

import {appActions} from 'ducks/app';
import {authSelectors} from 'ducks/auth';
import Login from 'components/pages/login/Login';

const mapStateToProps = (state) => ({
  error: authSelectors.selectError(state)
});

const mapDispatchToProps = {
  onLogin: appActions.loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
