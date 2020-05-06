import {Module} from 'vuex';
import {i18n} from '@/i18n';

export interface IUIState {
  showLoader: boolean;
  showNavigation: boolean;
  locale: string;
}

export const SHOW_LOADER = 'ui/SHOW_LOADER';
export const SET_SHOW_LOADER = 'ui/SET_SHOW_LOADER';
export const LOCALE = 'ui/LOCALE';
export const SHOW_NAVIGATION = 'ui/SHOW_NAVIGATION';
export const SET_SHOW_NAVIGATION = 'ui/SET_SHOW_NAVIGATION';
export const SET_LOCALE = 'ui/SET_LOCALE';

const defaultLocale = 'ru';

const uiState: Module<IUIState, {}> = {
  state: {
    showLoader: false,
    showNavigation: false,
    locale: 'ru'
  },
  mutations: {
    [SET_SHOW_LOADER](state, payload) {
      state.showLoader = payload;
    },
    [SET_SHOW_NAVIGATION](state, payload) {
      state.showNavigation = payload;
    },
    [SET_LOCALE](state, payload: string) {
      state.locale = payload;
      i18n.locale = payload;
      localStorage.setItem('locale', payload);
    }
  },
  getters: {
    [SHOW_NAVIGATION]: state => state.showNavigation,
    [SHOW_LOADER]: state => state.showLoader,
    [LOCALE](state) {
      const localStoreLocale = localStorage.getItem('locale');
      if (localStoreLocale !== null) {
        state.locale = localStoreLocale;
      } else {
        state.locale = defaultLocale;
      }
      return state.locale;
    }
  }
};

export default uiState;
