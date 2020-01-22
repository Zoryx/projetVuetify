<template>
  <div class="free-scroll-container">
    <div class="free-scroll-wrapper">
      <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content" v-bind:style="{height:heightTest, width:widthTest}" >
          <slot>
            <p>ContenuScrollable Test</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar';

BScroll.use(ScrollBar)

  export default {
    name: 'Scroll',
    mounted() {
      this.init()
    },
    created(){
      this.bs = null  
    }, 
    props:{
        footerboolean : {type:Boolean,default:false},
        heightTest :{type: String, default: "100%"},
        widthTest  :{type: String, default: "100%"}
    },
    methods: {
      init () {
        this.bs = new BScroll(this.$refs.wrapper, {
          freeScroll: true,
          click: true,
          bounce: {
          bottom: false,
          left: false,
          right: false,
          top: false
          },
          disableMouse: false,
          scrollY: true,
          scrollbar:{
            scrollbar:true,
            fade:false,
          }
        })
      },
      refreshScrollVue(){
        this.bs.refresh();
      }
    },
  };
</script>

<style scoped>
  .free-scroll-container{
    position: relative;
    width: 100%;
    height: 100%;
  }
    
  .free-scroll-wrapper{
    position: relative;
    width: 660px;
    height:330px;
    border: 1px solid rgb(96, 108, 113);
    box-sizing: border-box;
  }
      
  .scroll-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
        
  .scroll-content{
    background-color: #efeff4;
  }
  
  p{
    font-size: 16px;
    padding: 20px;
    line-height: 100%;
    margin: 0;
  }
  
</style>