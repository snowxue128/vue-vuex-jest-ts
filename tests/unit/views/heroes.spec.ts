import Heroes from '@/views/Heroes.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { __createMocks as createStoreMocks } from '@/store/_mock_/index';

jest.mock('@/store');

const localVue = createLocalVue();
localVue.use(Vuex);

let storeMocks: any;
let wrapper: any;

describe('Heroes.vue test', () => {
    beforeEach(() => {
        storeMocks = createStoreMocks();
        wrapper = shallowMount(Heroes, {
            store: storeMocks.store,
            localVue,
        });
    });

    it('delHero test 删除英雄', () => {
        wrapper.vm.removeHero();
        expect(storeMocks.mutations.DEL_HERO).toBeCalled();
    });

    it('addHero test 增加英雄/跳转增加日志', () => {
        wrapper.vm.addNewHero();
        expect(storeMocks.mutations.ADD_HERO).toBeCalled();
        expect(storeMocks.mutations.LOG_MSG).toBeCalled();
    });

    it('logMsg test 跳转增加日志', () => {
        wrapper.vm.toDetail();
        expect(storeMocks.mutations.LOG_MSG).toBeCalled();
    });

    // it('ClearTag test message显示隐藏', () => {
    //     wrapper.vm.created();
    //     expect(storeMocks.mutations.CLEAR_TAG).toBeCalled();
    //     expect(storeMocks.mutations.LOG_MSG).toBeCalled();
    // });
});
