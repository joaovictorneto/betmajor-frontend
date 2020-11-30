import Vue from 'vue'
import VueMq from 'vue-mq'

// Medidas iguais ao do bootstrap 4
Vue.use(VueMq, {
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 960,
        lg: 1140,
        xl: Infinity
    }
})