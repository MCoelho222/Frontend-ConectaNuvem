<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <span id="brand">People Contacts</span>
                <button class="btn btn-outlined btn-primary" type="button" @click="logout">Logout</button>
                <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#/">Stats</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#/people/report">Contacts</a>
                        </li>
                    </ul>
                </div> -->
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