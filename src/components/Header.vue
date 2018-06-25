<!--  -->
<template>
  <el-row>
    <el-col :xs="8" :sm="8" :md="12" :lg="14" :xl="16">
      <div class="header-left">
        <span>上海恒义</span>
        <el-button size="mini" style="padding:0">cn</el-button>
      </div>
    </el-col>
    <el-col :xs="16" :sm="16" :md="12" :lg="10" :xl="8">
      <div class="height-right">
        <el-tabs :tab-position="tabPosition">
          <el-tab-pane label="首页"></el-tab-pane>
          <el-tab-pane label="公司介绍"></el-tab-pane>
          <el-tab-pane label="产品类型"></el-tab-pane>
          <el-tab-pane label="联系我们"></el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'top'
    };
  },
  methods: {
  }
}

</script>
<style lang='less' scoped>
@height:"88px";
 @media screen and (max-width:320px){
    @height:"30px";
}
.header {
  height: @height;
  // line-height: 88px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  vertical-align: middle;
}
.header-left{
  text-align: left;
  line-height: 44px;
  vertical-align: middle;
  
  >span{
    padding-left: 5%;
    font-size: 12px;
  }
}
.height-right{
  height: 88px;
   vertical-align: middle;
}
</style>