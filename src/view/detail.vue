<template>
    <div class="container">
        <router-view></router-view>
        <div class="head flex spb">
            <div class="logo-box flex fcen">
                <img src="./../assets/img/logo.png" alt="币探logo">
                <div class="logo-txt fcol spc">
                    <p class="cn">币探</p>
                    <p class="en">Bitane</p>
                </div>
            </div>
            <a :href="appLink" class="app-box flex fcen">
                <img src="./../assets/img/phone.png" alt="">
                <div class="logo-txt fcol spc">
                    <p class="cn">币探App下载</p>
                    <p class="en">www.bitane.io</p>
                </div>
            </a>
        </div>
        <div class="body">
            <div class="web flex">
                <img src="./../assets/img/binance.png" alt="币安网logo">
                <div class="txt fcol spc">
                    <p class="cn">币安网(Binance)</p>
                    <a :href="bitInfo.exchangeWebsiteAddress" class="link">{{bitInfo.exchangeWebsiteAddress}}</a>
                </div>
            </div>
            <div class="vol-box flex spb">
                <div class="vol fcol spb">
                    <p class="txt">成交额(24H):</p>
                    <p class="num">¥{{bitInfo.turnoverCNY | numFmt}}<span class="us">约${{bitInfo.turnoverUSD | numFmt}}</span></p>
                </div>
                <div class="vol fcol spb">
                    <p class="rank">排名:NO{{bitInfo.ranking}}</p>
                    <p class="country">国家:{{bitInfo.countryName}}</p>
                </div>
            </div>
            <div class="intro">
                <p>{{bitInfo.exchangeAbstract}}</p>
            </div>
            <div class="wrapper ptb10">
                <h2 class="title">行情</h2>
                <div class="market-list">
                    <a href="javascript:;" class="item flex spb fcen" v-for="item in list" :key="item.kindCode">
                        <div class="con">
                            <p class="name">{{item.kindName}}</p>
                            <p class="ex">{{item.kindCode.split('/')[0]}}<span>/{{item.kindCode.split('/')[1]}}</span></p>
                            <p class="vol">量{{item.volume | numFmt}}{{item.kindCode.split('/')[1]}}</p>
                        </div>
                        <div class="price-box">
                            <p class="price">{{item.price | numFmt}}</p>
                            <p class="cny">¥ {{item.legalTendeCNY | numFmt}}</p>
                        </div>
                        <div class="rate up" v-if="item.rose > 0">+{{item.rose | numFmt2}}%</div>
                        <div class="rate" v-if="item.rose == 0">0.0%</div>
                        <div class="rate down" v-if="item.rose < 0">-{{Math.abs(item.rose) | numFmt2}}%</div>
                    </a>
                </div>
            </div>
        </div>
        <a href="javascript:;" class="to-top" id="toTop" @click="scrollToTop"></a>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
import { baseUrl } from './../api/baseUrl'
import { setTitle } from './../utils/setTitle'

export default {
    data() {
        return {
            code: '',
            list: [],
            bitInfo: {},
        };
    },
    methods: {
        getList() {
            this.$axios.get(`${baseUrl}/market/market-rest/exchange-market-info`, {
                params: { exchangeCode: this.code }
            })
            .then(res => {
                Indicator.close();
                if (res.data.code == 0) {
                    this.list = res.data.data;
                }else{
                    Toast({
                        message: res.data.resultMsg,
                        position: 'bottom'
                    })
                }
            })
            .catch(res => {
                Indicator.close();
                Toast({
                    message: '未知错误！',
                    position: 'bottom'
                })
            });
        },
        getExInfo() {
            this.$axios.post(`${baseUrl}/market/market-rest/select-exchangeList`, { exchangeId: "673" })
            .then(res => {
                if(res.data.code == 0){
                    this.bitInfo = res.data.data;
                }else{
                    Toast({
                        message: res.data.resultMsg,
                        position: 'bottom'
                    })
                }
            })
            .catch(res => {
                Toast({
                    message: '未知错误！',
                    position: 'bottom'
                })
            })
        },
        scrollToTop() {
            let st = document.documentElement.scrollTop;
            if (st > 0) {
                window.requestAnimationFrame(this.scrollToTop);
                window.scrollTo(0, st - (st / 5));
            }
        },
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
    filters: {
        numFmt: function(num) {
            if(!num || num == '' || isNaN(Number(num))){
                return 0;
            }else if(num < 1){
                return parseFloat(parseFloat(num).toFixed(8));
            }else if(num < 10000){
                return parseFloat(parseFloat(num).toFixed(2));
            }else if(num < 100000000){
                num = num / 10000;
                return parseFloat(parseFloat(num).toFixed(2)) + '万';
            }else{
                num = num / 100000000;
                return parseFloat(parseFloat(num).toFixed(2)) + '亿';
            }
        },
        numFmt2: function(num) {
            return parseFloat(parseFloat(num).toFixed(2));
        }
    },
    mounted() {
        if(this.$route.params){
            let obj = this.$route.params;
            this.code = obj.code;
            if(obj.title){
                setTitle(obj.title);
                sessionStorage.setItem('title', obj.title);
            }else{
                let t = sessionStorage.getItem('title')
                if(t){
                    setTitle(t);
                }
            }
        }
        Indicator.open('加载中...');
        this.getExInfo();
        this.getList();

        document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 375 * 10 + 90 + "px";
        window.onresize = function() {
        document.documentElement.style.fontSize =
            document.documentElement.clientWidth / 375 * 10 + 90 + "px";
        };
        document.addEventListener('scroll', function(e){
            let st = document.documentElement.scrollTop;
            if(st > 500){
                document.getElementById('toTop').style.display = 'block';
            }else{
                document.getElementById('toTop').style.display = 'none';
            }
        }, false);
        setInterval(function() {
            this.getList();
        }.bind(this), 60000);
        
        let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
        if(isMobile){
           
        }else{
            this.$router.push({ path: '/index' });
            window.location.reload();
        }
    }
}
</script>

<style>
@import url(./../assets/css/base.css);
@import url(./../assets/css/detail.css);
</style>
