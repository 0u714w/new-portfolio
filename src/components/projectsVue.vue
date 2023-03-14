<template>
     <b-container class="mt-5 contenedor col-md-6" >
    <b-badge class="w-100 text-white font-weight-bolder mx-auto p-1" variant="dark">Projects</b-badge>
    <b-carousel    
        id="carousel"
        style="text-shadow: 0px 0px 5px black;"
        v-model="open_slide"
        :interval="0"
        controls
        indicators
    >
      <a :href="slides[open_slide].link">
         <b-carousel-slide
         v-for="(slide, index) in slides"
        :key="index"
        :caption="slide.caption"
        :img-src="slide.src"
        :id="slide.link"
        class="vtam"
        text="click to open GitHub"
     >   
     </b-carousel-slide>
      </a>
    </b-carousel>
    </b-container>
</template>

<script>
export default {
    name: 'projectsVue',
    data() {
        return {
            slides: [
                {caption: "Ebay Scraper", src: require("../assets/projects/ebay.png"), link: "https://github.com/0u714w/ebay_scraper"},
                {caption: "Simple Neural Net", src: require("../assets/projects/net.png"), link: "https://github.com/0u714w/neural_net"},
                {caption: "Bird Nerd", src: require("../assets/projects/birdnerd.png"), link: "https://mhoelzer.github.io/birdNerd/"},
                
            ],  
            open_slide: 0
        }
    }

}
</script>

<style>
.vtam {
   height:40vh;
   background: #292b2c;
 }
</style>