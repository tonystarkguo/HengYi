<template>
  <div class="hello">
      <Header></Header>
      <Banner/>
      <div class="inter">
        <span><img :src="clientImgUrl" alt=""><div>{{$t("m.CustomerFirst")}}</div></span>
        <span><img :src="integrityImgUrl" alt=""><div>{{$t("m.QualityAssurance")}}</div></span>
        <span><img :src="jewelImgUrl" alt=""><div>{{$t("m.Honesty")}}</div></span>
      </div>
      <div class="commpany">
        <el-col :xs="24" :sm="12" :md="12" :lg="13" :xl="13" class="company-video">
          <div class="video-fa">
            <video id="video_all" src="//cloud.video.taobao.com/play/u/2153292369/p/1/e/6/t/10300/50137716747.mp4" controls = "true"  webkit-playsinline="true" playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint"style="object-fit:fill"></video>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="11" :xl="11" class="grid-content">
          <div class="bg-purple-light">
            <div class="commpany-info">
              <h2 class="bolue-border">{{$t("m.CompanyIntroduction")}}</h2><p>{{$t("m.CompanyText")}}</p>
              <el-button round class="Immediate-contact" @click="contentButton">{{$t("m.ImmediateContact")}}</el-button>
            </div>
          </div>
        </el-col>
      </div>
      <div class="product">
        <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
          <div class="productType">
            <h3 class="bolue-border product-type">{{$t("m.ProductType")}}</h3>
            <p>{{$t("m.productText")}}</p>
            <a :href="$t('m.httpValue')" target=" _blank">{{$t("m.goto1688")}} <img :src="rightArrow" alt=""></a>
            <!-- <a href="https://shop37918a2288047.1688.com/" target=" _blank">前往1688查看更多 <img :src="rightArrow" alt=""></a>          -->
          </div>
        </el-col>
        <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7" class="shadow-mask-fa">
          <div class="pro-m"></div>
          <div class="shadow-mask"></div>
          <p>{{$t("m.Reticule")}}</p>
        </el-col>
        <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7" class="shadow-mask-fa">
          <div class="pro-s"></div>
          <div class="shadow-mask"></div>
          <p>{{$t("m.GiftBox")}}</p>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="shadow-mask-fa">
           <div class="pro-o"></div>
           <div class="shadow-mask"></div>
          <p>{{$t("m.YellowBox")}}</p>
        </el-col>
         <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="shadow-mask-fa">
           <div class="pro-t"></div>
           <div class="shadow-mask"></div>
          <p>{{$t("m.GiftBoxPackaging")}}</p>
        </el-col>
         <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="shadow-mask-fa">
           <div class="pro-f"></div>
           <div class="shadow-mask"></div>
          <p>{{$t("m.PackagingAccessories")}}</p>
        </el-col>
      </div>
      <div class="product-w">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
           <div class="product-tit" > <h2  class="bolue-border">{{$t("m.productionEnvironment")}}</h2></div>
            <slider></slider>
        </el-col>
      </div>
      <!-- 电脑 -->
      <div class="content-we" >
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="content-left">
            <el-col  :xs="23" :sm="23":push="1" class="bolue-border contentUsTit">{{$t("m.ContactUs")}}</el-col >
             <el-col :xs="23" :sm="23":push="1" style="color:#999999 " class="contentUsTex">{{$t("m.SubmitYouREquest")}}</el-col>
              <el-col :xs="23" :sm="8" :md="8" :lg="8" :xl="8" :push="1">
                <p class="name-content">{{$t("m.YourName")}}</p>
                <input type="text" class="inPut-bg inpu-content" v-model="name">
              </el-col>
              <el-col :xs="23" :sm="10" :md="10" :lg="12" :xl="12" :push="1">
                <p  class="name-content">{{$t("m.YourWayContact")}}</p>
                <input type="text" class="inPut-bg inpu-content"  v-model="telNumber">
              </el-col>
                <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="14" :push="1">
                  <p class="name-content">{{$t("m.YouContent")}}</p>
                  <textarea class="inPut-bg el-col-lg-24 el-col-xl-20 el-col-xs-20 el-col-sm-20" name="" id=""  rows="5" placeholder="" v-model="textVal"></textarea>
                </el-col>
                <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23" :push="1">
                  <div class="btn-submit"><button class="btn-sub" @click="submitValue">{{$t("m.Submission")}}</button></div>
                </el-col>
                <div class="total" v-if="submitSusessText"><img :src="successImgUrl" alt=""><div>{{$t("m.Submissionofsuccess")}}</div></div>
          </div>
         </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
           <div class="contact">
              <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :push="2">
               <h3 class="contentUsWay-tit">{{$t("m.ourContact")}}</h3>
              </el-col>
              <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :push="2">
                  <p class="contentUsWay-p"><img :src="PositionImg" alt="">&nbsp;&nbsp; No.1255-1, Puwei Highway, Zhuanghang Town, Fengxian District, Shanghai China</p>
                  <p class="contentUsWay-p"><img :src="EmailImg" alt="">&nbsp;&nbsp; hengyibz@126.com</p>
                  <p class="contentUsWay-p"><img :src="PhoneImg" alt="">&nbsp;&nbsp; +86-17721227066 (Yvonne Nie)</p>
                  <p class="contentUsWay-p"><img :src="TelephoneImg" >&nbsp;&nbsp; 86-021-67182993</p>
                  <img :src="AddressImg" alt="地图" class="map">
              </el-col>
              
              
           </div>
        </el-col>
      </div>
    
      
      <footers></footers>
      
  </div>
