const app = {
    data(){
        return{
            name: "",
            email: "",
            users: [],
            // conductional operater
            number: 10,
            status: false
        };
    },
    methods: {
        addUser: function(e){
            e.preventDefault();
           this.users=[{name: this.name , email:this.email}, ...this.users];
           this.name ="";
           this.email="";
           this.status = true;
        },
    },
};

Vue.createApp(app).mount("#application");