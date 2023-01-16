// import { createApp } from 'vue'
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            debug_mode: true,
            page: 'home'

        }
    },
    methods: {

    },
})


app.mount('#app')
