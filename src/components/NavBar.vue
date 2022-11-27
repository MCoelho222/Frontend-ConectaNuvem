<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <span id="brand">People Contacts</span>
                <button class="btn btn-outlined btn-primary" type="button" @click="logout">Logout</button>
            </div>
        </nav>
        <!-- <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <span class="navbar-brand" href="#/">Contacts Manager</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#/people/report">Report</a>
                </li>
            </ul>
            <button class="btn btn-primary" type="button" @click="logout">Logout</button>
            </div>
        </div>
        </nav> -->
    </div>
</template>
<script>
import { useCookies } from "vue3-cookies";
import axios from 'axios';

const cookies = useCookies().cookies;

export default {
    data() {
        return {

        }
    },
    methods: {
        async logout () {
            await axios.get("https://mcoelho-peop-4feilbi6na-rj.a.run.app/people/logout", { 
        headers: {
            'Access-Control-Allow-Origin': "https://mcoelho-peop-4feilbi6na-rj.a.run.app/",
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '86400'
        }
    }).then(() => {
                let check = cookies.get('token')
                if (check !== null) {
                    cookies.remove('token')
                    localStorage.removeItem('people')
                    this.$router.push('/')
                }
            })
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