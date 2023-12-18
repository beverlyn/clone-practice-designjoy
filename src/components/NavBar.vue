<script setup lang="ts">
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import easeInOutCubic from 'eases/cubic-in-out';
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

function scrollToSection(payload: MouseEvent) {
	const clickedOn = payload.target as HTMLAnchorElement;
	const sectionID = clickedOn.hash.slice(1);
	const node = document.getElementById(sectionID);
	if (node) {
		scrollIntoView(node, {
			behavior: 'smooth',
			block: 'start',
			duration: 3000,
			ease: easeInOutCubic,
		});
	}
}

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
		class="
		upAni
		font-[Grifter]
		fixed z-[100]
		p-[29px]
		bottom-0
		inset-x-0
		max-w-[1240px]
		m-auto"
		:ref="setElementRef"
	>
		<div
			class="
        flex justify-center"
		>
			<div
				class="
				bg-black
				rounded-full
				border-[1px] border-[#ffffff2b]
				flex items-stretch
				p-[6px]
				text-[14px] leading-[20px]"
			>
				<a
					@click="scrollToSection"
					href="#top"
					class="nav-menu arrowTop sideItems
					bg-[#2c2c2c]
					hover:bg-[#424242]
					rounded-[90px]"
				/>
				<a
					@click="scrollToSection"
					href="#benefits"
					class="nav-menu sectionID"
				>
					Benefits
				</a>
				<a
					@click="scrollToSection"
					href="#recentWork"
					class="nav-menu sectionID"
				>
					Recent work
				</a>
				<a
					@click="scrollToSection"
					href="#scope"
					class="nav-menu sectionID"
				>
					Scope of Work
				</a>
				<a
					@click="scrollToSection"
					href="#pricing"
					class="nav-menu sectionID"
				>
					Pricing
				</a>
				<a
					@click="scrollToSection"
					href="#faqs"
					class="nav-menu sectionID"
				>
					FAQs
				</a>
				<a
					class="nav-menu
					bg-[#2c2c2c]
					rounded-[70px]
					hover:bg-[#424242]
					"
				>
					Login
				</a>
			</div>
		</div>
	</div>
</template>

<style>
.nav-menu {
    color: white;
    padding-bottom: 16px;
    padding: 20px;
}

.arrowTop {
    background-image: url("../assets/designjoy_home_arrow.svg");
    background-position: 50%;
    background-size: auto 22px;
    background-repeat: no-repeat;
    padding-left: 38px;
    padding-right: 38px;
}

.sectionID:hover{
    background-color: white;
    color: black;
    border-radius: 60px;
}
</style>
