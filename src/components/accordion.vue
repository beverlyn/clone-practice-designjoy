<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleAccordion() {
	isOpen.value = !isOpen.value;
}
</script>

<template>
	<div
		class="
    flex justify-between items-start
    text-left
    border-b-[1px] border-black
    mb-[30px] pb-5
    cursor-pointer"
		@click="toggleAccordion()"
	>
		<div>
			<p
				class="
            mb-3
            text-[20px] font-[700] leading-[30px]"
			>
				<slot name="question" />
			</p>
			<p
				v-show="isOpen"
				class="text-[17px] leading-[26px]"
			>
				<slot name="answer" />
			</p>
		</div>
		<img
			src="../assets/designjoy_arrow.svg"
			class="arrow
        w-4 ml-[60px]"
			:style="isOpen ? { transform: 'rotate(180deg)' } : 'none'"
		>
	</div>
</template>

<style>
.arrow {
    transition-duration: 500ms;
}
</style>
