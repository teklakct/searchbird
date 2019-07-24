import Vue from 'vue'
import axios from 'axios'
import Dashboard from './components/Dashboard'

import './assets/style/main.scss'

new Vue({
    el: '#searchbird',
    components: {
        Dashboard
    },
    data() {
        return {
            message: 'Hello Vue!',
            serverMessage: ''
        }
    },
    methods: {
        async hello() {
            try {
                let res = await axios.get("http://localhost:3000/api");
                this.serverMessage = res.data;
            } catch (e) {
                console.warn(e)
            }
        },
    }
})
