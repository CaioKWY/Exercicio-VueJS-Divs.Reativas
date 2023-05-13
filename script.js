const vm = new Vue({
    el: "#app",
    data: {
        cor: 'branco'
    },
    methods: {
        mudarCor(c){
            this.cor = c

        }
    }
})
