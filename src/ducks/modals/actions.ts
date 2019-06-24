import types from './types';

export default {
  showModal(id, config = {}) {
    return {
      type: types.SHOW_MODAL,
      id,
      config
    };
  },

  closeModal(id) {
    return {
      type: types.CLOSE_MODAL,
      id
    };
  },

  closeAllModals() {
    return {
      type: types.CLOSE_ALL_MODALS
    };
  }
};
