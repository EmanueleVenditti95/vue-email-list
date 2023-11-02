const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmail : '',
            randomEmails : [],
        }
    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                let randomEmail = response.data;
                this.randomEmail = randomEmail.response;
                this.randomEmails.push(this.randomEmail);
            })
        },
        getArrayOfRandomEmails () {
            for (let i = 0; i < 10; i++) {
                this.getRandomEmail();
            }
        }
    },
    created() {
        this.getArrayOfRandomEmails()
    },
    mounted() {
    }
}).mount('#app')