<template>
    <div class="container">
        <head-pc to="market" :code="code" class="heads"></head-pc>
        <div class="m-body" style="width: 1200px;">
            <div class="ex-info">
                <div class="left fl">
                    <div class="ex-logo fl">
                        <img :src="logos[code]" alt="logo">
                    </div>
                    <div class="info fl">
                        <p class="name">{{title}}({{code | capitalize}})</p>
                        <p class="intro">{{bitInfo.exchangeAbstract}}</p>
                        <p class="link">
                            <span>官网地址：</span>
                            <a :href="bitInfo.exchangeWebsiteAddress">{{bitInfo.exchangeWebsiteAddress}}</a>
                            <span class="country">国家：{{bitInfo.countryName}}</span>
                        </p>
                    </div>
                </div>
                <div class="right fl">
                    <div class="top">
                        <p class="p1 fl">24H成交额：</p>
                        <p class="rank fr">排名:NO{{bitInfo.ranking}}</p>
                    </div>
                    <div class="bot">
                        <p class="price">¥{{bitInfo.turnoverCNY | numFmt}}</p>
                        <p class="us">约${{bitInfo.turnoverUSD | numFmt}}</p>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="title">行情</div>
                <table class="market">
                    <tr>
                        <th>名称</th>
                        <th>交易对</th>
                        <th>价格</th>
                        <th>成交量</th>
                        <th>成交额</th>
                        <th>涨跌幅</th>
                    </tr>
                    <tr v-for="item in list" :key="item.kindCode">
                        <td class="name">{{item.kindName != '' ? item.kindName : item.kindCode.split('/')[0]}}</td>
                        <td>{{item.kindCode}}</td>
                        <td>￥{{item.legalTendeCNY | numFmt}}</td>
                        <td>{{item.volume | numFmt}}{{item.kindCode.split('/')[1]}}</td>
                        <td>{{item.turnover | numFmt}}</td>
                        <td class="up" v-if="item.rose > 0">+{{item.rose | numFmt2}}</td>
                        <td v-if="item.rose == 0">0.0</td>
                        <td class="down" v-if="item.rose < 0">-{{Math.abs(item.rose) | numFmt2}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <a href="javascript:;" class="to-top" id="toTop" @click="scrollToTop"></a>
    </div>
</template>

<script>
import headPc from './../components/head-pc'
import { Toast, Indicator } from 'mint-ui'
import { baseUrl } from './../api/baseUrl'
import { setTitle } from './../utils/setTitle'

export default {
    data() {
        return {
            list: [],
            bitInfo: {},
            code: '',
            title: '',
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
        }
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
        dlIOS() {
            window.open('itms-services:///?action=download-manifest&url=https://dl.bitane.io/bitane.plist')
        },
        dlAndroid() {
            window.open('http://dl.bitane.io/bitane.apk')
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
            Indicator.open('加载中...');
            this.getExInfo();
            this.getList();
        }

        document.documentElement.style.fontSize = "100px";
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
            this.$router.push({ path: '/m_market/'+ this.code });
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
    components: {
        headPc
    }
}
</script>

<style>
@import url(./../assets/css/base.css);
@import url(./../assets/css/market-pc.css);
</style>
