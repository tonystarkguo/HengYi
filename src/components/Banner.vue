<!--  -->
<template>
  <div class="banner" :style="{backgroundImage:bgImg}">
     <el-col :xs="1" :sm="1" :md="20" :lg="18" :xl="18"class="hidden-sm-only hidden-sm-and-down konwmore">
       <div class="info">
        <el-col  :offset="1":xs="10" :sm="10" :md="10" :lg="9" :xl="8">
          <div class="grid-content bdblue lianxi">
            <p >{{$t("m.KnowMore")}}</p>
            <el-input  :placeholder="$t('m.KnowMore')"  v-model="input10"  max='11'  clearable class="bdblue tell-phone"></el-input>
            <div class="bgW"></div>
          </div>
        </el-col>
      <el-col :xs="6" :sm="6" :md="5" :lg="5" :xl="4">
        <div class="grid-content bg-purple-light r-sure-help">
          <div  @click="submitValue">
              <p class="moreKnow">{{$t("m.Determine")}}</p>
              <i></i>
              <p >{{$t("m.GetHelp")}} <img :src="blackArroe" alt=""></p>
          </div>
              
        </div>
      </el-col>
      </div>
     </el-col>
         <div class="total" v-if="showSuccess"><img :src="successImgUrl" alt=""><div>{{$t("m.Submissionofsuccess")}}</div></div>
  </div>

</template>

<script>
import bg from '../assets/banner.png';
import black_arrow from '../assets/black_arrow@2x.png';
import 'element-ui/lib/theme-chalk/display.css';
import  '../css/common.css'
import api from '../getserver/aip.js'
import Success from '../assets/success@2x.png';
export default {
  data () {
    return {
      input10:"",
      blackArroe:black_arrow,
      bgImg:bg,
      successImgUrl:Success,
      showSuccess:false,
    };
  },
  created () {
    const headerHeight=$(".header-list").height();
  $(".banner").css({"margin-top":headerHeight});
  },
  methods: {
    submitValue(){
           const self=this;
       const  myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if(this.input10!=""&&this.input10.length>=11){
          const obj={contact:this.input10,name:"",content:""};
          api.postContent(obj).then((res)=>{
              if(res.success){
                  self.showSuccess=true;
                  const time= setTimeout(() => {
                      self.showSuccess=false;
                      clearTimeout(time)
                    }, 3000);
                    self.input10="";
              }
          });
        }else{
          this.$message.error('请填写手机号码');
        }
        
      },
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
      cursor: pointer;
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
    div{
      color: #1A1A1A;
      cursor: pointer;
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
  .total{
  position:absolute;
  left: 42%;
  bottom: 10%;
  background-color: #43B7E8;
  color: #ffffff;
  width: 16%;
  height: 12rem;
  border-radius: 1rem;
  z-index: 5;
  img{
    width: 30%;
    margin-top:18%;
  }
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