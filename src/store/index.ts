import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import {Heroes} from './heroes';

Vue.use(Vuex);


const store: StoreOptions<RootState> = {
  modules: {
    Heroes,
  },
};

export default new Vuex.Store<RootState>(store);
