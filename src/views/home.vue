<template>
    <div>
        <Scroll id="scroll" ref="scroll" widthWrapper="800px" heightWrapper="400px">
            <div>
                <HelloWorld/>
                <div>
                    <v-btn class="ma-2" rounded color="primary" @click="isModalVisible = true;">
                        Modal - Scroll - Test
                    </v-btn>
                    <MessageBox id="app" v-show="isModalVisible" @close="isModalVisible = false" >
                        <template v-slot:header >
                        <p>IScroll header</p>
                        </template>
                            <p>"IScroll test Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum."</p>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum."</p>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est  laborum."</p>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint oc.caecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum."</p>
                        <template v-slot:footer v-if="footerboolean">
                        <p>IScroll footer</p> 
                        </template>
                    </MessageBox>
                </div>

                <div>
                    <v-row justify="center">
                        <v-dialog v-model="dialog" persistent max-width="290">
                        <template v-slot:activator="{on}">
                            <v-btn color="primary" dark v-on="on">Test Dialog</v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="headline">TITLE TEST</v-card-title>
                            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-row>
                </div>


                <div>
                    <v-btn class="ma-2" rounded color="primary" @click="SlideTest">
                        Slide - Test
                    </v-btn>
                        <MessageBox id="app" v-show="isSlideVisible" @close="SlideTest">
                        <template v-slot:header >
                            <p>Slide header</p>
                        </template>
                        <v-carousel v-show="isSlideVisible"
                            cycle
                            height="327"
                            hide-delimiter-background
                            show-arrows-on-hover>
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                            <v-sheet :color="colors[i]" height="327">
                                <v-row class="fill-height" align="center" justify="center">
                                <div class="display-2">{{ slide }} Slide</div>
                                </v-row>
                            </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                        <template v-slot:footer v-if="footerboolean">
                            <p>Slide footer</p> 
                        </template>
                        </MessageBox>
                </div>
                <div class="text-center">
                    <v-btn class="ma-2" rounded color="primary" dark @click="isBannerVisible = true">
                        Btn-Info-Test
                    </v-btn>
                    <v-snackbar v-model="isBannerVisible" :timeout="timeout" :multiLine="multiLine" color="info">
                        Test snackbar Infos
                        <v-btn dark text @click="isBannerVisible=false">
                        Close
                        </v-btn>
                    </v-snackbar>

                    <v-btn class="ma-2" rounded color="primary" dark @click="isBannerVisibleSuccess = true">
                        Btn-Succes-Test
                    </v-btn>
                    <v-snackbar v-model="isBannerVisibleSuccess" :timeout="timeout" :multiLine="multiLine" color="success">
                        Test snackbar Succes
                        <v-btn dark text @click="isBannerVisibleSuccess=false">
                        Close
                        </v-btn>
                    </v-snackbar>

                    <v-btn class="ma-2" rounded color="primary" dark @click="isBannerVisibleError = true">
                        Btn-Error-Test
                    </v-btn>
                    <v-snackbar v-model="isBannerVisibleError" :timeout="timeout" :multiLine="multiLine" color="error">
                        Test snackbar Error
                        <v-btn  dark text @click="isBannerVisibleError=false" >
                        Close
                        </v-btn>
                    </v-snackbar>

                    <v-btn class="ma-2" rounded color="primary" dark @click="isBannerRealVisible = true">
                        Btn-Banner
                    </v-btn>
                    <v-banner v-model="isBannerRealVisible" elevation="10" right>
                        Test banner btn
                        <template v-slot:actions>
                        <v-btn dark text color="deep-purple accent-4" @click="isBannerRealVisible=false" right max-height="10px">
                            Close
                        </v-btn>
                        </template>
                    </v-banner>
                </div>
                <div id="teest">
                    <v-btn class="ma-2" rounded color="primary" dark @click="showDivFunction">
                        SHOW-Div
                    </v-btn>
                    <div v-show="showDiv">
                        <p>"IScroll test Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum."</p>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum."</p>
                    </div>

                    <v-btn class="m-3" rounded color="yellow" dark @click="isTestAlerts = true">
                        Test-Alerts
                    </v-btn>
                    <v-alert v-model="isTestAlerts" type="warning" style="text-align=left">
                        I'm a warning alert.
                        <v-btn  dark text @click="isTestAlerts=false" >
                            Close
                        </v-btn>
                    </v-alert>
                </div>
            </div>
        </Scroll>
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import MessageBox from '../components/MessageBox.vue';
import Scroll from '../components/Scroll.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    MessageBox,
    Scroll,
  },
  props:{
        footerboolean : {type:Boolean,default:true},
  }, 
  data: () => ({
    isBannerVisible:false,
    isBannerVisibleSuccess:false,
    isBannerVisibleError:false,
    isBannerRealVisible:false,
    isModalVisible:false,
    isSlideVisible:false,
    isTestAlerts:false,
    dialog: false,
    SlideTe:true,
    timeout:2000,
    multiLine:true,
    showDiv: false,
    componentKey: 0,
    colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],
  }),

//   mounted(){
//       this.refreshScroll();
//   },

  methods:{
    SlideTest(){
      if(this.isSlideVisible){
        this.isSlideVisible = false;
      } else {
        this.isSlideVisible = true;
      }
    },  
    SlideT(){
      this.$router.push({name : 'SlideTesT'})
    },

    refreshScroll(){
        this.$refs.scroll.refreshScrollVue();
    },
    forceRerender(){
        this.componentKey += 1;
    },
    showDivFunction(){
        if(this.showDiv){
            this.showDiv = false
        }else{
            this.showDiv = true
        }
    },

  }
};
</script>

<style>
  .v-snack__wrapper {
      max-width: 100%;
      width: 95%;   
  }

  .v-snack__content {
    display: block; 
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow:hidden;
    color: #2c3e50;
  }

</style>