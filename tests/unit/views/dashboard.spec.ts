import Dashboard from '@/views/Dashboard.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { __createMocks as createStoreMocks } from '@/store/_mock_/index';

jest.mock('@/store');

const localVue = createLocalVue();
localVue.use(Vuex);

let storeMocks: any;
let wrapper: any;

describe('Dashboard.vue test', () => {
  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallowMount(Dashboard, {
      store: storeMocks.store,
      localVue,
    });
  });

  it('logMsg test 跳转增加日志', () => {
    wrapper.vm.heroDetail();
    expect(storeMocks.mutations.LOG_MSG).toBeCalled();
  });
});
