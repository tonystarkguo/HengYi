<!--  -->
<template>
  <el-row class="header-list">
    <el-col :xs="8" :sm="4" :md="4" :lg="10" :xl="8">
      <div class="header-left">
        <span>上海恒义</span>
        <el-button size="mini" style="padding:0">cn</el-button>
      </div>
    </el-col>
    <el-col :xs="16" :sm="20" :md="20" :lg="14" :xl="16" class="hidden-xs-only">
      <div class="height-right">
        <ul class="nav-list">
          <li><a href="javascript:void(0)" @click="navChange(0)" style="border-bottom:2px solid black">首页</a></li>
          <li><a href="javascript:void(0)" @click="navChange(1)">公司介绍</a></li>
          <li><a href="https://hengyipackaging.en.alibaba.com" target=" _blank">产品类型</a></li>
          <li><a href="javascript:void(0)" @click="navChange(3)">联系我们</a></li>
        </ul>
      </div>
    </el-col>
    <el-col :xs="16" :sm="16" :pull="1" class="hidden-sm-and-up">
      <div class="nav-list-mobile hidden-sm-and-up">
        <i class="el-icon-menu" @click="showMenu"></i>
      </div>
    </el-col>
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated  fadeOut">
        <el-col :xs="24" :sm="24" class="hidden-sm-and-up"  v-if="showMobileMenu" >
            <ul class="hidden-sm-and-up nav-list-mobileNav">
              <li><a href="javascript:void(0)"  @click="navChange(0)">首页12</a></li>
              <li><a href="javascript:void(0)"  @click="navChange(1)">公司介绍</a></li>
              <li><a href="javascript:void(0)">产品类型</a></li>
              <li><a href="javascript:void(0)"  @click="navChange(3)">联系我们</a></li>
            </ul>
        </el-col>
    </transition>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'top',
      showMobileMenu:false,
    };
  },
  methods: {
    showMenu(){
      this.showMobileMenu=!this.showMobileMenu;

    },
    navChange(index){
        console.log(index);
        const $this=$(".nav-list a");
        $this.css({"border-bottom": "none"}).eq(index).css({"border-bottom": "2px solid black"});
        let scrooltop=0;
        switch (index) {
          case 1:
           scrooltop=$(".commpany").offset().top-$(".header-left").height();
            break;
          case 3:
            scrooltop=$(".content-we").offset().top;
            break;
          default:
          scrooltop=0;
            break;
        };
        console.log( $(".commpany").offset().top,$(".header-left").height())
        $("html,body").animate({scrollTop:scrooltop},800);
         this.showMobileMenu=false;
    },
  }
}

</script>
<style lang='less' scoped>

.headerLeft(@heightLeft){
  
  .header-left{
     text-align: left;
    line-height: @heightLeft*0.88;
    vertical-align: middle;
    >span{
      padding-left: 5%;
      font-size: 12px;
    }
  }
  .nav-list{
      li{
          display: inline-block;
          height: @heightLeft*0.88;
          line-height: @heightLeft*0.88;
          margin-right: @heightLeft*0.80;
          text-align: center;
        }
        a{
          display:inline-block;
          height: @heightLeft*0.88/2;
          line-height: @heightLeft*0.88/2;
          width: @heightLeft*0.75;
          font-size: 15px;
        }
    }
   .height-right{
    height: @heightLeft*0.88;
    vertical-align: middle;
    text-align: right;
  }
  .nav-list-mobile{
    height:@heightLeft;
    line-height: @heightLeft;
    float: right;
  }
  .nav-list-mobileNav{
    position:fixed;
    width: 100%;
    background-color: #fff;
    li{
      height: @heightLeft*0.5;
      line-height:  @heightLeft*0.5;
      border-bottom:1px solid black; 
    }
    >:first-child{
      border-top:1px solid black; 
    }
    a{
      // font-size: 15px;
    }
    
  }
}

@media screen and (max-width:767px) {
  .headerLeft(5rem);
 }
@media (min-width:768px) and (max-width:992px) {
  .headerLeft(88PX);
 }
@media (min-width:992px) and (max-width:1200px) {
  .headerLeft(100px);
 }
@media (min-width:1201px) and (max-width:1920px){
  .headerLeft(100px);
 }
@media (min-width:1921px){
  .headerLeft(100px);
 }

 .header-list{
   position: fixed;
   top:0;
   left: 0;
   width: 100%;
   z-index: 20;
   background-color: #fff;
 }
</style>