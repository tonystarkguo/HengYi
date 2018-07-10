<!--  -->
<template>

      <div class="box">
			<span class="prev" @click="prePag"><img :src="LeftImg" alt="上一个" srcset=""></span>
			<div>
			<dl id="roll">
				<dd v-for="item in  imgList"><img :src="item.ImgVal"/></dd>
			</dl>
			</div>
			<span class="next"  @click="nextPag"><img :src="RightImg" alt="下一个" srcset=""></span>
		</div>	
</template>

<script>
import img_0 from '../assets/00.png';
import img_1 from '../assets/01.png';
import img_2 from '../assets/02.png';
import img_3 from '../assets/03.png';
import img_4 from '../assets/04.png';
import img_5 from '../assets/05.png';
import img_6 from '../assets/06.png';
import img_7 from '../assets/07.png';
import img_8 from '../assets/08.png';
import img_9 from '../assets/09.png';
import img_10 from '../assets/00.png';
import LeftImg from '../assets/white_left@2x.png';
import rightImg from '../assets/white_right@2x.png';
// import  "../untils/super_slider.js";
export default {
  data () {
        return {
            imgList:[{ImgVal:img_0},{ImgVal:img_1},{ImgVal:img_2},{ImgVal:img_3},{ImgVal:img_4},{ImgVal:img_5},{ImgVal:img_6},{ImgVal:img_7},{ImgVal:img_8},{ImgVal:img_9},{ImgVal:img_0},{ImgVal:img_1},{ImgVal:img_2},{ImgVal:img_3},{ImgVal:img_4}],
            index:0,
            timeVal:1000,
            timeinter:"",
            ImgWidth:"",
            LeftImg:LeftImg,
            RightImg:rightImg,
        }
    },
  methods: {
      nextPag(){
          const time=this.timeVal;
          this.index=this.index+1;
          if(this.index>4){
              this.index=-1;
          }else{
              
          }
            const left=(this.index+1)*20+"%";
          clearInterval(this.timeinter);
           $("#roll").animate({"margin-left":"-"+left,},500);
           this.play();
      },
      prePag(){
          const time=this.timeVal;
          this.index=this.index-1;
          if(this.index<=0){
              this.index=-1;
          }else{
              
          }
            const left=(this.index+1)*20+"%";
          clearInterval(this.timeinter);
           $("#roll").animate({"margin-left":"-"+left,},500);
           this.play();
      },
      cleatTime(){},
      autoPlay(){},
      play(){
          const self=this;
           this.timeinter=setInterval(function(){
                const time=self.timeVal;
                  console.log(self.index),
                  self.index=self.index+1;
                  if(self.index>4){
                        self.index=-1;
                    }
                   const left=(self.index+1)*20+"%";
                    $("#roll").animate({"margin-left":"-"+left,},1000);
            }, 2000);
      },
  },
  created:function(){
      const t=this.timeVal;
      const self=this;
      clearInterval(this.timeinter);
    this.play();
  }

};

</script>
<style lang='less' scoped>
    .box{
        border: 1px solid red;
        position: relative;
        display: inline-block;
        height: 15rem;
        overflow: hidden;
	}
	#roll{
        width: 200%;
        overflow: hidden;
	}
	#roll dd{
		height: 15rem;
		float: left;
        overflow: hidden;
        width: 10%;
	}
	.box span{
        position: absolute;
        bottom: 35%; 
        left:5%; 
        display: inline-block;
        width: 100px;
        text-align: center;
        cursor: pointer;
        z-index: 90;
        color: #fff;
        img{
            width: 50%;
        }
        }
	.box .next{
        right: 10%; 
        left:auto;
        }
</style>