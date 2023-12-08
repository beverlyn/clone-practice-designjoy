<template>
	<div
		class="included
    min-h-[350px]
    text-left
    mt-[2px] p-[30px]"
	>
		<p class="font-[700]">
			What's included:
		</p>
		<ul class="mt-[20px] pl-[16px] pb-[10px] list-disc text-[14px]">
			<li class="mb-[10px]">
				<slot name="requestAmt" />
			</li>
			<li class="mb-[10px]">
				Average 48 hour delivery
			</li>
			<li class="mb-[10px]">
				Unlimited brands
			</li>
			<li class="mb-[10px]">
				Unlimited users
			</li>
			<li class="mb-[10px]">
				Unlimited stock photos via Shutterstock
			</li>
			<li class="mb-[10px]">
				Easy credit-card payments
			</li>
			<li class="mb-[10px]">
				Pause or cancel anytime
			</li>
		</ul>
	</div>
</template>

<style>
.included {
    background-image: url("../assets/designjoy_background_home.png");
    background-color: #fff;
}
</style>
