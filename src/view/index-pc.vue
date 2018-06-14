<template>
    <div class="container">
        <head-pc></head-pc>
        <div class="body">
            
        </div>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
import { baseUrl } from './../api/baseUrl'
import headPc from './../components/head-pc'

export default {
    data() {
        return {
            list: [],
            bitInfo: {}
        }
    },
    methods: {
        
    },
    mounted() {
        let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
        if(isMobile){
            this.$router.push({ path: '/' });
            window.location.reload();
        }
    },
    components: {
        headPc
    }
}
</script>

<style>
@import url(./../assets/css/base.css);
@import url(./../assets/css/index-pc.css);
</style>
