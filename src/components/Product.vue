<!--  -->
<template>
  <div>
       <header><div><img :src="Loge" alt=""><span>上海恒义</span><el-button size="mini" style="padding:0">cn</el-button></div></header>
       <el-row>
           <nav>
             <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23" :push="1" class="hidden-xs-only">
                <span @click="productType(1)" :class="{'active':buttonClick==1}">手提袋</span><span  @click="productType(2)"  :class="{'active':buttonClick==2}">礼品盒</span><span  @click="productType(3)" :class="{'active':buttonClick==3}">黄箱</span><span  @click="productType(4)" :class="{'active':buttonClick==4}">彩箱</span><span  @click="productType(5)" :class="{'active':buttonClick==5}">包装配件</span>           
             </el-col>
            <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23" :push="1" class="hidden-sm-and-up ">
                <span @click="productType(1)" :class="{'active':buttonClick==1}">手提袋</span><span  @click="productType(2)"  :class="{'active':buttonClick==2}">礼品盒</span><span  @click="productType(3)" :class="{'active':buttonClick==3}">黄箱</span><span  @click="productType(4)" :class="{'active':buttonClick==4}">彩箱</span><span  @click="productType(5)" :class="{'active':buttonClick==5}">包装配件</span>           
             </el-col>
             
            </nav>
        </el-row>
        <el-row>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for=" (val,index) in showImgList" :key="index">
                <div class="grid-content bg-purple-light">
                    <div class="grid-content-content">
                        <img :src="val" alt="" srcset="">
                        <div class="grid-content-title">手提袋</div>
                    </div>
                </div>
            </el-col>
            
        </el-row>
      <!-- <footers></footers> -->
      <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
                <div class="pag">
                    <el-pagination  background  layout="prev, pager, next"  :total="Length":page-size="12" @prev-click="prevPag" @current-change="currentPag" @next-click="nextPag" ></el-pagination>
                </div>
            </el-col>
      </el-row>
     <footer>
          <img :src="Loge" alt="">
            <p>恒义始终坚持以质量为生命、时间为信誉、价格为主要竞争力的经营信念。目前我们正与中国最大的专门从事儿童产品的上市集团公司合作，为广大用户提供优质的产品和服务，携手共创美好未来。我们将一如既往地追求卓越品质，愿我们真诚地欢迎国内外的客户和朋友与我们联系，寻求合作共赢！</p>
            <p><span>1688国际站了解详情</span><a href="http://https://hengyipackaging.en.alibaba.com ">https://hengyipackaging.en.alibaba.com </a></p>
            <p><span>阿里巴巴站了解详情</span><a href="http://https://hengyipackaging.en.alibaba.com ">https://hengyipackaging.en.alibaba.com </a></p>      
            <p class="end">Copyright ©2016-2020 | 上海恒义包装材料有限公司 | 沪ICP备1234567号-1</p>

     </footer>
     
    
  </div>
  </div>
</template>

<script>
import Footers from './Footer.vue'
import Header from './Header';
import LeftImg from '../assets/left_pag.png'
import RightImg from '../assets/right_pag.png'
const packAcce="../assets/packagingAccessories/";
const fileList=["Airpillowbubblewrap/","bubbleenvelope/","columnbubble/","corrugatedblockdivider/","coloredtape"];
const fileListFileName=[{leng:9,},{leng:18,},{leng:11},{leng:10}];
import	logoImg	from	"../assets/logo.png"
import	air_0	from	"../assets/packagingAccessories/Airpillowbubblewrap/1.jpg"
import	air_1	from	"../assets/packagingAccessories/Airpillowbubblewrap/2.jpg"
import	air_2	from	"../assets/packagingAccessories/Airpillowbubblewrap/3.jpg"
import	air_3	from	"../assets/packagingAccessories/Airpillowbubblewrap/4.jpg"
import	air_4	from	"../assets/packagingAccessories/Airpillowbubblewrap/5.jpg"
import	air_5	from	"../assets/packagingAccessories/Airpillowbubblewrap/6.jpg"
import	air_6	from	"../assets/packagingAccessories/Airpillowbubblewrap/7.jpg"
import	air_7	from	"../assets/packagingAccessories/Airpillowbubblewrap/8.jpg"
import	air_8	from	"../assets/packagingAccessories/Airpillowbubblewrap/9.jpg"

