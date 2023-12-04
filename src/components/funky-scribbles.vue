<script setup>
import buttonPlans from './button-plans.vue';
</script>

<template>
    <div class="section pb-[100px] backgroundImg
    bg-white
    pt-15">
        <div class="container
        backgroundImg bg-beige
        p-[80px]
        relative"
        >
            <div class="max-w-[500px] text-left">
                <p class="funkyHeader 
                my-0 
                font-grifter text-[46px] leading-[46px]">
                    Funky Scribbbles
                </p>
                <p class="mt-5 text-[17px] leading-6">
                    A collection of funky vectorized scribbbles to spice up your design projects.
                </p>
                <buttonPlans class="px-[50px]">
                    <template v-slot:buttonName>Check it out</template>
                </buttonPlans>
            </div>
            <div class="
            flex flex-wrap justify-between 
            mt-15"
            >
                <img class="funkyLogo" src="../assets/funky/designjoy_funky_google.svg">
                <img class="funkyLogo" src="../assets/funky/designjoy_funky_invision.svg">
                <img class="funkyLogo" src="../assets/funky/designjoy_funky_legalzoom.svg">
                <img class="funkyLogo" src="../assets/funky/designjoy_funky_verizon.svg">
                <img class="funkyLogo" src="../assets/funky/designjoy_funky_jpmorgan.svg">
                <img class="funkyLogo" src="../assets/funky/designjoy_funky_freelancer.svg">
            </div>
            <img src="../assets/funky/designjoy_funky_image.svg" 
            class="
            max-w-[24vw] 
            absolute top-0 right-0"
            />
        </div>
    </div>

</template>

<style>
.funkyLogo {
    height: 26px;
    margin-right: 1vw;
}
</style>