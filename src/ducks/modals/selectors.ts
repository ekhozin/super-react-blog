import {createSelector} from 'reselect';

function selectModalsState(state) {
  return state.modals;
}

function selectModalsById(state) {
  return selectModalsState(state).modalsById;
}

function selectModalsIds(state) {
  return selectModalsState(state).modalsIds;
}

const selectModals = createSelector(
  [selectModalsById, selectModalsIds],
  (modalsById, modalsIds) => {
    return modalsIds.map((modalId) => modalsById[modalId]);
  }
);

function selectModalById(state, id) {
  return selectModalsById(state)[id];
}

function selectModalIndexById(state, id) {
  return selectModalById(state, id).zIndex;
}

export default {
  selectModals,
  selectModalIndexById
};
