<template>
    <div class="head-wrapper">
        <div class="head">
            <div class="left fl">
                <div class="logo-box">
                    <img src="./../assets/img/logo.png" alt="logo" class="fl">
                    <div class="logo-txt fl">
                        <p class="cn">币探</p>
                        <p class="en">Bitane</p>
                    </div>
                </div>
                <div class="txt">数字资产，全网行情触手可及</div>
            </div>
            <div class="right fr">
                <a href="javascript:;" class="down" @click="dlIOS">
                    <img src="./../assets/img/ios.png" alt="币探ios下载">
                    <span>iOS 下载</span>
                </a>
                <a href="javascript:;" class="down" @click="dlAndroid">
                    <img src="./../assets/img/Android.png" alt="币探android下载">
                    <span>Android 下载</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
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
    }
}
</script>

<style scoped>

</style>
