import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Homepage from './pages/Homepage.vue'
import PaperAbstracts from './pages/PaperAbstracts.vue'
import UserLogin from './pages/UserLogin.vue'
import { createRouter, createWebHistory } from 'vue-router'; 

const routes = [{path: '/', component: Homepage},
{
    path: '/PaperAbstracts', component: PaperAbstracts
},
{
    path: '/UserLogin', component: UserLogin
}
];

const app =createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
app.use(router);    
app.mount('#app');
