<template>
  <transition name="modal-fade" @after-enter="refreshScroll">
  <div class="modal-backdrop">
    <div class="modal" >
      <header class="modal-header">
        <slot name="header">
          
          This is the default tile!
        </slot>
        <slot name="headerbtn">
          <button type="button" class="btn-close" @click="close">
            X
          </button>
          </slot>
      </header>
      <section id="bodytest" class="modal-body">
        <Scroll ref="scroll" widthTest="" heightTest="">
          <slot>
            I'm the default body
          </slot>
        </Scroll>
      </section>
      <footer class="modal-footer" v-if="footerboolean">
        <!--<slot name="btnfooter">
          <button type="button" class="btn-green" @click="close">
            Close me!
          </button>
        </slot>-->
        <slot name="footer" >
          I'm the default footer!
        </slot>
      </footer>
    </div>
  </div>
  </transition>
</template>

<script>
import Scroll from './Scroll.vue';

  export default {
    name: 'MessageBox',
    components: {
      Scroll,
    },

    props:{
        footerboolean : {type:Boolean,default:false},
        heightTest :{type: String, default: "100%"},
        widthTest  :{type: String, default: "100%"}
    },
    methods: {
      close() {
        this.$emit('close');
      },
      refreshScroll(){
        this.$refs.scroll.refreshScrollVue();
      },
    },
  };

</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:9999;
  }

  .modal {
    width: 85%;
    height: 85%;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    display:-webkit-flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 5px;
    display: right;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    height:50px;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px /* 10px 15px */ ;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 10px 14px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    text-align: right;
    position: relative;
    background: rgb(185, 30, 19);
    top: -45px;
    right: -320px;
}

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }

  ::-webkit-scrollbar-thumb{
    background: grey;
  }

  .btn-close:hover{
    background:rgb(59, 5, 5);
  }
  .btn-close:after{
    display:inline-block;
  }

</style>
