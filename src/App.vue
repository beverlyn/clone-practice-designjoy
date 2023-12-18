<script setup>
import navBar from './components/NavBar.vue';
import divider from './components/Divider.vue';
import logoHeader from './components/LogoHeader.vue';
import hero from './components/Hero.vue';
import latestProjects from './components/LatestProjects.vue';
import marquee from './components/Marquee.vue';
import reinvent from './components/Reinvent.vue';
import better from './components/Better.vue';
import benefits from './components/Benefits.vue';
import recentWork from './components/RecentWork.vue';
import funkyScribbles from './components/FunkyScribbles.vue';
import scopeOfWork from './components/ScopeOfWork.vue';
import pricing from './components/Pricing.vue';
import FAQ from './components/Faqs.vue';
import footerDiv from './components/Footer.vue';

import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const elements = ref([]);
const setElementRef = el => {
  if (el) elements.value.push(el);
};

onMounted(() => {
  elements.value.forEach(element => {
    useIntersectionObserver(
      element,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          // Apply the appropriate animation class based on the element's existing class
          if (element.classList.contains('leftAni')) element.classList.add('animationFromLeft');
          if (element.classList.contains('rightAni')) element.classList.add('animationFromRight');
          if (element.classList.contains('upAni')) element.classList.add('animationFromBelow');
          if (element.classList.contains('downAni')) element.classList.add('animationFromAbove');
          // Unobserve after applying animation
          observerElement.stop();
        }
      },
      { threshold: 0 } // Set your desired threshold
    );
  });
});
</script>

<template>
	<navBar/>
	<logoHeader id="top" />
	<hero />
	<latestProjects />
	<marquee />
	<reinvent />
	<divider>
		<template #upperHalf>
			<div class="backgroundImg dividerHalf bg-white" />
		</template>
		<template #lowerHalf>
			<div class="backgroundImg dividerHalf bg-bluegray" />
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_curvedline.svg"
			class="downAni"
			:ref="setElementRef"
			>
		</template>
		<template #left>
			<img
				src="./assets/divider/designjoy_divider_yellow.svg"
				class="dividerImgLeft leftAni w-[180px] top-[-68%] "
				:ref="setElementRef"
			>
		</template>
		<template #right>
			<img
				src="./assets/divider/designjoy_divider_orange.svg"
				class="dividerImgRight rightAni w-[230px] top-[-110%]"
				:ref="setElementRef"
			>
		</template>
	</divider>
	<better />
	<divider>
		<template #upperHalf>
			<div class="backgroundImg dividerHalf bg-bluegray" />
		</template>
		<template #lowerHalf>
			<div class="backgroundImg dividerHalf bg-beige" />
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_line.svg"
			class="downAni"
			:ref="setElementRef">
		</template>
		<template #left>
			<img
				src="./assets/divider/designjoy_divider_rainbow.svg"
				class="dividerImgLeft leftAni w-[190px] top-[-89%]"
				:ref="setElementRef"
			>
		</template>
	</divider>
	<benefits id="benefits" />
	<divider>
		<template #upperHalf>
			<div class="backgroundImg dividerHalf bg-beige" />
		</template>
		<template #lowerHalf>
			<div class="backgroundImg dividerHalf bg-bluegray" />
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_curvedline.svg"
			class="downAni"
			:ref="setElementRef">
		</template>
		<template #right>
			<img
				src="./assets/divider/designjoy_divider_cocentric.svg"
				class="dividerImgRight rightAni w-[150px] top-0"
				:ref="setElementRef"
			>
		</template>
	</divider>
	<recentWork id="recentWork" />
	<divider>
		<template #upperHalf>
			<div class="backgroundImg dividerHalf bg-bluegray" />
		</template>
		<template #lowerHalf>
			<div class="backgroundImg dividerHalf bg-white" />
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_line.svg"
			class="downAni"
			:ref="setElementRef">
		</template>
	</divider>
	<funkyScribbles />
	<scopeOfWork id="scope" />
	<divider>
		<template #upperHalf>
			<div class="backgroundImg dividerHalf bg-white" />
		</template>
		<template #lowerHalf>
			<div class="backgroundImg dividerHalf bg-beige" />
		</template>
		<template #left>
			<img
				src="./assets/divider/designjoy_divider_yellowteal.svg"
				class="dividerImgLeft leftAni bottom-[-84%]"
				:ref="setElementRef"
			>
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_wavy.svg"
			class="downAni">
		</template>
		<template #right>
			<img
				src="./assets/divider/designjoy_divider_tealblack.svg"
				class="dividerImgRight rightAni top-0"
				:ref="setElementRef"
			>
		</template>
	</divider>
	<pricing id="pricing" />
	<divider>
		<template #upperHalf>
			<div class="backgroundImg dividerHalf bg-beige" />
		</template>
		<template #lowerHalf>
			<div class="backgroundImg dividerHalf bg-white" />
		</template>
		<template #left>
			<img
				src="./assets/divider/designjoy_divider_pink.svg"
				class="dividerImgLeft leftAni pink w-[240px] bottom-[-84%]"
				:ref="setElementRef"
			>
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_wavy.svg"
			class="downAni"
			:ref="setElementRef">
		</template>
		<template #right>
			<img
				src="./assets/divider/designjoy_divider_blue.svg"
				class="dividerImgRight rightAni top-0"
				:ref="setElementRef"
			>
		</template>
	</divider>
	<FAQ id="faqs" />
	<footerDiv />
</template>

<style>
.pink {
  left: -8%;
}

.demo {
  max-width: 600px;
  border: 2px solid #2c3e50;
  padding: 2rem;
  margin: 2rem auto;
  background-color: #42b983;
}
</style>
