<template>
    <div class="container">
        <div class="head flex spb">
            <div class="logo-box flex fcen">
                <img src="./../assets/logo.png" alt="币探logo">
                <div class="logo-txt fcol spc">
                    <p class="cn">币探</p>
                    <p class="en">Bitane</p>
                </div>
            </div>
            <a class="app-box flex fcen">
                <img src="./../assets/phone.png" alt="">
                <div class="logo-txt fcol spc">
                    <p class="cn">币探App下载</p>
                    <p class="en">www.bitane.io</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
// import { exchangeList } from './../api/api';
import { numFmt } from './../utils/num-format'
export default {
    data() {
        return {
            list: [],
            
        }
    },
    methods: {
        getList() {
            this.$axios.get('/api/market/market-rest/exchange-market-info', {params: {exchangeCode: 'binance'}}).then(res => {
                // console.log(res.data);
                if(res.data.code == 0){
                    this.list = res.data.data;
                }
            }).catch(res => {
                console.log(res);
            })
        },
    },
    filters: {
        numFmt1: function(num) {
            return numFmt(num);
        },
        numFmt2: function(num) {
            if(num && num > 100000){
                num = num / 10000;
                return numFmt(num, 1) + '万';
            }else{
                return numFmt(num);
            }
        }
    },
    mounted() {
        this.getList();
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 10 + 90 + 'px';
        window.onresize = function(){
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 10 + 90 + 'px';
        }
    }
}
</script>

<style>
@import url(./../../static/css/base.css);
@import url(./../../static/css/index.css);
</style>
