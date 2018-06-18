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
        </div>
    </div>
</template>

<script>
import head from './../components/head';

export default {
    data() {
        return {
            
        };
    },
    methods: {
        
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
        document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 375 * 100 + "px";
        window.onresize = function() {
        document.documentElement.style.fontSize =
            document.documentElement.clientWidth / 375 * 100 + "px";
        };
        let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
        if(isMobile){
           
        }else{
            this.$router.push({ path: '/index' });
            window.location.reload();
        }
    },
    components: { 'm-head': head }
}
</script>

<style>
@import url(./../assets/css/index.css);
</style>
