const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmail : '',
        }
    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                let randomEmail = response.data;
                this.randomEmail = randomEmail.response;
            })
        }
    },
    created() {
        this.getRandomEmail();
    },
    mounted() {
        
    }
}).mount('#app')