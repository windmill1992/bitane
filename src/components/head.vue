<template>
    <div class="head-wrapper h5">
        <div class="head flex spb">
            <div class="item">
                <div class="box flex">
                    <router-link :to="{ path: '/m_index' }" class="nav">HOME</router-link>
                    <div :class="{ on: (to == 'home') }"></div>
                </div>
            </div>
            <div class="item flex spc">
                <div class="box">
                    <div class="nav down flex fcen" :class="{ up: showEx }" @click.prevent.stop="showExchange">MARKET</div>
                    <div :class="{ on: (to == 'market') }"></div>
                </div>
                <div class="ex-list" :class="{show: showEx}">
                    <router-link :to="{ name: 'Market', params: { code: 'huobi.pro', title: '火币Pro' } }" class="ex-nav" :class="{active: code == 'huobi.pro'}">火币PRO</router-link>
                    <router-link :to="{ name: 'Market', params: { code: 'okex', title: 'OKEx' } }" class="ex-nav" :class="{active: code == 'okex'}">OKEX</router-link>
                    <router-link :to="{ name: 'Market', params: { code: 'binance', title: '币安网' } }" class="ex-nav" :class="{active: code == 'binance'}">币安网</router-link>
                    <router-link :to="{ name: 'Market', params: { code: 'bitfinex', title: 'Bitfinex' } }" class="ex-nav" :class="{active: code == 'bitfinex'}">Bitfinex</router-link>
                    <router-link :to="{ name: 'Market', params: { code: 'bittrex', title: 'Bittrex' } }" class="ex-nav" :class="{active: code == 'bittrex'}">Bittrex</router-link>
                    <router-link :to="{ name: 'Market', params: { code: 'bitstamp', title: 'Bitstamp' } }" class="ex-nav" :class="{active: code == 'bitstamp'}">Bitstamp</router-link>
                </div>
            </div>
            <div class="item flex fend">
                <div class="box">
                    <router-link :to="{ path: '/m_about' }" class="nav">ABOUT US</router-link>
                    <div :class="{ on: (to == 'about') }"></div>
                </div>
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
            this.showEx = !this.showEx;
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
    }
}
</script>

<style scoped>
.head-wrapper.h5{
    width: 100%;
    height: .45rem;
    background: #108EE9;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}
.h5 .head{
    margin: 0 auto;
    height: .45rem;
    width: 100%;
    padding: 0 .15rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.h5 .head .item{
    width: 33.33%;
    height: .45rem;
    line-height: .45rem;
    position: relative;
}
.h5 .head .item .box{
    display: inline-block;
    height: .45rem;
    position: relative;
}
.h5 .head .nav{
    font-size: .14rem;
    color: #fff;
    cursor: pointer;
}
.h5 .head .nav.down::after{
    content: '';
    display: inline-block;
    width: .12rem;
    height: .063rem;
    background: url(./../assets/img/down@3x.png) no-repeat 0 0 / 100% 100%;
    margin-left: 10px;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    -ms-transition: all .4s ease;
    transition: all .4s ease;
}
.h5 .head .nav.down.up::after{
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}
.h5 .head .item .on{
    width: 40px;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
    background: #fff;
    border-radius: 2px;
}
.h5 .ex-list{
    position: fixed;
    width: 100%;
    left: 0;
    top: .5rem;
    display: none;
    z-index: 99;
}
.h5 .ex-list.show{
    -webkit-animation: fadeIn .4s ease;
    -moz-animation: fadeIn .4s ease;
    -ms-animation: fadeIn .4s ease;
    animation: fadeIn .4s ease;
}
.h5 .ex-list .ex-nav{
    float: left;
    display: block;
    width: 33.33%;
    height: .5rem;
    line-height: .5rem;
    color: #fff;
    font-size: .14rem;
    background: #66BFFF;
    text-align: center;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, .05);
}
.h5 .ex-list .ex-nav.active{
    background: #111210;
    position: relative;
}
.h5 .ex-list .ex-nav.active::after{
    content: '';
    display: inline-block;
    width: .1rem;
    height: .1rem;
    background: url(./../assets/img/point@3x.png) no-repeat 0 0 / 100% 100%;
    position: absolute;
    right: 10px;
    top: .2rem;
}
@-webkit-keyframes fadeIn{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
}
@-moz-keyframes fadeIn{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
}
@keyframes fadeIn{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
}
</style>
