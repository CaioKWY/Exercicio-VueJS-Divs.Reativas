const vm = new Vue({
    el: "#app",
    data: {
        cor: 'branco',
        posiçãoX: 0,
        posiçãoY:0
    },
    methods: {
        mudarCor(c){
            this.cor = c

        },
        coordenadas(e){
            this.posiçãoX = e.clientX
            this.posiçãoY = e.clientY

        }
    }
})
