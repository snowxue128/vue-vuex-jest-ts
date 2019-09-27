import { mutations } from '@/store/heroes/mutations';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Heroes module store测试', () => {
  it('delHero删除英雄', () => {
    const { DEL_HERO } = mutations;
    const state = {
      heroesData: [{ id: 1, name: 'WZJ' }, { id: 2, name: 'LB' }],
    } as any;

    DEL_HERO(state, { index: 1 });
    expect(state.heroesData.length).toBe(1);
  });

  it('addHero添加英雄', () => {
    const { ADD_HERO } = mutations;
    const state = {
      heroesData: [{ id: 1, name: 'WZJ' }, { id: 2, name: 'LB' }],
      index: 2,
    } as any;

    ADD_HERO(state, { heroName: 'ZGL' });
    expect(state.heroesData.length).toBe(3);
  });

  // it('getHero获取英雄名字', () => {
  //   const { GET_HERO } = mutations;
  //   const state = {
  //     heroesData: [{ id: 1, name: 'WZJ' }, { id: 2, name: 'LB' }],
  //     heroName: '',
  //   } as any;

  //   GET_HERO(state, { id: 2 });
  //   expect(state.heroName).toEqual(state.heroName);
  // });

  it('updateName修改名字', () => {
    const { UPDATE_NAME } = mutations;
    const state = {
      heroesData: [{ id: 1, name: 'WZJ' }, { id: 2, name: 'LB' }],
    } as any;

    UPDATE_NAME(state, {
      idAndName: {
        id: 2,
        name: 'zgl',
      },
    });
    expect(state.heroesData[1].name).toBe('LB');
  });

  it('logMsg日志信息', () => {
    const { LOG_MSG } = mutations;
    const state = {
      messages: ['found hero id = 12', 'fetch heroes'],
    } as any;

    LOG_MSG(state, { str: 'update hero  name id = 12 ' });
    expect(state.messages.length).toBe(3);
  });
});
