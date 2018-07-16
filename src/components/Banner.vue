<!--  -->
<template>
  <div class="banner">
     <el-col :xs="1" :sm="1" :md="20" :lg="18" :xl="18"class="hidden-sm-only hidden-sm-and-down konwmore">
       <div class="info">
      <el-col  :offset="1":xs="10" :sm="10" :md="10" :lg="9" :xl="8">
        <div class="grid-content bdblue lianxi">
          <p >想了解更多，24小时内与您联系</p>
          <el-input  placeholder="请输入您的联系方式"  v-model="input10"  max='11'  clearable class="bdblue tell-phone"></el-input>
          <div class="bgW"></div>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :md="5" :lg="5" :xl="4">
        <div class="grid-content bg-purple-light r-sure-help">
            <a href="javascript::void(0)">
              <p class="moreKnow">确定</p>
              <i></i>
              <p>获得帮助与建议 <img :src="blackArroe" alt=""></p>
            </a>
        </div>
      </el-col>
    </div>
     </el-col>
    
  </div>
</template>

<script>
import bg from '../assets/banner.png';
import black_arrow from '../assets/black_arrow@2x.png';
import 'element-ui/lib/theme-chalk/display.css';
import  '../css/common.css'
export default {
  data () {
    return {
      input10:"",
      blackArroe:black_arrow,
    };
  },
  created () {
    const headerHeight=$(".header-list").height();
  $(".banner").css({"margin-top":headerHeight});
  }
}
window.onresize = function(){
  const headerHeight=$(".header-list").height();
  $(".banner").css({"margin-top":headerHeight});
}
</script>
<style lang='less' scoped>
 .bannerFu(@width){
   .moreKnow{
      height: 2rem;
    }
  .banner{
      width: 96%;
      margin-left: 4%;
      height:@width;
      background-image: url('../assets/banner.png');
      background-repeat: no-repeat;
      background-origin: border-box;
      background-size: cover;
      position: relative;
      margin-top: 5rem;
  }
  .info{
    position: absolute;
    width: 70%;
    bottom:4.6rem;
    input{
      background-color: #43B7E8;
    }
  }
  .bgW{
    background-color: #ffffff;
    height:1px;
    width: 80%;
    margin-left: 1.95rem;
  }
  .bdblue{
    background-color: #43B7E8;
    color: #ffffff;
  }
  .lianxi{
    font-size: 0.8rem;
    height: 5.3rem;
    padding-bottom: 0.9rem;
    height: 5.3rem;
    >p{
      text-align: left;
      padding-left:1.95rem;
      padding-top: 1.2rem;
      padding-bottom: 0.8rem;
    }
  }
  .r-sure-help{
    background-color: #D5DFE8;
    height: 6.2rem;
    a{
      color: #1A1A1A;
      >p:first-child{
        padding-top: 1rem;
        padding-left: 0.8rem;
        text-align: left;
        font-size: 0.9rem;
      }
      i{
        display: block;
        height: 2px;
        width: 3.5rem;
        margin: 0.55rem 0 0.75rem 0.75rem;
        background-color: #1A1A1A;
      }
      >p:last-child{
      text-align: left;
      font-size: 0.8rem;
      vertical-align: middle;
      padding-left: 0.8rem;
      img{
        vertical-align: middle;
      }
      }
    }
  }

  ///
  .konwmore{
    position:relative;
    height: 100%;
  }

  /*  */
 }

@media screen and (max-width:767px) {
  .bannerFu(10rem);
 }
@media (min-width:768px) and (max-width:992px) {
  .bannerFu(28rem);
 }
@media (min-width:992px) and (max-width:1200px) {
  .bannerFu(31rem);
 }
@media (min-width:1201px) and (max-width:1920px){
  .bannerFu(33rem);
 }
@media (min-width:1921px){
  .bannerFu(33rem);
 }
</style>