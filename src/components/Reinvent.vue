<script setup lang="ts">
import LottieAnimation from './LottieAnimation.vue';
import reinvent_subscribe from '../assets/lottie/reinvent_subscribe.json';
import reinvent_receive from '../assets/lottie/reinvent_receive.json';
import reinvent_revise from '../assets/lottie/reinvent_revise.json';
</script>

<template>
	<div
		class="section pb-[100px] backgroundImg
    bg-[#fff]"
	>
		<div class="container pt-[100px]">
			<div class="max-w-800 m-auto">
				<h2 class="max-w-[600px] m-auto">
					We didn't reinvent the wheel, just design
				</h2>
				<h3 class="max-w-[600px] m-auto">
					Design as you know it is out the door. Design as you want it just arrived.
				</h3>
			</div>
			<div
				class="
            max-w-[1100px]
            mt-20 m-auto
            text-[20px] leading-[26px]
            grid grid-cols-3 gap-15"
			>
				<div class="max-w-xs">
					<div class="lottieAnimate">
						<LottieAnimation :animationData="reinvent_subscribe" :loop="true" :autoplay="true" />
					</div>
					<p class="max-w-[300px]">
						Subscribe to a plan & request as many designs as you'd like.
					</p>
				</div>
				<div class="max-w-xs">
					<div class="lottieAnimate p-[10px]">
						<LottieAnimation :animationData="reinvent_receive" :loop="true" :autoplay="true" />
					</div>
					<p class="max-w-[300px]">
						Receive your design within a few business days on average, Monday to Friday.
					</p>
				</div>
				<div class="max-w-xs">
					<div class="lottieAnimate p-[6px]">
						<LottieAnimation :animationData="reinvent_revise" :loop="true" :autoplay="true" />
					</div>
					<p class="max-w-[300px]">
						We'll revise the designs until you're 100% satisfied.
					</p>
				</div>
			</div>
			<div
				class="quote backgroundImg
            relative
            tracking-[0.5px]
            bg-beige
            mt-20 p-15"
			>
				<div class="max-w-[600px] mx-auto">
					<img
						src="../assets/designjoy_quote_mark.svg"
						class="mb-[30px] mx-auto"
					>
					<p>
						Designjoy shows that they know the art of subtlety.
					</p>
					<img
						src="../assets/quote_webflow/webflow_logo.svg"
						class="mt-[30px] mx-auto w-[110px]"
					>
				</div>
				<img
					src="../assets/quote_webflow/left_design.svg"
					class="absolute
                bottom-[10%] left-[-5%]"
				>
				<img
					src="../assets/quote_webflow/right_design.svg"
					class="absolute
                top-[-4%] right-[-4%]"
				>
			</div>
		</div>
	</div>
</template>

<style>
.lottieAnimate {
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10px;
	
}
</style>
