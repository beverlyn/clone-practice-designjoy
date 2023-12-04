<script setup lang="ts">
import pricingPlans from './pricing-plans.vue';
import pricingIncluded from './pricing-included.vue';
import pricingPerks from './pricing-perks.vue';
</script>

<template>
    <div class="section pb-[100px] backgroundImg
    bg-beige
    pt-15">
        <div class="container">
            <h2>
                Membership levels
            </h2>
            <h3>
                Choose a plan that's right for you.
            </h3>
            <img src="../assets/pricing/designjoy_pricing_image.svg"
            class="mt-15 mx-auto"
            >

            <div class="
            grid grid-cols-3 gap-[2px] 
            mt-15">
                <div>
                    <pricingPlans>
                        <template v-slot:priceHeader>Standard</template>
                        <template v-slot:priceDesc>One request at a time.</template>
                        <template v-slot:amount>4,995</template>
                        <template v-slot:popular>
                            <div class="
                                absolute
                                top-[-3%] bottom-auto right-auto left-[9%] 
                                rotate-[-9deg]
                                text-white tracking-[1px] text-[10px] font-[700] leading-5
                                bg-[#ea552b]
                                rounded-[5px]
                                flex justify-center items-center
                                py-[6px] px-[9px]
                                ">
                                    MOST POPULAR
                            </div>
                            <img src="../assets/pricing/designjoy_pricing_mostpop.svg"
                            class="
                            w-5 
                            absolute top-[-10%] left-[22%]">
                        </template>
                    </pricingPlans>
                    <pricingIncluded>
                        <template v-slot:requestAmt>One request at a time.</template>
                    </pricingIncluded>
                </div>
                <div>
                    <pricingPlans>
                        <template v-slot:priceHeader>Pro</template>
                        <template v-slot:priceDesc>Double the requests.</template>
                        <template v-slot:amount>7,995</template>
                    </pricingPlans>
                    <pricingIncluded>
                        <template v-slot:requestAmt><strong>Two requests at a time.</strong></template>
                    </pricingIncluded>
                </div>
                <pricingPerks/>
            </div>
            <div class="
            grid grid-cols-3
            mt-[2px]">
                <div class="backgroundImg
                bg-black
                row-span-1 col-span-3
                text-white text-center
                border-b-[1px]
                flex flex-col justify-center items-center 
                p-[50px]">
                    <div class="
                    text-black text-uppercase tracking-[0.02em] text-[10px] font-[700] leading-4
                    bg-[#fdd900]
                    rounded-[32px]
                    mb-6
                    py-[6px] px-[14px]">
                        ADD-ON
                    </div>
                    <h2 class="mb-4 text-[30px] leading-[30px]">
                        Webflow development
                    </h2>
                    <p class="mt-[6px] text-[15px] leading-[22px]">
                        Get a better website faster with Webflow development. Requires a design subscription.
                    </p>
                    <h2 class="mb-4 text-[30px] leading-[30px] mt-6">
                        $999/m
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>