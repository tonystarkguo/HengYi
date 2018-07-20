<!--  -->
<template>
<div>
    <div class="footer" :style="{backgroundImage:BackImg}">
    <!-- <el-col :xs="24" :sm="24" :md="10" :lg="16" :xl="16" :push="0"> -->
      <img :src="logoImg" alt="">
      <p>{{$t("m.FootText")}}</p>
      <p><span>{{ $t("m.Inter")}}</span><a href="https://hengyipackaging.en.alibaba.com ">https://hengyipackaging.en.alibaba.com </a></p>
      <p><span>{{ $t("m.alista")}}</span><a href="https://shop37918a2288047.1688.com/ ">https://shop37918a2288047.1688.com/</a></p>      
      <p class="end"> Copyright ©2016-2020 | {{$t("m.Company")}} | <a href="http://www.miitbeian.gov.cn" target="_blank" style="color:#A7A9AB">沪ICP备15008437号-6 </a> </p>
    <!-- </el-col> -->
    
  </div>
</div>

</template>

<script>
import logo from '../assets/logo.png';
import back_foot from '../assets/black_foot.png';
export default {
  data () {
    return {
      logoImg:logo,
      BackImg:back_foot,
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='less' scoped>
.footer{
  background-image: url('../assets/black_foot.png');
   background-repeat: no-repeat;
   background-origin: border-box;
   background-size: 100% 100%;
   background-position: center center;
   height: 15rem;
  //  line-height: 15rem;
   width: 100%;
   color: #A7A9AB;
   font-size: 14px;
   text-align: center;
}
img{
  margin-top: 1.5rem;
  margin-bottom: 1.1rem;
}
a{
  color: #7BC9ED;
}
p{
  width: 80%;
  margin: auto;
}
.end{
  line-height: 3rem;
  background-color: #181818;
   width: 100%;
}
@media screen and (max-width: 768px){
  .footer{
    height: 19rem;
  }
}
@media screen and (max-width: 375px){
  .footer{
    height: 26rem;
  }
}
@media screen and (max-width: 320px){
  .footer{
    height: 33rem;
  }
}
</style>