import	bub_0	from	"../assets/packagingAccessories/bubbleenvelope/1.jpg"
import	bub_1	from	"../assets/packagingAccessories/bubbleenvelope/2.jpg"
import	bub_2	from	"../assets/packagingAccessories/bubbleenvelope/3.jpg"
import	bub_3	from	"../assets/packagingAccessories/bubbleenvelope/4.jpg"
import	bub_4	from	"../assets/packagingAccessories/bubbleenvelope/5.jpg"
import	bub_5	from	"../assets/packagingAccessories/bubbleenvelope/6.jpg"
import	bub_6	from	"../assets/packagingAccessories/bubbleenvelope/7.jpg"
import	bub_7	from	"../assets/packagingAccessories/bubbleenvelope/8.jpg"
import	bub_8	from	"../assets/packagingAccessories/bubbleenvelope/9.jpg"
import	bub_9	from	"../assets/packagingAccessories/bubbleenvelope/10.jpg"
import	bub_10	from	"../assets/packagingAccessories/bubbleenvelope/11.jpg"
import	bub_11	from	"../assets/packagingAccessories/bubbleenvelope/12.jpg"
import	bub_12	from	"../assets/packagingAccessories/bubbleenvelope/13.jpg"
import	bub_13	from	"../assets/packagingAccessories/bubbleenvelope/14.jpg"
import	bub_14	from	"../assets/packagingAccessories/bubbleenvelope/15.jpg"
import	bub_15	from	"../assets/packagingAccessories/bubbleenvelope/16.jpg"
import	bub_16	from	"../assets/packagingAccessories/bubbleenvelope/17.jpg"
import	bub_17	from	"../assets/packagingAccessories/bubbleenvelope/18.jpg"

import	col_0	from	"../assets/packagingAccessories/columnbubble/1.jpg"
import	col_1	from	"../assets/packagingAccessories/columnbubble/2.jpg"
import	col_2	from	"../assets/packagingAccessories/columnbubble/3.jpg"
import	col_3	from	"../assets/packagingAccessories/columnbubble/4.jpg"
import	col_4	from	"../assets/packagingAccessories/columnbubble/5.jpg"
import	col_5	from	"../assets/packagingAccessories/columnbubble/6.jpg"
import	col_6	from	"../assets/packagingAccessories/columnbubble/7.jpg"
import	col_7	from	"../assets/packagingAccessories/columnbubble/8.jpg"
import	col_8	from	"../assets/packagingAccessories/columnbubble/9.jpg"
import	col_9	from	"../assets/packagingAccessories/columnbubble/10.jpg"
import	col_10	from	"../assets/packagingAccessories/columnbubble/11.jpg"

import	cor_0	from	"../assets/packagingAccessories/corrugatedblockdivider/1.jpg"
import	cor_1	from	"../assets/packagingAccessories/corrugatedblockdivider/2.jpg"
import	cor_2	from	"../assets/packagingAccessories/corrugatedblockdivider/3.jpg"
import	cor_3	from	"../assets/packagingAccessories/corrugatedblockdivider/4.jpg"
import	cor_4	from	"../assets/packagingAccessories/corrugatedblockdivider/5.jpg"
import	cor_5	from	"../assets/packagingAccessories/corrugatedblockdivider/6.jpg"
import	cor_7	from	"../assets/packagingAccessories/corrugatedblockdivider/8.jpg"
import	cor_8	from	"../assets/packagingAccessories/corrugatedblockdivider/9.jpg"
import	cor_9	from	"../assets/packagingAccessories/corrugatedblockdivider/10.jpg"

