<template>
    <div class="statsdiv">
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions"></GChart>
      
    </div>
</template>
<script>

import { GChart } from 'vue-google-charts'

export default {
    components: {
        GChart
    },
    data() {
        return {
            charData: []

        }
    },
    methods: {

    },
    computed: {

    },
    mounted() {
        let data = localStorage.getItem('people')
        if (data != null) {
            let contacts = JSON.parse(data).contacts
            console.log(contacts)

        } 
    }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  
}
</style>