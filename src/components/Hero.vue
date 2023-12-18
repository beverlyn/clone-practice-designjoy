<script setup lang="ts">
import buttonPlans from './ButtonPlans.vue';
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
	<div
		class="section backgroundImg
    pt-[200px] pb-10
    bg-beige"
	>
		<div class="container upAni hero"
		:ref="setElementRef">
			<h1
				class="
            mt-0
            text-[80px] leading-[90px]"
			>
				A design agency with a twist
			</h1>
			<h3>
				Design subscriptions for everyone. Pause or cancel anytime.
			</h3>
			<buttonPlans class="px-15">
				<template #buttonName>
					See plans
				</template>
			</buttonPlans>
			<p
				class="
            flex justify-center items-center
            mt-[30px]
            text-[13px]"
			>
				Designs you'll
				<img
					src="../assets/hero/designjoy_heart.svg"
					class="ml-1 mr-0.5"
				>
				, guaranteed
			</p>
		</div>
		<img
			src="../assets/hero/designjoy_home_left_design.svg"
			class="leftAni
        absolute top-[15%] left-0
        max-w-[200px]
        w-[16vw]"
		:ref="setElementRef"
		>
		<img
			src="../assets/hero/designjoy_home_right_design.svg"
			class="rightAni
        absolute top-[13%] right-0
        max-w-[250px]
        w-[16vw]"
		:ref="setElementRef"
		>
	</div>
</template>

<style scoped>
.hero {
    max-width: 800px;
}
</style>
