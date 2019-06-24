import {connect} from 'react-redux';

import {appActions} from 'ducks/app';
import {authSelectors} from 'ducks/auth';
import Register from 'components/pages/register/Register';

const mapStateToProps = (state) => ({
  error: authSelectors.selectError(state)
});

const mapDispatchToProps = {
  onRegister: appActions.registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
