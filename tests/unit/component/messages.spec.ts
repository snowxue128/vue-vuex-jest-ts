import Message from '@/components/Message.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { __createMocks as createStoreMocks } from '@/store/_mock_/index';

jest.mock('@/store');

const localVue = createLocalVue();
localVue.use(Vuex);

let storeMocks: any;
let wrapper: any;

describe('Message.vue test', () => {
  storeMocks = createStoreMocks();
  wrapper = shallowMount(Message, {
    store: storeMocks.store,
    localVue,
    mocks: {
      $t: jest.fn(),
    },
  });
  const mockFn = jest.fn();
  wrapper.setMethods({
    clearMsg: mockFn,
  });



  it('隐藏信息', () => {
    wrapper.find('button').trigger('click');
    expect(mockFn).toBeCalled();
  });

  // it('隐藏信息', () => {
  //   wrapper.vm.clearMsg();
  //   expect(storeMocks.mutations.CLEAR_MSG).toBeCalled();
  // });
});
