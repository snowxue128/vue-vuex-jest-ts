import { Mutation } from 'vuex';
import { TypeTree } from '../../types';
import { AppState } from '../state/types';

export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}

export const appMutationTypes: TypeTree = {
  DEL_HERO: 'DEL_HERO',
  ADD_HERO: 'ADD_HERO',
  GET_HERO: 'GET_HERO',
  UPDATE_NAME: 'UPDATE_NAME',
  CLEAR_MSG: 'CLEAR_MSG:',
  LOG_MSG: 'LOG_MSG',
  SAVE_RECORD: 'SAVE_RECORD',
  CLEAR_TAG :  'CLEAR_TAG',
};

export type MutationType = Mutation<AppState>;
