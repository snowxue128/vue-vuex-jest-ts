import { MutationTree } from 'vuex';
import { AppState } from '../state/types';
import { appMutationTypes } from './types';
import {
  delHero,
  addHero,
  getHero,
  updateName,
  clearMsg,
  logMsg,
  saveRecord,
  clearTag,
} from './mutations';

const {
  DEL_HERO,
  ADD_HERO,
  GET_HERO,
  UPDATE_NAME,
  CLEAR_MSG,
  LOG_MSG,
  SAVE_RECORD,
  CLEAR_TAG,
} = appMutationTypes;

export const mutations: MutationTree<AppState> = {
  [DEL_HERO]: delHero,
  [ADD_HERO]: addHero,
  [GET_HERO]: getHero,
  [UPDATE_NAME]: updateName,
  [CLEAR_MSG]: clearMsg,
  [LOG_MSG]: logMsg,
  [SAVE_RECORD]: saveRecord,
  [CLEAR_TAG]: clearTag,
};



