<script setup lang="ts">
import buttonPlans from './button-plans.vue';
</script>

<template>
	<div
		class="backgroundImg
    bg-white
    min-h-[450px]
    text-left
    flex flex-col justify-between
    relative
    pt-15 px-[30px] pb-[30px]"
	>
		<div>
			<p
				class="
            font-grifter tracking-[0.5px] text-[24px] leading-[30px]"
			>
				<slot name="priceHeader" />
			</p>
			<p class="mt-[10px] text-[15px] leading-[22px]">
				<slot name="priceDesc" /> Pause or cancel anytime.
			</p>
		</div>
		<div class="text-center">
			<p
				class="
            font-grifter text-left tracking-[0.5px] text-[30px] leading-[42px]
            mt-[30px]"
			>
				$<slot name="amount" />/m
			</p>
			<p
				class="
            text-[12px] text-left
            mt-0
            opacity-50"
			>
				Pause or cancel anytime
			</p>
			<buttonPlans class="w-full">
				<template #buttonName>
					Get started
				</template>
			</buttonPlans>
			<div class="mt-6">
				<a
					class="
                text-[14px]
                font-[700] text-center
                mx-auto
                border-b-[1px] border-dotted border-black "
				>
					Book a call
				</a>
			</div>
		</div>
		<slot name="popular" />
	</div>
</template>
