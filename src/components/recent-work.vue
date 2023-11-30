<script setup>
import buttonPlans from './button-plans.vue';
</script>

<template>
    <div class="recent 
    pt-[60px] py-[5%] pb-[100px]"
    >
        <div class="container">
            <div>
                <h2>Recent work</h2>
                <h3>Award winning designs, and nothing less.</h3>
                <buttonPlans class="px-[60px]">
                    <template v-slot:buttonName>View recent work</template>
                </buttonPlans>
            </div>

            <div class="
            grid grid-cols-2 gap-[30px] 
            my-[60px]"
            >
                <img class="max-w-[100%]" src="../assets/designjoy_recentwork_1.jpg">
                <img class="max-w-[100%]" src="../assets/designjoy_recentwork_2.jpg">
                <img class="max-w-[100%]" src="../assets/designjoy_recentwork_3.jpg">
                <img class="max-w-[100%]" src="../assets/designjoy_recentwork_4.jpg">
            </div>

            <div class="
            mt-[80px] max-w-[800px] mx-auto">
                <p class="featuredBy text-[17px] tracking-[0.5px] mb-[10px]">
                    Designs commonly featured by
                </p>
                <div class="
                flex flex-wrap justify-between items-center
                max-w-[600px] mt-[30px] mx-auto"
                >
                    <img class="logo" src="../assets/designjoy_featured_dribbble.svg">
                    <img class="logo" src="../assets/designjoy_featured_lapa.svg">
                    <img class="logo" src="../assets/designjoy_featured_awwwards.svg">
                    <img class="logo" src="../assets/designjoy_featured_producthunt.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.recent {
    background-image: url("../assets/designjoy_background_home.png");
    background-color: #e1eaf4;
}

.featuredBy {
    font-family: Grifter, sans-serif;
}

.logo {
    height: 24px;
    margin-right: 0.5vw;
}
</style>