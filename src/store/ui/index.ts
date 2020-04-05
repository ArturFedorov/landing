import {Module} from 'vuex';

export interface IUIState {
  showLoader: boolean;
  showNavigation: boolean;
}

export const SHOW_LOADER = 'ui/SHOW_LOADER';
export const SET_SHOW_LOADER = 'ui/SET_SHOW_LOADER';
export const SHOW_NAVIGATION = 'ui/SHOW_NAVIGATION';
export const SET_SHOW_NAVIGATION = 'ui/SET_SHOW_NAVIGATION';

const uiState: Module<IUIState, {}> = {
  state: {
    showLoader: false,
    showNavigation: false
  },
  mutations: {
    [SET_SHOW_LOADER](state, payload) {
      state.showLoader = payload;
    },
    [SET_SHOW_NAVIGATION](state, payload) {
      state.showNavigation = payload;
    }
  },
  getters: {
    [SHOW_NAVIGATION]: state => state.showNavigation,
    [SHOW_LOADER]: state => state.showLoader
  }
};

export default uiState;
