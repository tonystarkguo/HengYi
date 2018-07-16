<!--  -->
<template>
<div>
    <div class="footer" :style="{backgroundImage:BackImg}">
    <!-- <el-col :xs="24" :sm="24" :md="10" :lg="16" :xl="16" :push="0"> -->
      <img :src="logoImg" alt="">
      <p>恒义始终坚持以质量为生命、时间为信誉、价格为主要竞争力的经营信念。目前我们正与中国最大的专门从事儿童产品的上市集团公司合作，为广大用户提供优质的产品和服务，携手共创美好未来。我们将一如既往地追求卓越品质，愿我们真诚地欢迎国内外的客户和朋友与我们联系，寻求合作共赢！</p>
      <p><span>1688国际站了解详情</span><a href="http://https://hengyipackaging.en.alibaba.com ">https://hengyipackaging.en.alibaba.com </a></p>
      <p><span>阿里巴巴站了解详情</span><a href="http://https://hengyipackaging.en.alibaba.com ">https://hengyipackaging.en.alibaba.com </a></p>      
      <p class="end">Copyright ©2016-2020 | 上海恒义包装材料有限公司 | 沪ICP备1234567号-1</p>
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