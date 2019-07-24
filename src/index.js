import Vue from 'vue'
import axios from 'axios'

new Vue({
    el: '#searchbird',
    data: {
        message: 'Hello Vue!',
        serverMessage: ''
    },
    methods: {
        async hello() {
            try {
                let res = await axios.get("http://localhost:3000");
                this.serverMessage = res.data;
            } catch (e) {
                console.warn(e)
            }
        },
    }
})
