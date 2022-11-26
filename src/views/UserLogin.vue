<template>
    <div id="home">
        <h4 id="brand-login">People Contacts</h4>
        <p id="words-login">All your contacts by domain</p>  
        <p>Please, come and share your contacts!</p>
        <button 
        class="btn btn-outline-primary"
        type="button"
        @click="enterWithGoogle">Login with Google</button>
        <small>All rights reserved. Contact mcoelho2011@hotmail.com</small>
        
        
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import { useCookies } from 'vue3-cookies';

const cookies = useCookies().cookies

export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        ...mapActions(["auth/getPersonInfo", "auth/validateToken"]),
        async enterWithGoogle() {
            await this["auth/getPersonInfo"]().then(() =>
            this.$router.push('people/contacts')
            )
        }
    },
    computed: {
        
    },
    mounted() {
        let token = cookies.get('token')
        if (token !== null) {
            if (token.status) {
                this["auth/validateToken"](token.token).then(() => {
                    let currentToken = cookies.get('token')
                    if (currentToken.status) {
                        this.$router.push('/people/contacts')
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
body {
    background-color: rgb(70, 70, 70);
}
#home {
    padding: 200px 30px;
}

#brand-login {
    color: rgb(39, 39, 39);
}

#words-login {
    color: rgb(39, 39, 39);
}
small {
    color: rgb(17, 118, 219);
}
</style>