</template>

<script>
import Header from './Header';
import Banner from './Banner';
import client from '../assets/client.png';
import integrity from '../assets/integrity.png';
import jewel from '../assets/jewel.png';
import right_arrow from '../assets/right_arrow.png';
import PositionI from '../assets/position.png';
import Email from '../assets/e_mail.png';
import Phone from '../assets/phone.png';
import Telephone from '../assets/telephone.png';
import Address from '../assets/address.png';
import Success from '../assets/success@2x.png';
import carousel from './Carousel.vue';
import Footers from './Footer.vue'
import Slider from './Slider.vue';
import api from '../getserver/aip.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      clientImgUrl:client,
      integrityImgUrl:integrity,
      jewelImgUrl:jewel,
      successImgUrl:Success,
      rightArrow:right_arrow,
      invTime: 2000,
      slides: [
                    {
                        src:require('../assets/product1.png'),
                        title:'xxx1', 
                    },
                    {
                        src:require('../assets/product2.png'),
                        title:'xxx2'
                    },
                    {
                        src:require('../assets/product3.png'),
                        title:'xxx3'
                    },
                    {
                        src:require('../assets/product4.png'),
                        title:'xxx4'
                    },
                    {
                        src:require('../assets/product5.png'),
                        title:'xxx4'
                    },
                    {
                        src:require('../assets/product4.png'),
                        title:'xxx4'
                    },
                    {
                        src:require('../assets/product3.png'),
                        title:'xxx4'
                    }
                ],
      labelPosition: 'top',
      formLabelAlign: {
          name: '',
          region: '',
          type: ''
      },
      contactImgList:[""],
      PositionImg:PositionI,
      EmailImg:Email,
      PhoneImg:Phone,
     TelephoneImg:Telephone,
     AddressImg:Address,
     name:"",
     telNumber:"",
     textVal:"",
     submitSusessText:false,
    }
  },
  components:{
      Header,
      Banner,
      carousel,
      Footers,
      Slider,
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      contentButton(){
       const scrooltop=$(".content-we").offset().top;
        $("html,body").animate({scrollTop:scrooltop},800);
      },
      submitValue(){
      const self=this;
       const  myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
       const myphone=/^\d{11,}$/
        if(this.telNumber!=""&&myphone.test(this.telNumber)){
          const obj={contact:this.telNumber,name:this.name,content:this.textVal};
           $.ajax({
              type: "post",  
              url: "http://www.hengyipack.com/mail/sendMail.do",
              data: JSON.stringify(obj),
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              success: function (result) {  
                if (result.success) {
                 self.submitSusessText=true;
                  const time= setTimeout(() => {
                      self.submitSusessText=false;
                      clearTimeout(time)
                    }, 3000);
                    self.telNumber="";
                    self.name="";
                    self.textVal="";
              
                } else {
                  console.log("获取失败")
                }
              }
            });
          // api.postContent(obj).then((res)=>{
          //     if(res.success){
          //        self.submitSusessText=true;
          //         const time= setTimeout(() => {
          //             self.submitSusessText=false;
          //             clearTimeout(time)
          //           }, 3000);
          //           self.telNumber="";
          //           self.name="";
          //           self.textVal="";
          //     }
          // });
       
        }else{
          this.$message.error('请填写手机号码');
        }
        
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.inter{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 3rem 0;
  span{
    display: inline-block;
    width: 33.33%;
  }
}
.commpany{
  height: 31rem;
  margin:0 0 3rem 0; 
}
.video-fa{
 height: 31rem;
 video{
   height:100%;
 }
}
.grid-content{
  height: 31rem;
}
#video_all{
  	object-fit: fill;
  	background-size: cover;
    overflow: hidden;
    width: 100%;
}
.commpany-info{
  padding:2% 5%;
  text-align: left;
  h2{
    text-align: left;
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 30px;
  }
  p{
   text-align: justify;
  }
  .us{
    margin-top: 50px;
    margin-bottom: 60px;
  }
}
.text-bg-color{
  background-color:#d9e0e5;
}
.is-round{
  border: 1px solid black;
}

.pro-m{
  .bkimg("../assets/product1.png");
};
.pro-s{
  .bkimg("../assets/product2.png");
};
.pro-o{
  .bkimg("../assets/product3.png");
};
.pro-t{
  .bkimg("../assets/product4.png");
};
.pro-f{
  .bkimg("../assets/product5.png");
};
 .bkimg(@urls){
   background-image: url(@urls);
   background-repeat: no-repeat;
   background-origin: border-box;
   background-size: cover;
   background-position: center center;
   height: 23rem;
}
.contact{
   background-image: url('../assets/contact_pic.png');
   background-repeat: no-repeat;
   background-origin: border-box;
   background-size: 100% 100%;
   background-position: center center;
   color: #ffffff;
   text-align: left;
   height: 31rem;
   p{
     vertical-align: middle;
     img{
       vertical-align: middle;
     }
   }
}
.bolue-border{
  text-decoration: underline;
  font-size: 48px;
  text-decoration-color:#43B7E8;
  span{
    display: inline-block;
  }
  .company-text{

  }
  .company-border{
    width:100%;
    height: 20px;
    background-color: #43B7E8;
  }
}
.bg-purple-light{
  height:31rem;
}
.product{
  height:46rem;
}
.product-w{
  height:27rem;
}
.content-left{
  height:27rem;
  position: relative;
}
/* 立即联系 */
.Immediate-contact{
  margin-top: 40px;
}
/* 产品类型 */
.productType{
  height:23rem;
  p{
    text-align: left;
    width: 70%;
    padding-left:10%;
    margin-top: 2.35rem;
    margin-bottom: 3.65rem;
  }
  a{
    display: block;
    width: 70%;
    padding-left:10%;
    text-align: left;
  }
}
.product-type{
  text-align: left;
  padding-left:10%;
  padding-top: 5rem;
}
/* 图片遮罩 */
.shadow-mask-fa{
  position: relative;
  overflow: hidden;
   p{
    position: absolute;
    color: #ffffff;
    bottom: 0%;
    left: 50%;
    font-weight: 900;
    font-size: 35px;
    font-family: 'SourceHanSansCN-Medium';
    opacity: 0;
    width: auto;
  }
  &:hover{
    .pro-m, .pro-s, .pro-o, .pro-t, .pro-f{
      transition: all 1s;
      transform: scale(1.2);
    }
    p{
      opacity:1;
    }
 }
}
.shadow-mask{
  position:absolute;
  opacity:1;
  box-shadow:2px 0px 20px rgba(0,0,0,0.2);
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
 &:hover{
  background:rgba(0,0,0,0.5);
 }
}
.product-tit{
  height:12rem;
  line-height: 12rem;
}
/* 联系我们 */
.content-we{
  margin-top:3rem;
  height:31rem;
  position: relative;
}
.contentUsTit{
  text-align: left;
}
.contentUsTex{
  text-align: left;
}
.inPut-bg{
  background-color: #F2F5FA;
}
.name-content{
  text-align: left;
  font-size: 16px;
  margin-top: 2rem;
}
.inpu-content{
  width:90%;
  height:2.5rem;
  border-radius:1.25rem;
  margin-left: -10%;
  padding:0 5px;
  font-size: 16px;
}
.btn-sub{
  width: 20%;
  height: 2.5rem;
  background-color: #43B7E8;
  color: #ffffff;
  border-radius:2.2rem;
}
.btn-submit{
  text-align: left;
  margin-top:2.4rem;
}
.contentUsWay-tit{
  font-size: 30px;
  margin-top: 2.5rem;
}
.contentUsWay-p{
  text-align: left;
   font-size: 16px;
   margin-bottom: 0.9rem;
}
.map{
  height:9rem;
}
.total{
  position:absolute;
  left: 80%;
  bottom: 10%;
  background-color: #43B7E8;
  color: #ffffff;
  width: 15rem;
  height: 12rem;
  border-radius: 1rem;
  z-index: 5;
  img{
    width: 30%;
    margin-top:18%;
  }
}
@media screen and (max-width: 767px){
  .commpany{
    height: 62rem;
  }
  .product{
    height: 138rem;
  }
  .content-we{
    height: 66rem;
  }
  .contact{
    background-size: inherit;
  }
  .pro-m,.pro-s,.pro-o,.pro-t,.pro-f,.shadow-mask{
    width: 90%;
    margin:0 5%;
    overflow: hidden;
  }
  .total{
    left: 20%;
  }
}

</style>
