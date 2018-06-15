<template>
    <div class="container">
        <head-pc to="home"></head-pc>
        <div class="body">
            <p class="txt1">Global Cryptocurrency Price Tracking & Breaking News</p>
            <p class="txt1 txt2">Decentralize Your Mind</p>
            <div class="dl-box">
                <a href="javascript:;" @click="dlIOS" class="dl-a">iOS Download</a>
                <a href="javascript:;" @click="dlAndroid" class="dl-a">Android Download</a>
            </div>
            <img src="./../assets/img/pic@2x.png" class="mobile">
        </div>
    </div>
</template>

<script>
import headPc from './../components/head-pc'

export default {
    data() {
        return {
            
        }
    },
    methods: {
        dlIOS() {
            window.open('itms-services:///?action=download-manifest&url=https://dl.bitane.io/bitane.plist')
        },
        dlAndroid() {
            window.open('http://dl.bitane.io/bitane.apk')
        }
    },
    mounted() {
        let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
        if(isMobile){
            this.$router.push({ path: '/m_index' });
            window.location.reload();
        }
    },
    components: {
        headPc
    }
}
</script>

<style>
@import url(./../assets/css/base.css);
@import url(./../assets/css/index-pc.css);
</style>
