import omit from 'lodash.omit';
import types from './types';

const initialState = {
  zIndex: 1000,
  modalsIds: [],
  modalsById: {}
};

function showModal(state, action) {
  return {
    ...state,
    modalsIds: state.modalsIds.indexOf(action.id) === -1 ?
      [...state.modalsIds, action.id] :
      state.modalsIds,
    modalsById: state.modalsById[action.id] ?
      state.modalsById :
      {
        ...state.modalsById,
        [action.id]: {
          zIndex: state.zIndex,
          id: action.id,
          config: action.config
        }
      },
    zIndex: state.zIndex + 1
  };
}

function closeModal(state, action) {
  return {
    ...state,
    modalsIds: state.modalsIds.filter((modalId) => modalId !== action.id),
    modalsById: omit(state.modalsById, action.id)
  };
}

function closeAllModals(state, action) {
  return {
    ...state,
    modalsIds: [],
    modalsById: {}
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return showModal(state, action);
    case types.CLOSE_MODAL:
      return closeModal(state, action);
    case types.CLOSE_ALL_MODALS:
      return closeAllModals(state, action);
    default:
      return state;
  }
}
