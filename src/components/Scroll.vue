<template>
  <div class="free-scroll-container">
    <div class="free-scroll-wrapper" v-bind:style="{height:heightWrapper, width:widthWrapper}">
      <div class="scroll-wrapper" ref="wrapper">
        <div id="test" class="scroll-content">
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
/* MutationObserver */


BScroll.use(ScrollBar)

  export default {
    name: 'Scroll',
    mounted() {
      this.init()
    },
    props:{
        footerboolean : {type:Boolean,default:false},
        heightWrapper:{type: String, default:"330px"},
        widthWrapper:{type: String, default:"660px"},
    },
    updated(){
      this.bs.refresh();
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

        this.$nextTick(() => {
          this.bs.refresh()
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
  }
      
  .scroll-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  
  p{
    font-size: 16px;
    padding: 20px;
    line-height: 100%;
    margin: 0;
  }
  
</style>