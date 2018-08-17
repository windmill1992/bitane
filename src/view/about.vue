<template>
  <div class="container">
      <m-head to="about"></m-head>
      <div class="a-body-m">
        <div class="a-wrapper">
            <div class="txt-box">
              <p class="title">About Bitane</p>
              <p class="txt">Bitane (www.bitane.io) is a service platform which focuses on delivering blockchain market information. It was founded by a group of experienced experts in the industry. It managed to have angel investments from a number of industry leaders. Bitane provides services including real-time market overview, professional candlestick charting, accurate data analysis, and global news and detail comments.</p>
            </div>
            <div class="txt-box">
              <p class="title">Our Mission</p>
              <p class="txt">We believe in the core idea of the Bitcoin and blockchain that the decentralized ledger and smart contract technologies will build up the foundation of human trust, eliminate trade barriers, improve transaction efficiency and have a significant impact on the real economy. We want to be the explorer to the value of blockchain!</p>
            </div>
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
  mounted() {
    let ww = document.documentElement.clientWidth;
    ww = ww >= 768 ? ww / 2 : ww;
    document.documentElement.style.fontSize = ww / 375 * 100 + "px";
    window.onresize = function() {
        document.documentElement.style.fontSize = ww / 375 * 100 + "px";
    };
    let isMobile = /Android|WebOS|iPhone|iPod|BlackBerry|iPad|pad|pod|phone|ios|Mobile|IEMobile|MQQBrowser|BrowserNG|Symbian/i.test(navigator.userAgent);
    if(isMobile){
      document.getElementById('app').style.minWidth = 'none';
    }else{
        this.$router.push({ path: '/about' });
        window.location.reload();
    }
  },
  components: {
    'm-head': head
  }
}
</script>

<style scoped>
.container, .a-body-m{
    height: 100%;
    font-size: .14rem;
}
.a-body-m {
  background: #108EE9;
  color: #fff;
  padding-top: .45rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}
.a-body-m .a-wrapper{
  padding: .15rem
}
.a-body-m .a-wrapper .txt-box{
  margin-bottom: .4rem;
}
.a-body-m .a-wrapper .title{
  font-size: .22rem;
  margin-bottom: .1rem;
}
.a-body-m .a-wrapper .txt{
  font-size: .14rem;
  text-align: justify;
}
.a-body-m .bigtxt{
  width: 100%;
  font-size: 1.25rem;
  color: rgba(63,166,240,0.78);
  letter-spacing: .1rem;
  line-height: 1;
  overflow: hidden;
  position: absolute;
  bottom: -.3rem;
  left: 0;
}
.a-body-m .bigtxt span{
  position: relative;
  left: -.18rem;
}
</style>
