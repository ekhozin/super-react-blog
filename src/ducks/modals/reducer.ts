import Immutable from 'immutable';
import types from './types';

const initialState = Immutable.fromJS({
  zIndex: 1000,
  modalsIds: [],
  modalsById: {}
});

function showModal(state, action) {
  return state.withMutations((state) => {
    state.update('modalsIds', (modalsIds) => {
        return modalsIds.indexOf(action.id) === -1 ?
          modalsIds.push(action.id) : modalsIds;
      })
      .update('modalsById', (modalsById) => {
        return modalsById.has(action.id) ?
          modalsById :
          modalsById.set(action.id, Immutable.Map({
            zIndex: state.get('zIndex'),
            id: action.id,
            config: Immutable.fromJS(action.config)
          }));
      })
      .set('zIndex', state.get('zIndex') + 1);
  });
}

function closeModal(state, action) {
  return state.withMutations((state) => {
    state.update('modalsIds', (modalsIds) => {
        return modalsIds.filter((modalId) => modalId !== action.id);
      })
      .deleteIn(['modalsById', action.id]);
  });
}

function closeAllModals(state, action) {
  return state.withMutations((state) => {
    state.set('modalsIds', Immutable.List())
      .set('modalsById', Immutable.Map());
  });
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
};
