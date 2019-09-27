import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from '@/App.vue';
import Dashboard from '@/views/Dashboard.vue';
import { __createMocks as createStoreMocks } from '@/store/_mock_/index';
import routes from '@/router/router';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter({routes});

// jest.mock('@/router');
jest.mock('@/store');

let storeMocks: any;
let wrapper: any;
describe('App.vue test', () => {
    beforeEach(() => {
        storeMocks = createStoreMocks();
        wrapper = mount(App, {
            store: storeMocks.store,
            localVue,
            router,
        });
    });
    it("renders a child component via routing", () => {
        router.push("/dashboard");
        expect(wrapper.find(Dashboard).exists()).toEqual(true);
        });

});
