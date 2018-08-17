<template>
    <div class="container">
        <m-head to="market" :code="code"></m-head>
        <div class="m-body-m">
            <div class="web flex">
                <img :src="logos[code]" alt="logo">
                <div class="txt fcol spc">
                    <p class="cn">{{title}}({{code | capitalize}})</p>
                    <a :href="bitInfo.exchangeWebsiteAddress" class="link">{{bitInfo.exchangeWebsiteAddress}}</a>
                </div>
            </div>
            <div class="vol-box flex spb">
                <div class="vol fcol spb">
                    <p class="txt">AMOUNT(24H):</p>
                    <p class="num">¥{{bitInfo.turnoverCNY | numFmt}}<br /><span class="us">(≈${{bitInfo.turnoverUSD | numFmt}})</span></p>
                </div>
                <div class="vol fcol spb">
                    <p class="rank">Ranking:NO{{bitInfo.ranking}}</p>
                    <p class="country">Country:{{bitInfo.countryName}}</p>
                </div>
            </div>
            <div class="intro">
                <p id="intro">{{bitInfo.exchangeAbstract}}</p>
            </div>
            <a href="javascript:;" id="showmore" class="m-look" v-if="showAll" @click="lookAll">{{lookTxt}}</a>
            <div class="wrapper ptb10">
                <h2 class="title">Market</h2>
                <div class="market-list">
                    <a href="javascript:;" class="item flex spb fcen" v-for="item in list" :key="item.kindCode">
                        <div class="con">
                            <p class="name">{{item.kindName}}</p>
                            <p class="ex">{{item.kindCode.split('/')[0]}}<span>/{{item.kindCode.split('/')[1]}}</span></p>
                            <p class="vol">V {{item.volume | numFmt}} {{item.kindCode.split('/')[1]}}</p>
                        </div>
                        <div class="price-box">
                            <p class="price">{{item.price | numFmt}}</p>
                            <p class="cny">¥{{item.legalTendeCNY | numFmt}}</p>
                        </div>
                        <div class="rate up" v-if="item.rose > 0">+{{item.rose | numFmt2}}%</div>
                        <div class="rate" v-if="item.rose == 0">0.0%</div>
                        <div class="rate down" v-if="item.rose < 0">-{{Math.abs(item.rose) | numFmt2}}%</div>
                    </a>
                </div>
            </div>
        </div>
        <a href="javascript:;" class="to-top-m" id="toTop" @click="scrollToTop"></a>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
import { baseUrl } from './../api/baseUrl'
import { setTitle } from './../utils/setTitle'
import head from './../components/head'

export default {
    data() {
        return {
            code: '',
            title: '',
            list: [],
            bitInfo: {},
            lookTxt: 'LookAll',
            showAll: false,
            logos: {
                'huobi.pro': './../../static/img/huobi.png',
                'okex': './../../static/img/okex.png',
                'binance': './../../static/img/binance.png',
                'bitfinex': './../../static/img/bitfinex.png',
                'bittrex': './../../static/img/bittrex.jpg',
                'bitstamp': './../../static/img/bitstamp.png'
            },
            ids: {
                'huobi.pro': 724,
                'okex': 664,
                'binance': 673,
                'bitfinex': 675,
                'bittrex': 666,
                'bitstamp': 771
            }
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
            this.$axios.post(`${baseUrl}/market/market-rest/select-exchangeList`, { exchangeId: this.ids[this.code] })
            .then(res => {
                if(res.data.code == 0){
                    this.bitInfo = res.data.data;
                    let $p = document.getElementById('intro');
                    $p.classList.remove('all');
                    setTimeout(() => {
                        let h = $p.offsetHeight;
                        if(h > 160){
                            this.showAll = true;
                            $p.classList.add('all');
                            $p.parentElement.style.height = 'auto';
                        }else{
                            this.showAll = false;
                        }
                    }, 30);
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
        lookAll() {
            let $p = document.getElementById('intro');
            if(this.lookTxt == 'LookAll'){
                $p.classList.remove('all');
                this.lookTxt = 'TakeUp';
            }else{
                $p.classList.add('all');
                this.lookTxt = 'LookAll';
            }
        },
        scrollToTop() {
            let st = window.scrollY;
            if (st > 0) {
                window.requestAnimationFrame(this.scrollToTop);
                window.scrollTo(0, st - (st / 5));
            }
        },
    },
    filters: {
        numFmt: function(num) {
            if(!num || num == '' || isNaN(Number(num))){
                return 0;
            }else if(num < 1){
                return parseFloat(parseFloat(num).toFixed(8));
            }else if(num < 1000){
                return parseFloat(parseFloat(num).toFixed(2));
            }else if(num < 1000000){
                num = num / 10000;
                return parseFloat(parseFloat(num).toFixed(2)) + 'k';
            }else if(num < 1000000000){
                num = num / 1000000;
                return parseFloat(parseFloat(num).toFixed(2)) + 'Mn';
            }else{
                num = num / 1000000000;
                return parseFloat(parseFloat(num).toFixed(2)) + 'Bn';
            }
        },
        numFmt2: function(num) {
            return parseFloat(parseFloat(num).toFixed(2));
        },
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },
    mounted() {
        if(this.$route.params){
            let obj = this.$route.params;
            this.code = obj.code;
            if(obj.title){
                this.title = obj.title;
                setTitle(obj.title);
                sessionStorage.setItem('title', obj.title);
            }else{
                let t = sessionStorage.getItem('title')
                if(t){
                    this.title = t;
                    setTitle(t);
                }
            }
        }
        Indicator.open('加载中...');
        this.getExInfo();
        this.getList();

        let ww = document.documentElement.clientWidth;
        ww = ww >= 768 ? ww / 2 : ww;
        document.documentElement.style.fontSize = ww / 375 * 100 + "px";
        window.onresize = function() {
            document.documentElement.style.fontSize = ww / 375 * 100 + "px";
        };

        let $top =  document.getElementById('toTop');
        if($top){
            let _this = this;
            window.addEventListener('scroll', function(e){
                let st = window.scrollY;
                if(st > 500){
                    $top.style.display = 'block';
                }else{
                    $top.style.display = 'none';
                }
            }, true);
        }
        setInterval(function() {
            this.getList();
        }.bind(this), 60000);
        
        let isMobile = /Android|WebOS|iPhone|iPod|BlackBerry|iPad|pad|pod|phone|ios|Mobile|IEMobile|MQQBrowser|BrowserNG|Symbian/i.test(navigator.userAgent);
        if(isMobile){
           document.getElementById('app').style.minWidth = 'none';
        }else{
            this.$router.push({ path: '/market/'+ this.code });
            window.location.reload();
        }
    },
    watch: {
        $route (to, from) {
            if(this.code != to.params.code){
                let obj = to.params;
                this.code = obj.code;
                if(obj.title){
                    this.title = obj.title;
                    setTitle(obj.title);
                    sessionStorage.setItem('title', obj.title);
                }else{
                    let t = sessionStorage.getItem('title')
                    if(t){
                        this.title = t;
                        setTitle(t);
                    }
                }
                Indicator.open('加载中...');
                this.getExInfo();
                this.getList();
            }
        }
    },
    components: { 'm-head': head }
}
</script>

<style scoped>
@import url(./../assets/css/market.css);
</style>
