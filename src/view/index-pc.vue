<template>
    <div class="container">
        <div class="head-wrapper">
            <div class="head">
                <div class="left fl">
                    <div class="logo-box">
                        <img src="./../../static/img/logo.png" alt="logo" class="fl">
                        <div class="logo-txt fl">
                            <p class="cn">币探</p>
                            <p class="en">Bitane</p>
                        </div>
                    </div>
                    <div class="txt">数字资产，全网行情触手可及</div>
                </div>
                <div class="right fr">
                    <a href="javascript:;" class="down" @click="dlIOS">
                        <img src="./../../static/img/ios.png" alt="币探ios下载">
                        <span>iOS 下载</span>
                    </a>
                    <a href="javascript:;" class="down" @click="dlAndroid">
                        <img src="./../../static/img/Android.png" alt="币探android下载">
                        <span>Android 下载</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="ex-info">
                <div class="left fl">
                    <div class="ex-logo fl">
                        <img src="./../../static/img/binance.png" alt="币安网logo">
                    </div>
                    <div class="info fl">
                        <p class="name">币安网(Binance)</p>
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
import { Toast, Indicator } from 'mint-ui'
import { baseUrl } from './../api/baseUrl'

export default {
    data() {
        return {
            list: [],
            bitInfo: {}
        }
    },
    methods: {
        getList() {
            this.$axios.get(`${baseUrl}/market/market-rest/exchange-market-info`, {
                params: { exchangeCode: "binance" }
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
        }
    },
    mounted() {
        Indicator.open('加载中...');
        this.getExInfo();
        this.getList();

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
            this.$router.push({ path: '/' });
            window.location.reload();
        }
    }
}
</script>

<style>
@import url(./../../static/css/base.css);
@import url(./../../static/css/index-pc.css);
</style>
