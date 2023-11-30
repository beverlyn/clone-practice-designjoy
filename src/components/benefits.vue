<script setup lang="ts">
import buttonPlans from './button-plans.vue';
</script>

<template>
    <div class="benefits px-[5%] pt-60px">
        <div class="container"> 
            <div class="max-w-[800px] mx-auto">
                <img src="../assets/designjoy_benefits.svg"
                class="mb-[30px] mx-auto"
                >
                <h2>Membership benefits</h2>
                <h3 class="
                max-w-[610px]
                mx-auto"
                >
                    Perks so good you'll never need to go anywhere else for your design. Seriously.
                </h3>
                <buttonPlans class="px-[50px]">
                    <template v-slot:buttonName>See plans</template>
                </buttonPlans>
            </div>
            <div class="
            mt-[60px] 
            grid grid-cols-3 gap-[60px]"
            >
                <div class="
                mb-[40px]
                text-[20px] leading-[30px]"
                >
                    <div class="benefitsIcon">
                    </div>
                    <p class="benefitsHeader"
                    >
                        Design board
                    </p>
                    <p class="benefitsDesc">
                        Add as many design requests to your board as you'd like.
                    </p>
                </div>
                <div class="
                mb-[40px]
                text-[20px] leading-[30px]"
                >
                    <div class="benefitsIcon">
                    </div>
                    <p class="benefitsHeader"
                    >
                        Lightning fast delivery
                    </p>
                    <p class="benefitsDesc">
                        Get your design one at a time in just a few days on average.
                    </p>
                </div>
                <div class="
                mb-[40px]
                text-[20px] leading-[30px]"
                >
                    <div class="benefitsIcon">
                    </div>
                    <p class="benefitsHeader"
                    >
                        Fixed monthly rate
                    </p>
                    <p class="benefitsDesc">
                        No surprises here! Pay the same fixed price each month.
                    </p>
                </div>
                <div class="
                mb-[40px]
                text-[20px] leading-[30px]"
                >
                    <div class="benefitsIcon">
                    </div>
                    <p class="benefitsHeader"
                    >
                        Top-notch quality
                    </p>
                    <p class="benefitsDesc">
                        Insane design quality at your fingertips whenever you need it.
                    </p>
                </div>
                <div class="
                mb-[40px]
                text-[20px] leading-[30px]"
                >
                    <div class="benefitsIcon">
                    </div>
                    <p class="benefitsHeader"
                    >
                        Flexible and scalable
                    </p>
                    <p class="benefitsDesc">
                        Scale up or down as needed, and pause or cancel at anytime.
                    </p>
                </div>
                <div class="
                mb-[40px]
                text-[20px] leading-[30px]"
                >
                    <div class="benefitsIcon">
                    </div>
                    <p class="benefitsHeader"
                    >
                        Unique and all yours
                    </p>
                    <p class="benefitsDesc">
                        Each of your designs is made especially for you and is 100% yours.
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
.benefits {
    background-image: url("../assets/designjoy_background_home.png");
    background-color: #fff;
}

.benefitsIcon {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    margin: 0px auto 10px auto;
}

.benefitsHeader {
    font-family: "Grifter", sans-serif;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
}

.benefitsDesc {
    max-width: 320px;
    margin: 0px auto;
    font-size: 17px;
    line-height: 24px;
}

</style>