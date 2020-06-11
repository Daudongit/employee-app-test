
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

window.events = new Vue();
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// import App from '~/components/App'

// import Router from 'vue-router'

// const Home = { template: '<div class="employee"><h1>Home</h1></div>' }
// const Foo = { template: '<div class="employee"><h1>Foo</h1></div>' }

// Vue.component('home', Home)
// Vue.component('foo', Foo)

// const routes =[
//     {path:'/',component:Home},
//     {path:'/foo',component:Foo}
// ]

// const router = new Router({
//     mode: 'history',
//     routes
// })


// Vue.use(Router)
// import router from './router'
import App from './components/App'

new Vue({
    el: '#app',
    // router,
    ...App
});
