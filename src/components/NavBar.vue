<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <div class="left-side">
                    <span id="brand">Super OrgContact</span>
                    <span><a class="nav-link active" aria-current="page" href="#/people/report">Report</a></span>
                    <span><a class="nav-link active" aria-current="page" href="#/people/contacts">Home</a></span>
                </div>
                <button class="btn btn-outlined btn-primary" type="button" @click="logout">Logout</button>
            </div>
        </nav>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['auth/logout']),
        logout() {
            this['auth/logout']().then(() =>
            this.$router.push('/')
            )
        }
    },
    computed: {
    }
}
</script>
<style scoped>
#brand {
    color: white;
    font-size: large;
}
</style>