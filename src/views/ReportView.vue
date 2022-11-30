<template>
    <div class="statsdiv">
    <GChart type="PieChart" :data="chartData" :options="chartOptions"></GChart>
    
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
            chartData: [],
            chartOptions: {
                chart: {
                    title: 'Contacts by Domain',
                    width: 800,
                    heigth: 600
                }
            }

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
            let contactsKeys = Object.keys(contacts)
            let chartLegend = ['Domain', 'Total']
            this.chartData.push(chartLegend)
            contactsKeys.forEach(item => {
                let domainArray = contacts[item]
                this.chartData.push([item, domainArray.length])
            })
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