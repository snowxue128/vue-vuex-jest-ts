import HeroesSearch from '@/components/HeroesSearch.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { __createMocks as createStoreMocks } from '@/store/_mock_/index';

jest.mock('@/store');

const localVue = createLocalVue();
localVue.use(Vuex);

let storeMocks: any;
let wrapper: any;

describe('HeroesSearch.vue test', () => {
  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallowMount(HeroesSearch, {
      store: storeMocks.store,
      localVue,
    });
  });

  it('搜索测试', () => {
   const searchStr: string = "";
   const searchData  = [
    { id: 12, name: 'Narco' },
    { id: 17, name: 'Dynama' },
    { id: 20, name: 'Tornado' },
    ];

   const  textInput =  wrapper.find('input');
   textInput.setValue('Na');
   textInput.trigger('input');
   expect(searchStr).toBe('');
   expect(searchData.length).toBe(3);

   expect(storeMocks.mutations.LOG_MSG).toBeCalled();
  });

  it('logMsg test 跳转增加日志', () => {
    wrapper.vm.toDetail();
    expect(storeMocks.mutations.LOG_MSG).toBeCalled();
  });
});

