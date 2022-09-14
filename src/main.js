import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';


import './assets/main.css'

import ConfiguratorRepository from './repositories/configuration/configuration.repository';
import AxiosService from './services/axios.service';

AxiosService.init();

axios.get('/urls.json').then(({ data }) => {
    const app = createApp(App)
    app.use(router)
    const configurationRepository = new ConfiguratorRepository(data.configurator_url, '');
    app.provide("configurationRepository",configurationRepository);

    app.mount('#app')
});



