import {Module} from 'vuex';
import {app} from '../../../main';
import {CHANGE_LANGUAGE} from './mutation-types';

interface ILanguageState {
  locale: string;
}

const languageState: Module<ILanguageState, {}> = {
  state: {
    locale: 'en'
  },
  mutations: {
    [CHANGE_LANGUAGE](state, lang: string) {
      state.locale = lang;
      app.$i18n.locale = lang;
    }
  }
};

export default languageState;
