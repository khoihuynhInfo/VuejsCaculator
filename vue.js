var vm = new Vue({
    el: '#my-app',
    data: {
        input: '',
    },
    methods: {
       clear: function(){
            this.input = ''
       },
       cancel: function(){
            this.input = this.input.slice(0, -1)
       },
       enter: function(key){
            if(!Number(key) && !Number([...this.input].pop())){
                this.input = this.input
            }else{
                this.input += key
            }   
       },
       equal:function(){
           
       }
    }
})