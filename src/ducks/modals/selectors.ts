import {createSelector} from 'reselect';

function selectModalsState(state) {
  return state.get('modals');
}

function selectModalsByIdImmutable(state) {
  return selectModalsState(state).get('modalsById');
}

function selectModalsIdsImmutable(state) {
  return selectModalsState(state).get('modalsIds');
}

const selectModalsImmutable = createSelector(
  [selectModalsByIdImmutable, selectModalsIdsImmutable],
  (modalsById, modalsIds) => {
    return modalsIds.map((modalId) => modalsById.get(modalId));
  }
);

const selectModals = createSelector(
  selectModalsImmutable,
  (modals) => {
    return modals.toJS();
  }
);

function selectModalByIdImmutable(state, id) {
  return selectModalsByIdImmutable(state).get(id);
}

const makeSelectModalById = () => createSelector(
  selectModalByIdImmutable,
  (modal) => modal.toJS()
);

function selectModalIndexById(state, id) {
  return selectModalByIdImmutable(state, id).get('zIndex');
}

export default {
  selectModals,
  makeSelectModalById,
  selectModalIndexById
};
