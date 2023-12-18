<script setup lang="ts">
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';

// Props
const props = defineProps({
  animationData: Object,
});

// Ref to the container element
const lottieContainer = ref(null);

onMounted(() => {
  if (lottieContainer.value) {
    lottie.loadAnimation({
      container: lottieContainer.value, // Direct reference to the DOM element
      animationData: props.animationData,
      renderer: 'svg',
    });
  }
});
</script>

<template>
	<div class="w-[100px] h-[100px]">
		<div ref="lottieContainer" style="width: 100%; height: 100%;"></div>
	</div>
</template>