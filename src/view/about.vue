<template>
  <div class="container">
      <m-head to="about"></m-head>
      <div class="a-body">
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
    document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 375 * 100 + "px";
    window.onresize = function() {
    document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 375 * 100 + "px";
    };
    let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    if(isMobile){

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

<style>
#app, .container, .a-body{
    height: 100%;
}
.a-body{
  background: #108EE9;
  color: #fff;
  padding-top: .45rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.a-wrapper{
  padding: .15rem
}
.a-wrapper .txt-box{
  margin-bottom: .4rem;
}
.a-wrapper .title{
  font-size: .22rem;
  margin-bottom: .1rem;
}
.a-wrapper .txt{
  font-size: .14rem;
  text-align: justify;
}
.a-body .bigtxt{
  width: 100%;
  font-size: 1.25rem;
  color: rgba(63,166,240,0.78);
  letter-spacing: .1rem;
  margin: 0 auto;
  line-height: 1;
  margin-top: .2rem;
  overflow: hidden;
}
.a-body .bigtxt span{
  position: relative;
  left: -.18rem;
}
</style>
