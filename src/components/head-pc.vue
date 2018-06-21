<template>
    <div class="head-wrapper pc">
        <div class="head">
            <div class="left fl">
                <div class="logo-box">
                    <img src="./../assets/img/logo.png" alt="logo" class="fl">
                    <div class="logo-txt fl">
                        <p class="en">Bitane</p>
                    </div>
                </div>
            </div>
            <div class="left fl">
                <router-link :to="{ path: '/index' }" class="nav">HOME</router-link>
                <div :class="{ on: (to == 'home') }"></div>
            </div>
            <div class="left fl">
                <div class="nav down" :class="{ up: showEx }" @click.prevent.stop="showExchange" @mouseenter="showExchange">MARKET</div>
                <div :class="{ on: (to == 'market') }"></div>
                <div class="ex-list" :class="{show: showEx}" @mouseleave="hideExchange">
                    <router-link :to="{ name: 'MarketPc', params: { code: 'huobi.pro', title: '火币Pro' } }" class="ex-nav" :class="{active: code == 'huobi.pro'}">火币PRO</router-link>
                    <router-link :to="{ name: 'MarketPc', params: { code: 'okex', title: 'OKEx' } }" class="ex-nav" :class="{active: code == 'okex'}">OKEX</router-link>
                    <router-link :to="{ name: 'MarketPc', params: { code: 'binance', title: '币安网' } }" class="ex-nav" :class="{active: code == 'binance'}">币安网</router-link>
                    <router-link :to="{ name: 'MarketPc', params: { code: 'bitfinex', title: 'Bitfinex' } }" class="ex-nav" :class="{active: code == 'bitfinex'}">Bitfinex</router-link>
                    <router-link :to="{ name: 'MarketPc', params: { code: 'bittrex', title: 'Bittrex' } }" class="ex-nav" :class="{active: code == 'bittrex'}">Bittrex</router-link>
                    <router-link :to="{ name: 'MarketPc', params: { code: 'bitstamp', title: 'Bitstamp' } }" class="ex-nav" :class="{active: code == 'bitstamp'}">Bitstamp</router-link>
                </div>
            </div>
            <div class="left fl">
                <router-link :to="{ path: '/about' }" class="nav">ABOUT US</router-link>
                <div :class="{ on: (to == 'about') }"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "to", "code"
    ],
    data() {
        return {
            showEx: false
        }
    },
    methods: {
        showExchange() {
            this.showEx = true;
        },
        hideExchange() {
            this.showEx = false;
        }
    },
    mounted() {
        let that = this;
        document.body.onclick = function() {
            that.showEx = false;
        }

        let w = document.documentElement.clientWidth;
        if(w < 1400){
            let pc = document.getElementsByClassName('pc')[0];
            pc.getElementsByClassName('head')[0].style.width = '1200px';
        }
    }
}
</script>

<style scoped>
.head-wrapper.pc{
    width: 100%;
    height: 160px;
    background: #108EE9;
}
.pc .head{
    margin: 0 auto;
    height: 160px;
    min-width: 1200px;
    max-width: 1370px;
}
.pc .head .left{
    height: 60px;
    line-height: 60px;
    margin-right: 100px;
    margin-top: 50px;
    position: relative;
}
.pc .head .logo-box{
    position: relative;
    left: -15px;
    overflow: hidden;
}
.pc .head .logo-box img{
    width: 60px;
    height: 60px;
    position: relative;
    top: 3px;
}
.pc .head .logo-box .logo-txt{
    color: #fff;
}
.pc .head .logo-box .en{
    font-size: 20px;
}
.pc .head .nav{
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    position: relative;
}
.pc .head .nav.down::after{
    content: '';
    display: inline-block;
    width: 19px;
    height: 10px;
    background: url(./../assets/img/down@3x.png) no-repeat 0 0 / 100% 100%;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    -ms-transition: all .4s ease;
    transition: all .4s ease;
    position: absolute;
    right: -25px;
    top: 25px;
}
.pc .head .nav.down.up::after{
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}
.pc .head .left .on{
    width: 56px;
    height: 3px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
    background: #fff;
}
.pc .ex-list{
    position: absolute;
    width: 108px;
    left: 0;
    top: 70px;
    display: none;
}
.pc .ex-list.show{
    -webkit-animation: fadeIn .4s ease;
    -moz-animation: fadeIn .4s ease;
    -ms-animation: fadeIn .4s ease;
    animation: fadeIn .4s ease;
}
.pc .ex-list .ex-nav{
    display: block;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    background: #66BFFF;
    text-align: center;
}
.pc .ex-list .ex-nav:hover{
    background: #111210;
}
.pc .ex-list .ex-nav.active{
    background: #111210;
    position: relative;
}
.pc .ex-list .ex-nav.active::after{
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url(./../assets/img/point@3x.png) no-repeat 0 0 / 100% 100%;
    position: absolute;
    right: 10px;
    top: 15px;
}
@-webkit-keyframes fadeIn{
    0%{
        opacity: 0;
        height: 0;
    }
    50%{
        opacity: 0.5;
        height: 120px;
    }
    100%{
        opacity: 1;
        height: 240px;
    }
}
@-moz-keyframes fadeIn{
    0%{
        opacity: 0;
        height: 0;
    }
    50%{
        opacity: 0.5;
        height: 120px;
    }
    100%{
        opacity: 1;
        height: 240px;
    }
}
@keyframes fadeIn{
    0%{
        opacity: 0;
        height: 0;
    }
    50%{
        opacity: 0.5;
        height: 120px;
    }
    100%{
        opacity: 1;
        height: 240px;
    }
}
</style>