import	cot_00	from	"../assets/packagingAccessories/coloredtape/c (1).jpg"
import	cot_01	from	"../assets/packagingAccessories/coloredtape/c (2).jpg"
import	cot_02	from	"../assets/packagingAccessories/coloredtape/c (3).jpg"
import	cot_03	from	"../assets/packagingAccessories/coloredtape/c (4).jpg"
import	cot_04	from	"../assets/packagingAccessories/coloredtape/c (5).jpg"
import	cot_05	from	"../assets/packagingAccessories/coloredtape/c (6).jpg"
import	cot_06	from	"../assets/packagingAccessories/coloredtape/c (7).jpg"
import	cot_07	from	"../assets/packagingAccessories/coloredtape/c (8).jpg"
import	cot_08	from	"../assets/packagingAccessories/coloredtape/c (9).jpg"
import	cot_09	from	"../assets/packagingAccessories/coloredtape/c (10).jpg"
import	cot_10	from	"../assets/packagingAccessories/coloredtape/c (11).jpg"
import	cot_11	from	"../assets/packagingAccessories/coloredtape/c (12).jpg"
import	cot_12	from	"../assets/packagingAccessories/coloredtape/c (13).jpg"
import	cot_13	from	"../assets/packagingAccessories/coloredtape/c (14).jpg"
import	cot_14	from	"../assets/packagingAccessories/coloredtape/c (15).jpg"
import	cot_15	from	"../assets/packagingAccessories/coloredtape/c (16).jpg"
import	cot_16	from	"../assets/packagingAccessories/coloredtape/c (17).jpg"
import	cot_17	from	"../assets/packagingAccessories/coloredtape/c (18).jpg"
import	cot_18	from	"../assets/packagingAccessories/coloredtape/c (19).jpg"
import	cot_19	from	"../assets/packagingAccessories/coloredtape/c (20).jpg"
import	cot_20	from	"../assets/packagingAccessories/coloredtape/c (21).jpg"
import	cot_21	from	"../assets/packagingAccessories/coloredtape/c (22).jpg"
import	cot_22	from	"../assets/packagingAccessories/coloredtape/c (23).jpg"
import	cot_23	from	"../assets/packagingAccessories/coloredtape/c (24).jpg"
import	cot_24	from	"../assets/packagingAccessories/coloredtape/c (25).jpg"
import	cot_25	from	"../assets/packagingAccessories/coloredtape/c (26).jpg"
import	cot_26	from	"../assets/packagingAccessories/coloredtape/c (27).jpg"
import	cot_27	from	"../assets/packagingAccessories/coloredtape/c (28).jpg"
import	cot_28	from	"../assets/packagingAccessories/coloredtape/c (29).jpg"
import	cot_29	from	"../assets/packagingAccessories/coloredtape/c (30).jpg"
import	cot_30	from	"../assets/packagingAccessories/coloredtape/c (31).jpg"
import	cot_31	from	"../assets/packagingAccessories/coloredtape/c (32).jpg"
import	cot_32	from	"../assets/packagingAccessories/coloredtape/c (33).jpg"
import	cot_33	from	"../assets/packagingAccessories/coloredtape/c (34).jpg"
import	cot_34	from	"../assets/packagingAccessories/coloredtape/c (35).jpg"
import	cot_35	from	"../assets/packagingAccessories/coloredtape/c (36).jpg"
import	cot_36	from	"../assets/packagingAccessories/coloredtape/c (37).jpg"
import	cot_37	from	"../assets/packagingAccessories/coloredtape/c (38).jpg"
import	cot_38	from	"../assets/packagingAccessories/coloredtape/c (39).jpg"
import	cot_39	from	"../assets/packagingAccessories/coloredtape/c (40).jpg"
import	cot_40	from	"../assets/packagingAccessories/coloredtape/c (41).jpg"
import	cot_41	from	"../assets/packagingAccessories/coloredtape/c (42).jpg"
import	cot_42	from	"../assets/packagingAccessories/coloredtape/c (43).jpg"
import	cot_43	from	"../assets/packagingAccessories/coloredtape/c (44).jpg"
import	cot_44	from	"../assets/packagingAccessories/coloredtape/c (45).jpg"
import	cot_45	from	"../assets/packagingAccessories/coloredtape/c (46).jpg"
import	cot_46	from	"../assets/packagingAccessories/coloredtape/c (47).jpg"
import	cot_47	from	"../assets/packagingAccessories/coloredtape/c (48).jpg"
import	cot_48	from	"../assets/packagingAccessories/coloredtape/c (49).jpg"
import	cot_49	from	"../assets/packagingAccessories/coloredtape/c (50).jpg"
import	cot_50	from	"../assets/packagingAccessories/coloredtape/c (51).jpg"
import	cot_51	from	"../assets/packagingAccessories/coloredtape/c (52).jpg"
import	cot_52	from	"../assets/packagingAccessories/coloredtape/c (53).jpg"
import	cot_53	from	"../assets/packagingAccessories/coloredtape/c (54).jpg"
import	cot_54	from	"../assets/packagingAccessories/coloredtape/c (55).jpg"

