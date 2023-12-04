<script setup lang="ts">
import buttonPlans from './button-plans.vue';
</script>

<template>
    <div class="section backgroundImg
    pt-[200px] pb-10 
    bg-beige">
        <div class="container hero">
            <h1 class="
            mt-0
            text-[80px] leading-[90px]">
                A design agency with a twist
            </h1>
            <h3>
                Design subscriptions for everyone. Pause or cancel anytime.
            </h3>
            <buttonPlans class="px-15">
                <template v-slot:buttonName>See plans</template>
            </buttonPlans>
            <p class="
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
        class="
        absolute top-[15%] left-0 
        max-w-[200px]
        w-[16vw]"
        >
        <img 
        src="../assets/hero/designjoy_home_right_design.svg" 
        class="
        absolute top-[13%] right-0 
        max-w-[250px] 
        w-[16vw]"
        >
    </div>
</template>

<style scoped>
.hero {
    max-width: 800px;
}
</style>