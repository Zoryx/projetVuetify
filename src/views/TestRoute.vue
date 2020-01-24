<template>
        <div>
            <v-app-bar
            app
            color="primary"
            dark
            >
            <div class="d-flex align-center">
                <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
                />

                <v-img
                alt="Vuetify Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                width="100"/>
                <v-btn
                    v-show="goBackHomeVue"
                    @click="goBackHome"
                    text
                >
                    <span class="mr-2">goBackHome</span>
                </v-btn>
            </div>

            <v-spacer></v-spacer>

            <v-btn
                v-show="SlideTVue"
                @click="SlideT"
                text
            >
                <span class="mr-2">RouteToSlide</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
            </v-app-bar>
            <v-content>
                <router-view></router-view>           
            </v-content>
        </div>
</template>

<script>

export default {
    name:'TestRoute',
    components: {
    },
    props:{
        footerboolean : {type:Boolean,default:false},
    },
    data:function(){
        return {
            SlideTVue:true,
            goBackHomeVue:false,
        }
    },
    mounted(){
        // const scrollTest = document.getElementById('scroll');
        // const mutationConfig = { attributes: true, childList: true};
        // var observer = new MutationObserver(this.refreshScroll);
        // observer.observe(scrollTest,mutationConfig);
    },
    updated(){
    },
    methods:{
        SlideT(){
            this.$router.push({name:'SlideTesT'})
            this.SlideTVue = false
            this.goBackHomeVue = true
        },

        // SlideTVueFonction(){
        //     if (this.SlideTVue){
        //         this.SlideTVue = false;
        //     } else {
                
        //     }
        // },
        goBackHome(){
            this.$router.push({name:'home'})
            this.SlideTVue = true
            this.goBackHomeVue = false
        },
    },
}



</script>

<style>
  .v-snack__wrapper {
      max-width: 100%;
      width: 100%;    
  }

  .v-snack__content {
    display: block; 
  }
  
  
</style>