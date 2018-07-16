<template>
  <div class="hello">
      <Header></Header>
      <Banner/>
      <div class="inter">
        <span><img :src="clientImgUrl" alt=""><div>客户第一</div></span>
        <span><img :src="integrityImgUrl" alt=""><div>质量保证</div></span>
        <span><img :src="jewelImgUrl" alt=""><div>诚信务实</div></span>
      </div>
      <div class="commpany">
        <el-col :xs="24" :sm="12" :md="12" :lg="13" :xl="13" class="company-video">
          <div class="video-fa">
            <video id="video_all" src="//cloud.video.taobao.com/play/u/2153292369/p/1/e/6/t/10300/50137716747.mp4" controls = "true" poster="1.png" autoplay="false" webkit-playsinline="true" playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint"style="object-fit:fill"></video>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="11" :xl="11" class="grid-content">
          <div class="bg-purple-light">
            <div class="commpany-info">
              <h2 class="bolue-border">公司介绍</h2><p> <span class="text-bg-color">上海恒义包装材料有限公司</span>   成立于2013年10月，公司位于上海市奉贤区邬桥工业园<span class="text-bg-color">公司有一批技能精湛的技工团队及高素质的管理团队，</span> 便利的交通、舒适的办公环境、人性化管理模式、拥有5000平方米标准厂房及现代化的机器设备，让公司具备核心竞争力做倒可持续发展。</span>
              <br/>我们主营产品有 <span class="text-bg-color">彩色纸箱、瓦楞纸箱、卡盒等。</span><br/>公司已获得《印刷经营许可证书》、《国际质量体系认证证书》等资质，同时在阿里巴巴国际站已开通上线，公司内部已经<span class="text-bg-color"> 上线ERP生产管理软件，做到订单可视化、生产可视化、设备生产过程中绩效可量化等。</span><br/>我们积极拥抱创新并严把质量关，全方位的售前、售后的跟踪服务是我们经营原则；<span>高品质产品、时效保障</span>是我们生存之道。我们生产产品全部符合国际质量标准，并在全球各个不同的市场受到高度赞赏。</p>
              <el-button round class="Immediate-contact" @click="contentButton">立即联系</el-button>
            </div>
          </div>
        </el-col>
      </div>
      <div class="product">
        <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
          <div class="productType">
            <h3 class="bolue-border product-type">产品类型</h3>
            <p>结实耐用or时尚美观or干净卫生or样式多变or暗藏玄机，您想要的我们都能提供。</p>
            <a href="https://hengyipackaging.en.alibaba.com" target=" _blank">前往1688查看更多 <img :src="rightArrow" alt=""></a>
          </div>
        </el-col>
        <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7" class="shadow-mask-fa">
          <div class="pro-m"></div>
          <div class="shadow-mask"></div>
          <p>手提袋</p>
        </el-col>
        <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7" class="shadow-mask-fa">
          <div class="pro-s"></div>
          <div class="shadow-mask"></div>
          <p>礼品盒</p>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="shadow-mask-fa">
           <div class="pro-o"></div>
           <div class="shadow-mask"></div>
          <p>黄箱</p>
        </el-col>
         <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="shadow-mask-fa">
           <div class="pro-t"></div>
           <div class="shadow-mask"></div>
          <p>礼盒包装</p>
        </el-col>
         <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="shadow-mask-fa">
           <div class="pro-f"></div>
           <div class="shadow-mask"></div>
          <p>包装配件</p>
        </el-col>
      </div>
      <div class="product-w">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
           <div class="product-tit" > <h2  class="bolue-border">生产环境</h2></div>
            <slider></slider>
        </el-col>
      </div>
      <!-- 电脑 -->
      <div class="content-we" >
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="content-left">
            <el-col  :xs="23" :sm="23":push="1" class="bolue-border contentUsTit">联系我们</el-col >
             <el-col :xs="23" :sm="23":push="1" style="color:#999999 " class="contentUsTex">在线提交您的需求，我们将在24小时与您联系，感谢支持</el-col>
              <el-col :xs="23" :sm="8" :md="8" :lg="8" :xl="8" :push="1">
                <p class="name-content">您的名字</p>
                <input type="text" class="inPut-bg inpu-content" v-model="name">
              </el-col>
              <el-col :xs="23" :sm="10" :md="10" :lg="12" :xl="12" :push="1">
                <p  class="name-content">您的联系方式</p>
                <input type="text" class="inPut-bg inpu-content" v-model="telNumber">
              </el-col>
                <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="14" :push="1">
                  <p class="name-content">您的内容</p>
                  <textarea class="inPut-bg el-col-lg-24 el-col-xl-20 el-col-xs-20 el-col-sm-20" name="" id=""  rows="5" placeholder="" v-model="textVal"></textarea>
                </el-col>
                <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23" :push="1">
                  <div class="btn-submit"><button class="btn-sub" @click="submitValue">提交</button></div>
                </el-col>
                <div class="total"><img :src="successImgUrl" alt=""><div>提交成功</div></div>
          </div>
         </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
           <div class="contact">
              <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" :push="2">
               <h3 class="contentUsWay-tit">我们的联系方式</h3>
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
    position:absolute;
    color: #ffffff;
    top: 80%;
    left:55%;
    font-weight: 900;
    font-size: 46px;
    font-family: 'SourceHanSansCN-Medium';
    opacity:0;
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
