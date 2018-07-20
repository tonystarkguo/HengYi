<!--  -->
<template>
  <div>
       <header><div><img :src="Loge" alt=""><span>{{$t('m.comp')}}</span><el-button size="mini" style="padding:0"@click="changeLanguage">{{language}}</el-button></div></header>
       <el-row>
           <nav>
             <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23" :push="1" class="hidden-xs-only">
                <span @click="productType(1)" :class="{'active':buttonClick==1}">{{$t("m.Reticule")}}</span><span  @click="productType(2)"  :class="{'active':buttonClick==2}">{{$t("m.GiftBox")}}</span><span  @click="productType(3)" :class="{'active':buttonClick==3}">{{$t("m.YellowBox")}}</span><span  @click="productType(4)" :class="{'active':buttonClick==4}">{{$t("m.colorBox")}}</span><span  @click="productType(5)" :class="{'active':buttonClick==5}">{{$t("m.PackagingAccessories")}}</span>           
             </el-col>
            <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23" :push="1" class="hidden-sm-and-up ">
                <span @click="productType(1)" :class="{'active':buttonClick==1}">{{$t("m.Reticule")}}</span><span  @click="productType(2)"  :class="{'active':buttonClick==2}">{{$t("m.GiftBox")}}</span><span  @click="productType(3)" :class="{'active':buttonClick==3}">{{$t("m.YellowBox")}}</span><span  @click="productType(4)" :class="{'active':buttonClick==4}">{{$t("m.colorBox")}}</span><span  @click="productType(5)" :class="{'active':buttonClick==5}">{{$t("m.PackagingAccessories")}}</span>           
             </el-col>
             
            </nav>
        </el-row>
        <el-row>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for=" (val,index) in showImgList" :key="index">
                <div class="grid-content bg-purple-light">
                    <div class="grid-content-content">
                        <img :src="val" alt="" srcset="">
                        <div class="grid-content-title">{{index+1}}</div>
                    </div>
                </div>
            </el-col>
            
        </el-row>
      <!-- <footers></footers> -->
      <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
                <div class="pag">
                    <el-pagination  background :current-page="currentPage" layout="prev, pager, next"  :total="Length":page-size="12" @prev-click="prevPag" @current-change="currentPag" @next-click="nextPag" ></el-pagination>
                </div>
            </el-col>
      </el-row>
     <footer>
          <img :src="Loge" alt="">
            <img :src="logoImg" alt="">
      <p>{{$t("m.FootText")}}</p>
      <p><span>{{ $t("m.Inter")}}</span><a href="https://hengyipackaging.en.alibaba.com ">https://hengyipackaging.en.alibaba.com </a></p>
      <p><span>{{ $t("m.alista")}}</span><a href="https://shop37918a2288047.1688.com/ ">https://shop37918a2288047.1688.com/</a></p>      
      <p class="end"> Copyright ©2016-2020 | {{$t("m.Company")}} | <a href="http://www.miitbeian.gov.cn" target="_blank" style="color:#A7A9AB">沪ICP备15008437号-6 </a> </p>
    
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
import	 cor_10  	from	"../assets/packagingAccessories/corrugatedblockdivider/11.jpg"
import	 cor_11  	from	"../assets/packagingAccessories/corrugatedblockdivider/12.jpg"
import	 cor_12  	from	"../assets/packagingAccessories/corrugatedblockdivider/13.jpg"
import	 cor_13  	from	"../assets/packagingAccessories/corrugatedblockdivider/14.jpg"
import	 cor_14  	from	"../assets/packagingAccessories/corrugatedblockdivider/15.jpg"
import	 cor_15  	from	"../assets/packagingAccessories/corrugatedblockdivider/16.jpg"
import	 cor_16  	from	"../assets/packagingAccessories/corrugatedblockdivider/17.jpg"
// import	 cor_17  	from	"../assets/packagingAccessories/corrugatedblockdivider/18.jpg"
import	 cor_18  	from	"../assets/packagingAccessories/corrugatedblockdivider/19.jpg"
import	 cor_19  	from	"../assets/packagingAccessories/corrugatedblockdivider/20.jpg"
import	 cor_20  	from	"../assets/packagingAccessories/corrugatedblockdivider/21.jpg"
import	 cor_21  	from	"../assets/packagingAccessories/corrugatedblockdivider/22.jpg"
import	 cor_22  	from	"../assets/packagingAccessories/corrugatedblockdivider/23.jpg"
import	 cor_23  	from	"../assets/packagingAccessories/corrugatedblockdivider/24.jpg"
import	 cor_24  	from	"../assets/packagingAccessories/corrugatedblockdivider/25.jpg"
// import	 cor_25  	from	"../assets/packagingAccessories/corrugatedblockdivider/26.jpg"
import	 cor_26  	from	"../assets/packagingAccessories/corrugatedblockdivider/27.jpg"
import	 cor_27  	from	"../assets/packagingAccessories/corrugatedblockdivider/28.jpg"
import	 cor_28  	from	"../assets/packagingAccessories/corrugatedblockdivider/29.jpg"
import	 cor_29  	from	"../assets/packagingAccessories/corrugatedblockdivider/30.jpg"



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

