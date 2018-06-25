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
        <el-col :xs="24" :sm="24" :md="12" :lg="14" :xl="14">
          <div class="video-fa">
            <video id="video_all" src="http://ugcbsy.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/o0334mzhuun.p702.1.mp4?sdtfrom=v1010&amp;guid=e2f360e91b9fb1618b5fa8e19368d406&amp;vkey=991760CBBBB08D90BBDFCFBA4AFC01E050EEF2E3C23E21E3A3B320B0B7D8F7425A053CBD13B0523AADBEC6B69710787B8B419B98E5AA9D8FC8C57F46B3AD30AD0C3812172C9635C4EF7320E73156FB3F5F7BE2E962C42E85415035D197D6F07D8E295FA8FADFD9B9E1FDBD5FF63A4468F12C2412B78C99DA" controls = "true" poster="1.png" autoplay="false" webkit-playsinline="true" playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint"style="object-fit:fill"></video>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10"><div class="grid-content bg-purple-light">
          <div class="commpany-info">
            <h2>公司介绍</h2><p> <span class="text-bg-color">上海恒义包装材料有限公司</span>   成立于2013年10月，为先进制造企业之一。我们是专业的设计师，制造商和出口商，<span class="text-bg-color">从事彩色胶印盒，喷墨打印盒，瓦楞纸箱，礼品盒，礼品袋，化妆品盒，定制纸箱/包装和包装配件的生产，开发和服务。</span> 我们位于上海市，交通便利。我们所有的产品都符合国际质量标准，并在全球各个不同的市场受到高度赞赏。<br/>我们有超过30名员工，超过4000平方米的工厂。在生产的各个阶段，设备齐全的设施和出色的质量控制使我们能够 <span class="text-bg-color">保证客户的满意度。</span><br/>我们与中国最大的专门从事儿童产品的上市公司集团合作。我们将一如既往地追求卓越品质，<span class="text-bg-color"> 愿为广大用户提供优质的产品和服务，携手共创美好未来。</span><br/></p>
            <p class="us">我们真诚地 <span class="text-bg-color">欢迎世界各地的客户和朋友与我们联系，寻求合作共赢！</span></p>
            <el-button round>立即联系</el-button>
          </div></div></el-col>
      </div>
      <div class="">
        <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <div>
            <h3>产品类型</h3>
            <p>....</p>
            <a href="http://www.baidu.com" tag="_black">前往1688查看更多 <img :src="rightArrow" alt=""></a>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
          <div class="pro-m">

          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
          <div class="pro-s">
            
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
           <div class="pro-o">

          </div>
        </el-col>
         <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
           <div class="pro-t">

          </div>
        </el-col>
         <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
           <div class="pro-f">

          </div>
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
  
}
.video-fa{
 
}
#video_all{
  	object-fit: fill;
  	background-size: cover;
    overflow: hidden;
    width: 100%;
}
.commpany-info{
  padding:2% 10%;
  text-align: left;
  h2{
    text-align: left;
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 60px;
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

</style>
