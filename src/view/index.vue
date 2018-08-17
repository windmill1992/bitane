<template>
    <div class="container">
         <m-head to="home"></m-head>
        <div class="body-m">
            <img src="./../assets/img/logo_m.png" class="logo">
            <p class="txt1">Global Cryptocurrency</p>
            <p class="txt1">Price Tracking & Breaking News
            <p class="txt1">Decentralize Your Mind</p>
            <div class="dl-box">
                <a href="https://itunes.apple.com/us/app/%E5%B8%81%E6%8E%A2/id1335517724?l=zh&ls=1&mt=8" class="dl-a">iOS Download</a>
                <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ytkj.bitan&fromcase=40002" class="dl-a">Android Download</a>
            </div>
            <p class="bigtxt"><span>Bitane</span></p>
        </div>
    </div>
</template>

<script>
import head from './../components/head';

export default {
    data() {
        return {
            
        }
    },
    computed: {
        appLink() {
            var u = navigator.userAgent;
            if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
                return 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ytkj.bitan&fromcase=40002';
            }else if(u.indexOf('iPhone') > -1){
                return 'https://itunes.apple.com/us/app/%E5%B8%81%E6%8E%A2/id1335517724?l=zh&ls=1&mt=8';
            }else{
                return '';
            }
        }
    },
    mounted() {
        let ww = document.documentElement.clientWidth;
        let hh = document.documentElement.clientHeight;
        if(hh < ww * 1.5 && ww < 768){
            let $el = document.getElementsByClassName('body-m')[0];
            $el.getElementsByClassName('dl-box')[0].style.bottom = '.4rem';
        }
        ww = ww >= 768 ? ww / 2 : ww;
        document.documentElement.style.fontSize = ww / 375 * 100 + "px";
        window.onresize = function() {
            document.documentElement.style.fontSize = ww / 375 * 100 + "px";
        };
        let isMobile = /Android|WebOS|iPhone|iPod|BlackBerry|iPad|pad|pod|phone|ios|Mobile|IEMobile|MQQBrowser|BrowserNG|Symbian/i.test(navigator.userAgent);
        if(isMobile){
            let _this = this;
            document.getElementById('app').style.minWidth = 'none';
            window.onresize = function(){
                if(_this.$router.path.indexOf('market') == -1){
                    window.location.reload();
                }
           }
        }else{
            this.$router.push({ path: '/index' });
            window.location.reload();
        }
    },
    components: { 'm-head': head }
}
</script>

<style scoped>
@import url(./../assets/css/index.css);
</style>