import	paperBag_01	from	"../assets/paperBag/1.jpg"
import	paperBag_02	from	"../assets/paperBag/2.jpg"
import	paperBag_03	from	"../assets/paperBag/3.jpg"
import	paperBag_04	from	"../assets/paperBag/4.jpg"
import	paperBag_05	from	"../assets/paperBag/5.jpg"
import	paperBag_06	from	"../assets/paperBag/6.jpg"
import	paperBag_07	from	"../assets/paperBag/7.jpg"
import	paperBag_08	from	"../assets/paperBag/8.jpg"
import	paperBag_09	from	"../assets/paperBag/9.jpg"
import	paperBag_10	from	"../assets/paperBag/10.jpg"
import	paperBag_11	from	"../assets/paperBag/11.jpg"
import	paperBag_12	from	"../assets/paperBag/12.jpg"
import	paperBag_13	from	"../assets/paperBag/13.jpg"
import	paperBag_14	from	"../assets/paperBag/14.jpg"
import	paperBag_15	from	"../assets/paperBag/15.jpg"
import	paperBag_16	from	"../assets/paperBag/16.jpg"
import	paperBag_17	from	"../assets/paperBag/17.jpg"
import	paperBag_18	from	"../assets/paperBag/18.jpg"
import	paperBag_19	from	"../assets/paperBag/19.jpg"
import	paperBag_20	from	"../assets/paperBag/20.jpg"
import	paperBag_21	from	"../assets/paperBag/21.jpg"
import	paperBag_22	from	"../assets/paperBag/22.jpg"
import	paperBag_23	from	"../assets/paperBag/23.jpg"
import	paperBag_24	from	"../assets/paperBag/24.jpg"
import	paperBag_25	from	"../assets/paperBag/25.jpg"
import	paperBag_26	from	"../assets/paperBag/26.jpg"
import	paperBag_27	from	"../assets/paperBag/27.jpg"
import	paperBag_28	from	"../assets/paperBag/28.jpg"
import	paperBag_29	from	"../assets/paperBag/29.jpg"
import	paperBag_30	from	"../assets/paperBag/30.jpg"
import	paperBag_31	from	"../assets/paperBag/31.jpg"
import	paperBag_32	from	"../assets/paperBag/32.jpg"



export default {
  data () {
    return {
        Loge:logoImg,
        Packaging:[cor_0,cor_1,cor_2,cor_3,cor_4,cor_5,cor_7,cor_8,cor_9,air_0,air_1,air_2,air_3,air_4,air_5,air_6,air_7,air_8,
            bub_0,bub_1,bub_2,bub_3,bub_4,bub_5,bub_6,bub_7,bub_8,bub_9,bub_10,bub_11,bub_12,bub_13,bub_14,bub_15,bub_16,bub_17,col_0,
            col_1,col_2,col_3,col_4,col_5,col_6,col_7,col_8,col_9,col_10,
            cot_00,cot_01,cot_02,cot_03,cot_04,cot_05,cot_06,cot_07,cot_08,cot_09,cot_10,
            cot_11,cot_12,cot_13,cot_14,cot_15,cot_16,cot_17,cot_18,cot_19,cot_20,cot_21,
            cot_22,cot_23,cot_24,cot_25,cot_26,cot_27,cot_28,cot_29,cot_30,cot_31,cot_32,
            cot_33,cot_34,cot_35,cot_36,cot_37,cot_38,cot_39,cot_40,cot_41,cot_42,cot_43,
            cot_44,cot_45,cot_46,cot_47,cot_48,cot_49,cot_50,cot_51,cot_52,cot_53,cot_54,        
        ],
        paperBag:[paperBag_01,paperBag_02,paperBag_03,paperBag_04,paperBag_05,paperBag_06,
paperBag_07,paperBag_08,paperBag_09,paperBag_10,paperBag_11,paperBag_12,paperBag_13,paperBag_14,paperBag_15,paperBag_16,paperBag_17,paperBag_18,paperBag_19,paperBag_20,paperBag_21,paperBag_22,paperBag_23,paperBag_24,paperBag_25,paperBag_26,paperBag_27,paperBag_28,paperBag_29,
paperBag_30,paperBag_31,paperBag_32,],
        Length:32,
        showImgList:[paperBag_01,
paperBag_02,
paperBag_03,
paperBag_04,
paperBag_05,
paperBag_06,
paperBag_07,
paperBag_08,
paperBag_09,
paperBag_10,
paperBag_11,
paperBag_12,

],
        buttonClick:1,
    };
  },
    components: {
        Header,
        Footers,
    },
    methods:{
        currentPag(index){
            console.log(index)
            this.showPageImg(index)
        },
        prevPag(index){
            console.log(index)
            this.showPageImg(index)
        },
        nextPag(index){
            console.log(index)
            this.showPageImg(index)
        },
        productType(index){
            this.buttonClick=index;
            const self=this;
            let list=[];
            console.log(index)
            switch (this.buttonClick) {
                case 1:
                    list=self.paperBag;
                    break;
                case 2:
                    
                    break;
                case 3:
                    list=self.Packaging;
                    break;
                case 4:
                    
                    break;
                case 5:
                    
                    break;
                default:
                    break;
            };
            //   console.log(this.showImgList,list)
              this.Length=list.length;
             this.showImgList.splice(0);
             this.showImgList=list.slice(0,12)
        },
        showPageImg(index){
            const self=this;
            let list=[];
            switch (this.buttonClick) {
                case 1:
                    list=self.paperBag;
                    break;
                case 2:
                    
                    break;
                case 3:
                    list=self.Packaging;
                    break;
                case 4:
                    
                    break;
                case 5:
                    
                    break;
                default:
                    break;
            };
            this.Length=list.length;
             this.showImgList.splice(0);
             let upIndex=(index-1)*12;
             let endIndex=index*12;
             console.log(upIndex,endIndex,this.Length)
             if( index*12<=this.Length+1){
                 endIndex=index*12;
             }else{
                 endIndex=this.Length+1
             }

             console.log(upIndex,endIndex)
              this.showImgList=list.slice(upIndex,endIndex)

        }
    },
created () {
    this.Length=this.paperBag.length;
}
}

