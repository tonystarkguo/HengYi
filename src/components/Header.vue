<!--  -->
<template>
  <el-row>
    <el-col :xs="8" :sm="4" :md="4" :lg="10" :xl="8">
      <div class="header-left">
        <span>上海恒义</span>
        <el-button size="mini" style="padding:0">cn</el-button>
      </div>
    </el-col>
    <el-col :xs="16" :sm="20" :md="20" :lg="14" :xl="16" class="hidden-xs-only">
      <div class="height-right">
        <ul class="nav-list">
          <li><a href="javascript:void(0)">首页</a></li>
          <li><a href="javascript:void(0)">公司介绍</a></li>
          <li><a href="javascript:void(0)">产品类型</a></li>
          <li><a href="javascript:void(0)">联系我们</a></li>
        </ul>
      </div>
    </el-col>
    <el-col :xs="16" :sm="16" :pull="1" class="hidden-sm-and-up">
      <div class="nav-list-mobile hidden-sm-and-up">
        <i class="el-icon-menu" @click="showMenu"></i>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" class="hidden-sm-and-up"  v-if="showMobileMenu" >
        <ul class="hidden-sm-and-up nav-list-mobileNav">
          <li><a href="javascript:void(0)">首页12</a></li>
          <li><a href="javascript:void(0)">公司介绍</a></li>
          <li><a href="javascript:void(0)">产品类型</a></li>
          <li><a href="javascript:void(0)">联系我们</a></li>
        </ul>
    </el-col>
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
      this.showMobileMenu=!this.showMobileMenu
    }
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
          border-bottom: 1px solid black;
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
    li{
      height: @heightLeft*0.2;
      line-height:  @heightLeft*0.2;
      border-top:1px solid black; 
    }
    a{
      // font-size: 15px;
    }
    
  }
}

@media screen and (max-width:768px) {
  .headerLeft(77px);
 }
@media (min-width:769px) and (max-width:992px) {
  .headerLeft(88px);
 }
@media (min-width:992px) and (max-width:1200px) {
  .headerLeft(88px);
 }
@media (min-width:1201px) and (max-width:1920px){
  .headerLeft(88px);
 }
@media (min-width:1921px){
  .headerLeft(100px);
 }
</style>