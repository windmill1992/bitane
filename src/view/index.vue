<template>
    <div class="container">
        <mt-button @click.native="getList">获取</mt-button>
        <table>
            <tr v-for="item in list" :key="item.kindCode">
                <td>{{item.kindName}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
// import { exchangeList } from './../api/api';
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getList() {
            this.$axios.get('/api/market/market-rest/exchange-market-info', {params: {exchangeCode: 'huobi.pro'}}).then(res => {
                console.log(res.data);
                if(res.data.code == 0){
                    this.list = res.data.data;
                }
            }).catch(res => {
                console.log(res);
            })
        }
    }
}
</script>

<style>

</style>
