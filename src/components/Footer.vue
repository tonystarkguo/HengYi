<!--  -->
<template>
  <div class="footer">
    <img :src="logoImg" alt="">
      <p>上海恒义包装材料有限公司</p>
      <p>上海恒义包装材料有限公司是国内领先的包装材料公司，</p>
      <p>Copyright ©2016-2020 上海恒义包装材料有限公司 沪ICP备1234567号-1</p>
  </div>
</template>

<script>
import logo from '../assets/logo.png';
export default {
  data () {
    return {
      logoImg:logo,
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
   height: 200px;
   width: 100%;
   color: #A7A9AB;
}
</style>