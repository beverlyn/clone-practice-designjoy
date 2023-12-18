<script setup lang="ts">
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
		class="backgroundImg 
    pt-15 pb-[100px]
    bg-beige
    overflow-clip"
	>
		<div class="container"
		
		>
			<img
				src="../assets/latestprojects/designjoy_latestprojects.svg"
				class="
            badge
            z-[6]
            absolute top-[-56px] left-0
            w-[130px]
            ml-[5%]"
			>
		</div>
		<div class="upAni"
		:ref="setElementRef">
			<div class="showcase flex min-w-[110%] justify-between m-auto"
			>
				<img
					src="../assets/latestprojects/designjoy_latestprojs_1.jpg"
					class="latestprojs"
				>
				<img
					src="../assets/latestprojects/designjoy_latestprojs_2.jpg"
					class="latestprojs"
				>
				<img
					src="../assets/latestprojects/designjoy_latestprojs_3.jpg"
					class="latestprojs"
				>
				<img
					src="../assets/latestprojects/designjoy_latestprojs_4.jpg"
					class="latestprojs"
				>
				<img
					src="../assets/latestprojects/designjoy_latestprojs_5.jpg"
					class="latestprojs"
				>
			</div>
		</div>
	</div>
</template>

<style>
.latestprojs {
    width: auto;
    max-width: none;
    min-height: 400px;
    min-width: 400px;
    margin-right: 20px;
    transition: all .4s;
}

.latestprojs:hover {
    transform: scale(1.1);
    box-shadow: 0 30px 40px #a88f83;
}

.badge {
  animation: rotateImage auto linear;
  animation-timeline: --my-page-scroll;
}

@keyframes rotateImage {
  from { transform: rotate(0deg); }
  to { transform: rotate(460deg); }
}

.showcase {
    animation: slide-progress auto linear;
	animation-timeline: --my-page-scroll;
}

@keyframes slide-progress {
	from { transform: translateX(-5%); }
	to { transform: translateX(-100%); }
}

html {
  scroll-timeline: --my-page-scroll y;
}

</style>
