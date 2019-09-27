import { Module } from 'vuex';
import { IRootState } from '../types';
import { AppState } from './state/types';

import { state } from './state';
import { mutations} from './mutations';

export const Heroes: Module<AppState, IRootState> = {
  namespaced: true,
  state,
  mutations,
};

