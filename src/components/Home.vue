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
        <el-col :xs="24" :sm="24" :md="12" :lg="13" :xl="13" class="company-video">
          <div class="video-fa">
            <video id="video_all" src="http://ugcbsy.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/o0334mzhuun.p702.1.mp4?sdtfrom=v1010&amp;guid=e2f360e91b9fb1618b5fa8e19368d406&amp;vkey=991760CBBBB08D90BBDFCFBA4AFC01E050EEF2E3C23E21E3A3B320B0B7D8F7425A053CBD13B0523AADBEC6B69710787B8B419B98E5AA9D8FC8C57F46B3AD30AD0C3812172C9635C4EF7320E73156FB3F5F7BE2E962C42E85415035D197D6F07D8E295FA8FADFD9B9E1FDBD5FF63A4468F12C2412B78C99DA" controls = "true" poster="1.png" autoplay="false" webkit-playsinline="true" playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint"style="object-fit:fill"></video>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="11" :xl="11" class="grid-content">
          <div class="bg-purple-light">
            <div class="commpany-info">
              <h2 class="bolue-border">公司介绍</h2><p> <span class="text-bg-color">上海恒义包装材料有限公司</span>   成立于2013年10月，公司位于上海市奉贤区邬桥工业园<span class="text-bg-color">公司有一批技能精湛的技工团队及高素质的管理团队，</span> 便利的交通、舒适的办公环境、人性化管理模式、拥有5000平方米标准厂房及现代化的机器设备，让公司具备核心竞争力做倒可持续发展。</span>
              <br/>我们主营产品有 <span class="text-bg-color">彩色纸箱、瓦楞纸箱、卡盒等。</span><br/>公司已获得《印刷经营许可证书》、《国际质量体系认证证书》等资质，同时在阿里巴巴国际站已开通上线，公司内部已经<span class="text-bg-color"> 上线ERP生产管理软件，做到订单可视化、生产可视化、设备生产过程中绩效可量化等。</span><br/>我们积极拥抱创新并严把质量关，全方位的售前、售后的跟踪服务是我们经营原则；<span>高品质产品、时效保障</span>是我们生存之道。我们生产产品全部符合国际质量标准，并在全球各个不同的市场受到高度赞赏。</p>
              <el-button round class="Immediate-contact">立即联系</el-button>
            </div>
          </div>
        </el-col>
      </div>
      <div class="product">
        <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <div class="productType">
            <h3 class="bolue-border product-type">产品类型</h3>
            <p>结实耐用or时尚美观or干净卫生or样式多变or暗藏玄机，您想要的我们都能提供。</p>
            <a href="http://www.baidu.com" tag="_black">前往1688查看更多 <img :src="rightArrow" alt=""></a>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7" class="shadow-mask-fa">
          <div class="pro-m"></div>
          <div class="shadow-mask"></div>
          <p>手提袋</p>
        </el-col>
        <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7" class="shadow-mask-fa">
          <div class="pro-s"></div>
          <div class="shadow-mask"></div>
          <p>礼品盒</p>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="shadow-mask-fa">
           <div class="pro-o"></div>
           <div class="shadow-mask"></div>
          <p>黄箱</p>
        </el-col>
         <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="shadow-mask-fa">
           <div class="pro-t"></div>
           <div class="shadow-mask"></div>
          <p>礼盒包装</p>
        </el-col>
         <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="shadow-mask-fa">
           <div class="pro-f"></div>
           <div class="shadow-mask"></div>
          <p>包装配件</p>
        </el-col>
      </div>
      <div class="product-w">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
           <h3>生产环境</h3>
           <carousel :slides="slides" :inv="invTime"></carousel>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
           <h3>生产环境</h3>
        </el-col>

      </div>
      <div class="content-we">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="2"><span>&nbsp; </span></el-col>
          <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="22">
             <h3>联系我们</h3>
             <p>在线提交您的需求，我们将在24小时与您联系，感谢支持</p>
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="您的名字">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="你的联系方式">
                  <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                </el-col>
                <el-input  type="textarea" :rows="6"placeholder="请输入内容"v-model="formLabelAlign.type">
                  </el-input>
                <el-form-item>
                <el-button type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
              </el-form-item>
              </el-form>
          </el-col>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
           <div class="contact">
              <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="2">
               <h3>&nbsp;</h3>
              </el-col>
              <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="22">
               <h3>我们的联系方式</h3>
              </el-col>
              <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="2">
               <h3>&nbsp;</h3>
              </el-col>
              <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="22">
                  <p><img :src="PositionImg" alt="">No.1255-1, Puwei Highway, Zhuanghang Town, Fengxian District, Shanghai China</p>
                  <p><img :src="EmailImg" alt="">hengyibz@126.com</p>
                  <p><img :src="PhoneImg" alt="">+86-17721227066 (Yvonne Nie)</p>
                  <p><img :src="TelephoneImg" alt="">86-021-67182993</p>
                  <img :src="AddressImg" alt="">
              </el-col>
              
              
           </div>
        </el-col>
      </div>
      
    <h1>{{ msg }}</h1>
    <Footers></Footers>
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
import carousel from './Carousel.vue';
import Footers from './Footer.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      clientImgUrl:client,
      integrityImgUrl:integrity,
      jewelImgUrl:jewel,
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
    }
  },
  components:{
      Header,
      Banner,
      carousel,
      Footers,
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
      }
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
  margin:0 0 60px 0; 
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
   height: 480px;
}
.contact{
   background-image: url('../assets/contact_pic.png');
   background-repeat: no-repeat;
   background-origin: border-box;
   background-size: 100% 100%;
   background-position: center center;
   color: #ffffff;
   text-align: left;
   height: 450px;
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
/* 立即联系 */
.Immediate-contact{
  margin-top: 40px;
}
/* 产品类型 */
.productType{
  p{
    text-align: left;
    width: 70%;
    padding-left:10%;
    margin-top: 47px;
    margin-bottom: 73px;
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
  padding-top: 20%;
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
</style>
