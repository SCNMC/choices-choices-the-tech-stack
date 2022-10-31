import { createApp } from 'vue'
import {createPrismic} from "@prismicio/vue";
import App from './App.vue'
import router from './router'
import './assets/main.css'


const prismic = createPrismic({
    endpoint: "cmda-mid-term",
  });

  
createApp(App).use(router).use(prismic).mount("#app");




