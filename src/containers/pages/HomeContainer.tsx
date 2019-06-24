import {connect} from 'react-redux';

import Home from 'components/pages/home/Home';
import {modalsActions} from 'ducks/modals';

const mapDispatchToProps = {
  showModal: modalsActions.showModal
};

export default connect(null, mapDispatchToProps)(Home);
