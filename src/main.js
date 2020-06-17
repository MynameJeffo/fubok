import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import LoginComponent from './components/Login/Login.vue';
import RegisterComponent from './components/Login/Register.vue';
import MemberInfoComponent from './components/MemberInfo/MemberInfo.vue';
import GiftsComponent from './components/MemberInfo/Gifts.vue';
import PromotionComponent from './components/Promotion/Promotion.vue';

import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

const routes = [
    {
        name: 'promotion',
        path: '/',
        alias: '/promotion',
        component: PromotionComponent
    },
    {
        name: 'login',
        path: '/login',
        component: LoginComponent
    },
    {
        name: 'register',
        path: '/register',
        component: RegisterComponent
    },
    {
        name: 'memberInfo',
        path: '/memberInfo',
        component: MemberInfoComponent
    },
    {
        name: 'gifts',
        path: '/gifts',
        component: GiftsComponent
    }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