</script>
<style lang='less' scoped>
header{
    height: 4rem;
    line-height: 4rem;
    vertical-align: middle;
    img{
        display: inline-block;
         height: 2rem;
        line-height: 2rem;
        vertical-align: middle;
    }
    >div{
        float: left;
        margin-left: 4.16%;
        span{
            display: inline-block;
        height: 2rem;
        line-height: 2rem;
        margin:0 1rem;
        vertical-align: middle;
        }
    }
}
nav{
    height: 8rem;
    line-height: 8rem;
    background-image: url("../assets/produce_kind@2x.png");
    background-origin: border-box;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    span{
        padding:0.5rem 1.2rem;
        border-radius:1rem;
        font-size: 16px;
        margin-right: 2%;
        cursor:pointer;
    }
    .active{
        background-color: #FFFFFF;
        background:rgba(255,255,255,1);
        box-shadow:0rem 0rem 10rem rgba(143,143,143,0.2);
    }
}

.grid-content{
    margin-top: 2rem;
    .grid-content-content{
         width: 85%;
        background:rgba(255,255,255,1);
        box-shadow:0rem 0rem 10rem rgba(143,143,143,0.2);
        margin: auto;
        height: 24rem;
    }
    img{
       width: 100%;
       height: 21rem;
    }
    .grid-content-title{
 
         text-align: center;
         margin: auto;
         height: 3rem;
         line-height: 3rem;
    }
}


footer{
      background-image: url('../assets/black_foot.png');
   background-repeat: no-repeat;
   background-origin: border-box;
   background-size: 100% 100%;
   background-position: center center;
   width: 100%;
   color: #A7A9AB;
   font-size: 14px;
   text-align: center;
   img{
       margin-top: 2rem;
   }
   .end{
    line-height: 3rem;
    background-color: #181818;
    width: 100%;
    }
    a{
    color: #7BC9ED;
    }
    p{
        width: 80%;
        margin: auto;
    }
    >:nth-child(2){
        color: #B3B3B3;
        margin-top: 10px;
    }
}
.pag{
    margin:3rem 0; 
}
@media screen and (max-width: 767px) {
    nav{
        background-image: url("../assets/produce_kind_phone@2x.png");
        height:3rem;
        line-height: 3rem;
        span{
            border-radius:2rem;
            font-size: 12px;
            margin-right: 2%;
            padding:0.3rem 0.6rem;
        }
        .active{
            background-color: #FFFFFF;
            background:rgba(255,255,255,1);
            box-shadow:0rem 0rem 1rem rgba(143,143,143,0.2);
        }
    }
    .grid-content{
        margin-top: 0.8rem;
        .grid-content-title{
            height: 1.26rem;
            line-height: 1.26rem;
            font-size: 12px;
        }
    }
}
</style>