<script setup>
import navBar from './components/nav-bar.vue';
import divider from './components/divider.vue';
import logoHeader from './components/logo-header.vue';
import hero from './components/hero.vue';
import latestProjects from './components/latest-projects.vue';
import marquee from "./components/marquee.vue";
import reinvent from './components/reinvent.vue';
import better from "./components/better.vue";
import benefits from './components/benefits.vue';
import recentWork from './components/recent-work.vue';
import funkyScribbles from './components/funky-scribbles.vue';
import scopeOfWork from './components/scope-of-work.vue';
import pricing from './components/pricing.vue';
import FAQ from './components/faqs.vue';
import footerDiv from './components/footer.vue';
</script>

<template>
<navBar/>
<logoHeader id="top"/>
<hero/>
<latestProjects/>
<marquee/>
<reinvent/>
<divider>
  <template v-slot:upperHalf>
    <div class="backgroundImg dividerHalf bg-white"></div>
  </template>
  <template v-slot:lowerHalf>
    <div class="backgroundImg dividerHalf bg-bluegray"></div>
  </template>
  <template v-slot:middle>
    <img src="./assets/divider/designjoy_divider_curvedline.svg">
  </template>
  <template v-slot:left>
    <img src="./assets/divider/designjoy_divider_yellow.svg" class="dividerImgLeft w-[180px] top-[-68%]">
  </template>
  <template v-slot:right>
    <img src="./assets/divider/designjoy_divider_orange.svg" class="dividerImgRight w-[230px] top-[-110%]">
  </template>
</divider>
<better/>
<divider>
  <template v-slot:upperHalf>
    <div class="backgroundImg dividerHalf bg-bluegray"></div>
  </template>
  <template v-slot:lowerHalf>
    <div class="backgroundImg dividerHalf bg-white"></div>
  </template>
  <template v-slot:middle>
    <img src="./assets/divider/designjoy_divider_line.svg">
  </template>
  <template v-slot:left>
    <img src="./assets/divider/designjoy_divider_rainbow.svg" class="dividerImgLeft w-[190px] top-[-89%]">
  </template>
</divider>
<benefits id="benefits"/>
<divider>
  <template v-slot:upperHalf>
    <div class="backgroundImg dividerHalf bg-white"></div>
  </template>
  <template v-slot:lowerHalf>
    <div class="backgroundImg dividerHalf bg-bluegray"></div>
  </template>
  <template v-slot:middle>
    <img src="./assets/divider/designjoy_divider_curvedline.svg">
  </template>
  <template v-slot:right>
    <img src="./assets/divider/designjoy_divider_cocentric.svg" class="dividerImgRight w-[150px] top-0">
  </template>
</divider>
<recentWork id="recentWork"/>
<divider>
  <template v-slot:upperHalf>
    <div class="backgroundImg dividerHalf bg-bluegray"></div>
  </template>
  <template v-slot:lowerHalf>
    <div class="backgroundImg dividerHalf bg-white"></div>
  </template>
  <template v-slot:middle>
    <img src="./assets/divider/designjoy_divider_line.svg">
  </template>
</divider>
<funkyScribbles/>
<scopeOfWork id="scope"/>
<divider>
  <template v-slot:upperHalf>
    <div class="backgroundImg dividerHalf bg-white"></div>
  </template>
  <template v-slot:lowerHalf>
    <div class="backgroundImg dividerHalf bg-beige"></div>
  </template>
  <template v-slot:left>
    <img src="./assets/divider/designjoy_divider_yellowteal.svg" class="dividerImgLeft bottom-[-84%]">
  </template>
  <template v-slot:middle>
    <img src="./assets/divider/designjoy_divider_wavy.svg">
  </template>
  <template v-slot:right>
    <img src="./assets/divider/designjoy_divider_tealblack.svg" class="dividerImgRight top-0">
  </template>
</divider>
<pricing id="pricing"/>
<divider>
  <template v-slot:upperHalf>
    <div class="backgroundImg dividerHalf bg-beige"></div>
  </template>
  <template v-slot:lowerHalf>
    <div class="backgroundImg dividerHalf bg-white"></div>
  </template>
  <template v-slot:left>
    <img src="./assets/divider/designjoy_divider_pink.svg" class="dividerImgLeft pink w-[240px] bottom-[-84%]">
  </template>
  <template v-slot:middle>
    <img src="./assets/divider/designjoy_divider_wavy.svg">
  </template>
  <template v-slot:right>
    <img src="./assets/divider/designjoy_divider_blue.svg" class="dividerImgRight top-0">
  </template>
</divider>
<FAQ id="faqs"/>
<footerDiv/>
</template>

<style>
.pink {
  left: -8%;
}
</style>