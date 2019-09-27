import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const state = {
    heroesData: [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' },
    ],
    index: 11,
    heroName: '',
    msgTag: true,
    messages: ['found hero id = 12', 'fetch heroes'],
};

export const mutations = {
    DEL_HERO: jest.fn(),
    ADD_HERO: jest.fn(),
    GET_HERO: jest.fn(),
    UPDATE_NAME: jest.fn(),
    CLEAR_MSG: jest.fn(),
    LOG_MSG: jest.fn(),
    CLEAR_TAG: jest.fn(),
};


export function __createMocks(custom = {  mutations: {}, state: {} }) {
    const mockMutations = Object.assign({}, mutations, custom.mutations);
    const mockState = Object.assign({}, state, custom.state);

    return {
      mutations: mockMutations,
      state: mockState,
      store: new Vuex.Store({
        modules: {
           Heroes: {
            namespaced: true,
            mutations: mockMutations,
            state: mockState,
           },
        },

      }),
    };
  }

export const store = __createMocks().store;
