<template>
    <div class="head-wrapper">
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
                <div class="nav" @click.prevent.stop="showExchange">MARKET</div>
                <div :class="{ on: (to == 'market') }"></div>
                <div class="ex-list" :class="{show: showEx}">
                    <router-link :to="{ path: '/market/1' }" class="ex-nav">火币PRO</router-link>
                    <router-link :to="{ path: '/market/' }" class="ex-nav active">OKEX</router-link>
                    <router-link :to="{ path: '/market/' }" class="ex-nav">币安网</router-link>
                    <router-link :to="{ path: '/market/' }" class="ex-nav">Bitfinex</router-link>
                    <router-link :to="{ path: '/market/' }" class="ex-nav">bittrex</router-link>
                    <router-link :to="{ path: '/market/' }" class="ex-nav">Bitstamp</router-link>
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
        "to" 
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
.head-wrapper{
    width: 100%;
    height: 160px;
    background: #108EE9;
}
.head{
    margin: 0 auto;
    height: 160px;
    width: 1200px;
}
.head .left{
    height: 60px;
    line-height: 60px;
    margin-right: 100px;
    margin-top: 50px;
    position: relative;
}
.head .logo-box{
    position: relative;
    left: -15px;
    overflow: hidden;
}
.head .logo-box img{
    width: 60px;
    height: 60px;
    position: relative;
    top: 3px;
}
.head .logo-box .logo-txt{
    color: #fff;
}
.head .logo-box .en{
    font-size: 20px;
}
.head .nav{
    font-size: 18px;
    color: #fff;
    cursor: pointer;
}
.head .left .on{
    width: 56px;
    height: 3px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
    background: #fff;
}
.ex-list{
    position: absolute;
    width: 108px;
    left: 0;
    top: 70px;
    display: none;
}
.ex-list.show{
    -webkit-animation: fadeIn .4s ease;
    -moz-animation: fadeIn .4s ease;
    -ms-animation: fadeIn .4s ease;
    animation: fadeIn .4s ease;
}
.ex-list .ex-nav{
    display: block;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    background: #66BFFF;
    text-align: center;
}
.ex-list .ex-nav:hover{
    background: #108EE9;
}
.ex-list .ex-nav.active{
    background: #108EE9;
}
@-webkit-keyframes fadeIn{
    0%{
        display: block;
        opacity: 0;
        height: 0;
    }
    50%{
        display: block;
        opacity: 0.5;
        height: 120px;
    }
    100%{
        display: none;
        opacity: 1;
        height: 240px;
    }
}
@-moz-keyframes fadeIn{
    0%{
        display: block;
        opacity: 0;
        height: 0;
    }
    50%{
        display: block;
        opacity: 0.5;
        height: 120px;
    }
    100%{
        display: none;
        opacity: 1;
        height: 240px;
    }
}
@keyframes fadeIn{
    0%{
        display: block;
        opacity: 0;
        height: 0;
    }
    50%{
        display: block;
        opacity: 0.5;
        height: 120px;
    }
    100%{
        display: none;
        opacity: 1;
        height: 240px;
    }
}
</style>
