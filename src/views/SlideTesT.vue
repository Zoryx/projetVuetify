<template>
    <v-carousel
        cycle
        height="424"
        hide-delimiter-background
        show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="424">
            <v-row class="fill-height" align="center" justify="center">
            <div class="display-2">{{ slide }} Slide</div>
            </v-row>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    name: 'SlideTesT',
    data: () => ({
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
    methods:{
        
    }
}
</script>