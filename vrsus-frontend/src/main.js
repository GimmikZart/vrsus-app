import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue';

loadFonts()
const pinia = createPinia()

const app = createApp(App)
            .use(vuetify)
            .use(pinia)
            .use(IonicVue)
            .use(router)
            
router.isReady().then(() => {
  app.mount('#app');
});
