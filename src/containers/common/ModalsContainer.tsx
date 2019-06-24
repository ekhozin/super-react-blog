import {connect} from 'react-redux';

import Modals from 'components/modals/Modals';
import {modalsSelectors, modalsActions} from 'ducks/modals';

const mapStateToProps = (state) => ({
  modals: modalsSelectors.selectModals(state)
});

const mapDispatchToProps = {
  closeModal: modalsActions.closeModal,
  showModal: modalsActions.showModal,
  closeAllModals: modalsActions.closeAllModals
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
