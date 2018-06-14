<template>
  <div class="container">
      <head-pc to="about"></head-pc>
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
        <p class="bigtxt">Bitane</p>
      </div>
  </div>
</template>

<script>
import headPc from './../components/head-pc';
export default {
  data() {
    return {

    }
  },
  components: {
    headPc
  }
}
</script>

<style scoped>
@import url(./../assets/css/base.css);
.a-body{
  background: #108EE9;
  color: #fff;
}
.a-wrapper{
  width: 935px;
  margin: 0 auto;
}
.txt-box{
  margin-bottom: 50px;
}
.title{
  font-size: 40px;
  margin-bottom: 10px;
}
.txt{
  font-size: 24px;
  text-align: justify;
}
.bigtxt{
  width: 1000px;
  font-size: 288px;
  color: rgba(63,166,240,0.78);
  letter-spacing: 26.35px;
  margin: 0 auto;
}
</style>
