
/* Allows Vue dev tool to be used with FF dev tools*/
Vue.config.devtools = true;

var app = new Vue({
    /* el: element that connects to div with id of 'app' */
    el: '#app',
    data: {
        product: 'Aircraft',
        image: "_vue_images/vmSocks_green-on-white.jpg"
    }

})
