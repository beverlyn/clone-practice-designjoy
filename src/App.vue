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
</script>

<template>
	<navBar />
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
			<img src="./assets/divider/designjoy_divider_curvedline.svg">
		</template>
		<template #left>
			<img
				src="./assets/divider/designjoy_divider_yellow.svg"
				class="dividerImgLeft w-[180px] top-[-68%]"
			>
		</template>
		<template #right>
			<img
				src="./assets/divider/designjoy_divider_orange.svg"
				class="dividerImgRight w-[230px] top-[-110%]"
			>
		</template>
	</divider>
	<better />
	<divider>
		<template #upperHalf>
			<div class="backgroundImg dividerHalf bg-bluegray" />
		</template>
		<template #lowerHalf>
			<div class="backgroundImg dividerHalf bg-white" />
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_line.svg">
		</template>
		<template #left>
			<img
				src="./assets/divider/designjoy_divider_rainbow.svg"
				class="dividerImgLeft w-[190px] top-[-89%]"
			>
		</template>
	</divider>
	<benefits id="benefits" />
	<divider>
		<template #upperHalf>
			<div class="backgroundImg dividerHalf bg-white" />
		</template>
		<template #lowerHalf>
			<div class="backgroundImg dividerHalf bg-bluegray" />
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_curvedline.svg">
		</template>
		<template #right>
			<img
				src="./assets/divider/designjoy_divider_cocentric.svg"
				class="dividerImgRight w-[150px] top-0"
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
			<img src="./assets/divider/designjoy_divider_line.svg">
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
				class="dividerImgLeft bottom-[-84%]"
			>
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_wavy.svg">
		</template>
		<template #right>
			<img
				src="./assets/divider/designjoy_divider_tealblack.svg"
				class="dividerImgRight top-0"
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
				class="dividerImgLeft pink w-[240px] bottom-[-84%]"
			>
		</template>
		<template #middle>
			<img src="./assets/divider/designjoy_divider_wavy.svg">
		</template>
		<template #right>
			<img
				src="./assets/divider/designjoy_divider_blue.svg"
				class="dividerImgRight top-0"
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
</style>