import giftBox_1 from '../assets/giftBox/1.jpg'
import giftBox_2 from '../assets/giftBox/2.jpg'
import giftBox_3 from '../assets/giftBox/3.jpg'
import giftBox_4 from '../assets/giftBox/4.jpg'
import giftBox_5 from '../assets/giftBox/5.jpg'
import giftBox_6 from '../assets/giftBox/6.jpg'
import giftBox_7 from '../assets/giftBox/7.jpg'
import giftBox_8 from '../assets/giftBox/8.jpg'
import giftBox_9 from '../assets/giftBox/9.jpg'
import giftBox_10 from '../assets/giftBox/10.jpg'
import giftBox_11 from '../assets/giftBox/11.jpg'
import giftBox_12 from '../assets/giftBox/12.jpg'
import giftBox_13 from '../assets/giftBox/13.jpg'
import giftBox_14 from '../assets/giftBox/14.jpg'
import giftBox_15 from '../assets/giftBox/15.jpg'
import giftBox_16 from '../assets/giftBox/16.jpg'
import giftBox_17 from '../assets/giftBox/17.jpg'
import giftBox_18 from '../assets/giftBox/18.jpg'
import giftBox_19 from '../assets/giftBox/19.jpg'
import giftBox_20 from '../assets/giftBox/20.jpg'
import giftBox_21 from '../assets/giftBox/21.jpg'
import giftBox_22 from '../assets/giftBox/22.jpg'
import giftBox_23 from '../assets/giftBox/23.jpg'
import giftBox_24 from '../assets/giftBox/24.jpg'
import giftBox_25 from '../assets/giftBox/25.jpg'

import	color_1	from	'../assets/colorBox/1.jpg';
import	color_2	from	'../assets/colorBox/2.jpg';
import	color_3	from	'../assets/colorBox/3.jpg';
import	color_4	from	'../assets/colorBox/4.jpg';
import	color_5	from	'../assets/colorBox/5.jpg';
import	color_6	from	'../assets/colorBox/6.jpg';
import	color_7	from	'../assets/colorBox/7.jpg';
import	color_8	from	'../assets/colorBox/8.jpg';
import	color_9	from	'../assets/colorBox/9.jpg';
import	color_10	from	'../assets/colorBox/10.jpg';
import	color_11	from	'../assets/colorBox/11.jpg';
import	color_12	from	'../assets/colorBox/12.jpg';
import	color_13	from	'../assets/colorBox/13.jpg';
import	color_14	from	'../assets/colorBox/14.jpg';
import	color_15	from	'../assets/colorBox/15.jpg';
import	color_16	from	'../assets/colorBox/16.jpg';
import	color_17	from	'../assets/colorBox/17.jpg';
import	color_18	from	'../assets/colorBox/18.jpg';
import	color_19	from	'../assets/colorBox/19.jpg';
import	color_20	from	'../assets/colorBox/20.jpg';
import	color_21	from	'../assets/colorBox/21.jpg';
import	color_22	from	'../assets/colorBox/22.jpg';
import	color_23	from	'../assets/colorBox/23.jpg';
import	color_24	from	'../assets/colorBox/24.jpg';
import	color_25	from	'../assets/colorBox/25.jpg';
import	color_26	from	'../assets/colorBox/26.jpg';
import	color_27	from	'../assets/colorBox/27.jpg';
import	color_28	from	'../assets/colorBox/28.jpg';
import	color_29	from	'../assets/colorBox/29.jpg';
import	color_30	from	'../assets/colorBox/30.jpg';
import	color_31	from	'../assets/colorBox/31.jpg';
import	color_32	from	'../assets/colorBox/32.jpg';
import	color_33	from	'../assets/colorBox/33.jpg';
import	color_34	from	'../assets/colorBox/34.jpg';
import	color_35	from	'../assets/colorBox/35.jpg';

export default {
  data () {
    return {
        Loge:logoImg,
        Packaging:[air_0,air_1,air_2,air_3,air_4,air_5,air_6,air_7,air_8,
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
        giftBox:[giftBox_1,giftBox_2,giftBox_3,giftBox_4,giftBox_5,giftBox_6,giftBox_7,giftBox_8,giftBox_9,giftBox_10,giftBox_11,giftBox_12,giftBox_13,giftBox_14,giftBox_15,giftBox_16,giftBox_17,giftBox_18,giftBox_19,giftBox_20,giftBox_21,giftBox_22,giftBox_23,giftBox_24,giftBox_25,],
        yellowBox:[cor_0,cor_1,cor_2,cor_3,cor_4,cor_5,cor_7,cor_8,cor_9, cor_10,
 cor_11, cor_12, cor_13, cor_14, cor_15, cor_16,  cor_18, cor_19, cor_20, cor_21, cor_22, cor_23, cor_24, cor_26,
 cor_27, cor_28, cor_29,],
        colorBox:[color_1,color_2,
color_3,color_4,color_5,color_6,color_7,color_8,color_9,color_10,
color_11,color_12,color_13,color_14,color_15,color_16,color_17,color_18,
color_19,color_20,color_21,color_22,color_23,color_24,color_25,color_26,
color_27,color_28,color_29,color_30,color_31,color_32,color_33,color_34,
color_35,],
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
        language:"EN",
        currentPage:1,
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
                    list=self.giftBox;
                    break;
                case 3:
                    list=self.yellowBox;
                    break;
                case 4:
                 list=self.colorBox;
                    break;
                case 5:
                      list=self.Packaging;
                    break;
                default:
                    break;
            };
            //   console.log(this.showImgList,list)
              this.Length=list.length;
             this.showImgList.splice(0);
             this.showImgList=list.slice(0,12)
             this.currentPage=1;
        },
        showPageImg(index){
            const self=this;
            let list=[];
            switch (this.buttonClick) {
                case 1:
                    list=self.paperBag;
                    break;
                case 2:
                    list=self.giftBox;
                    break;
                case 3:
                     list=self.yellowBox;
                    break;
                case 4:
                    list=self.colorBox;
                    break;
                case 5:
                      list=self.Packaging;
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

        },
        changeLanguage(){
      // this.$i18n.locale="zh_CN";
      if(this.language=="EN"){
        this.language="CN";
         this.$i18n.locale="en";
      }else{
        this.language="EN";
         this.$i18n.locale="zh_CN";
      }
    },
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