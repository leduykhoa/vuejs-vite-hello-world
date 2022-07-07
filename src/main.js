import { createApp } from 'vue'
import { CKEditor } from '@ckeditor/ckeditor5-vue'
import App from './App.vue'
import store from './store'
import './index.css'

createApp(App)
    .use(store)
    .use(CKEditor)
    .mount('#app')
