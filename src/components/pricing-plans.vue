<script setup lang="ts">
import buttonPlans from './button-plans.vue';
</script>

<template>
    <div class="plans
    min-h-[450px]
    text-left 
    flex flex-col justify-between 
    relative
    pt-[60px] px-[30px] pb-[30px]"
    >
        <div>
            <p class="priceFont
            tracking-[0.5px] text-[24px] leading-[30px]"
            >
                <slot name="priceHeader"></slot>
            </p>
            <p class="mt-[10px] text-[15px] leading-[22px]"
            > 
                <slot name="priceDesc"></slot> Pause or cancel anytime.
            </p>
        </div>
        <div class="text-center">
            <p class="priceFont text-left tracking-[0.5px] mt-[30px] text-[30px] leading-[42px]"
            >$<slot name="amount"></slot>/m</p>
            <p class="text-[12px] text-left mt-0 opacity-50">
                Pause or cancel anytime
            </p>
            <buttonPlans class="w-[100%]">
                <template v-slot:buttonName>Get started</template>
            </buttonPlans>
            <div class="mt-[24px]">
                <a class="
                text-[14px]
                font-[700] text-center
                mx-auto 
                border-b-[1px] border-dotted border-black "
                >
                    Book a call
                </a>
            </div>
        </div>
        <slot name="popular"></slot>
    </div>
</template>

<style>
.plans {
    background-image: url("../assets/designjoy_background_home.png");
    background-color: #fff;
}

.priceFont {
    font-family: "Grifter", sans-serif;
}
</style>