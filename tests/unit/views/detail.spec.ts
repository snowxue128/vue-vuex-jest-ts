import Detail from '@/views/Detail.vue';
import {shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { __createMocks as createStoreMocks } from '@/store/_mock_/index';
import Router from 'vue-router';

jest.mock('@/store');

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Router);

const router = new Router({
  routes: [{
    name: 'detail',
    path: '/detail/13',
  }],
});

let storeMocks: any;
let wrapper: any;

describe('Detail.vue test', () => {
  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallowMount(Detail, {
      store: storeMocks.store,
      localVue,
      router,
      });
    });

  it('logMsg test 修改名字/跳转增加日志', () => {
    wrapper.vm.updateName();
    expect(storeMocks.mutations.UPDATE_NAME).toBeCalled();
    expect(storeMocks.mutations.LOG_MSG).toBeCalled();
  });
});

