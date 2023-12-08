<script setup>
import buttonPlans from './ButtonPlans.vue';
</script>

<template>
	<div
		class="section pb-[100px] backgroundImg
    bg-bluegray
    pt-15"
	>
		<div class="container">
			<div>
				<h2>Recent work</h2>
				<h3>Award winning designs, and nothing less.</h3>
				<buttonPlans class="px-15">
					<template #buttonName>
						View recent work
					</template>
				</buttonPlans>
			</div>

			<div
				class="
            grid grid-cols-2 gap-[30px]
            my-15"
			>
				<img
					class="max-w-full"
					src="../assets/recentwork/designjoy_recentwork_1.jpg"
				>
				<img
					class="max-w-full"
					src="../assets/recentwork/designjoy_recentwork_2.jpg"
				>
				<img
					class="max-w-full"
					src="../assets/recentwork/designjoy_recentwork_3.jpg"
				>
				<img
					class="max-w-full"
					src="../assets/recentwork/designjoy_recentwork_4.jpg"
				>
			</div>

			<div
				class="
            mt-[80px] mx-auto
            max-w-[800px]"
			>
				<p
					class="featuredBy
                text-[17px] tracking-[0.5px]
                mb-[10px]"
				>
					Designs commonly featured by
				</p>
				<div
					class="
                flex flex-wrap justify-between items-center
                max-w-[600px]
                mt-[30px] mx-auto"
				>
					<img
						class="logo h-6"
						src="../assets/recentwork/designjoy_featured_dribbble.svg"
					>
					<img
						class="logo h-7"
						src="../assets/recentwork/designjoy_featured_lapa.svg"
					>
					<img
						class="logo h-[18px]"
						src="../assets/recentwork/designjoy_featured_awwwards.svg"
					>
					<img
						class="logo h-7"
						src="../assets/recentwork/designjoy_featured_producthunt.svg"
					>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.featuredBy {
    font-family: Grifter, sans-serif;
}

.logo {
    margin-right: 0.5vw;
}
</style>
