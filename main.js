// src/main.js
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'

// Estilos do Quasar e Tailwind
import 'quasar/src/css/index.sass'
import './assets/tailwind.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: {} // Adicione plugins do Quasar aqui se precisar
})

app.mount('#app')