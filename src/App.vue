<script setup>
import navBar from './components/nav-bar.vue';
import buttonPlans from './components/button-plans.vue';
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
<div class="top pt-[200px] pb-[40px] px-[5%]">
  <div class="text-center m-auto max-w-[1240px]">
    <div class="max-w-[800px] my-[0px] m-auto">
      <h1 class="text-[80px] font-extralight leading-[90px]">
        A design agency with a twist
      </h1>
      <p class="slogan mt-[20px] mb-0 text-[24px] leading-[36px]">
        Design subscriptions for everyone. Pause or cancel anytime.
      </p>
      <buttonPlans class="px-[60px]">
        <template v-slot:buttonName>See plans</template>
      </buttonPlans>
      <p class="flex justify-center items-center mt-[30px] text-[13px]">
        Designs you'll ♥️, guaranteed
      </p>
    </div>
    <img src="./assets/designjoy_home_left_design.svg" class="absolute top-[15%] left-[0%] max-w-[200px]">
    <img src="./assets/designjoy_home_right_design.svg" class="absolute top-[13%] right-[0%] max-w-[250px]">
  </div>
</div>

<div class=" top pt-[60px] pb-[100px] overflow-hidden">
  <div class="relative max-w-[1240px] m-auto">
    <img src="./assets/designjoy_latestprojects.svg" class="absolute w-[130px] ml-[5%] top-[-56px] left-[0%]">
  </div>
  <latestProjects/>
</div>

<marquee/>
<reinvent/>
<better/>
<benefits/>
<recentWork/>
<funkyScribbles/>
<scopeOfWork/>
<pricing/>
<FAQ/>
<footerDiv/>
</template>

<style>
.top {
  background-image: url("./assets/designjoy_background_home.png");
  background-color: #fbe8de;
}

h1 {
  font-family: 'Grifter', sans-serif;
}

.slogan {
  font-family: "PlusJakartaSans", sans-serif;
}
</style>

