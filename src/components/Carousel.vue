<template>
  <div class="slide-show" @mouseover="clear" @mouseout="run">
    <div class="slide-img">
      <a>
        <transition name="slide-trans">
          <!-- <img v-if="isShow" :src="slides[nowIndex].src"> -->
          <div v-if="isShow">
            <img :src="slides[Math.abs(4-nowIndex)].src" alt=""><img :src="slides[Math.abs(3-nowIndex)].src" alt=""><img :src="slides[Math.abs(2-nowIndex)].src" alt=""><img :src="slides[Math.abs(1-nowIndex)].src" alt=""><img :src="slides[Math.abs(0-nowIndex)].src" alt="">

          </div>
        </transition>
        <transition name="slide-trans-old">
          <!-- <img v-if="!isShow" :src="slides[nowIndex].src"> -->
          <div v-if="!isShow">
            <img :src="slides[Math.abs(4-nowIndex)].src" alt=""><img :src="slides[Math.abs(3-nowIndex)].src" alt=""><img :src="slides[Math.abs(2-nowIndex)].src" alt=""><img :src="slides[Math.abs(1-nowIndex)].src" alt=""><img :src="slides[Math.abs(0-nowIndex)].src" alt="">
          </div>
        </transition>

      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true,
      showListArry:[0,1,2,3,4],
      winWidth:"",
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    run () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clear () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.run();
    let arry=[0,1,2,3,4];
    if (window.innerWidth){
      this.winWidth = window.innerWidth;
    }else if ((document.body) && (document.body.clientWidth)){
      this.winWidth = document.body.clientWidth;
    };
    
    if(this.winWidth<768){
        arry.slice(0,1);
    }else if(this.winWidth>992){
      if(this.winWidth>1200){
          arry.slice(0,5);
      }else{
       arry.slice(0,2);
         console.log( arry,this.winWidth)
      }
    }else{
      arry.slice(0,2)
    };
    this.showListArry=arry;
      console.log( this.showListArry,this.winWidth)
    
  },

}
</script>

<style lang='less' scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(20%);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-20%);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  height: 260px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  position: absolute;
  width: 100%;
  font-size: 0;
  img{
    width: 20%;
  }
  a>div{
    position: absolute;
   top: 0; 
   left: 0; 
  }
}
.slide-img >div {
  /* width: 20%; */
   
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>