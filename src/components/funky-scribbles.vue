<script setup>
import buttonPlans from './button-plans.vue';
</script>

<template>
    <div class="funky pt-[60px] pb-[100px] py-[5%]">
        <div class="container
        bg-[#fbe8de]
        p-[80px]
        relative"
        >
            <div class="max-w-[500px] text-left">
                <p class="funkyHeader my-0 text-[46px] leading-[46px]">
                    Funky Scribbles
                </p>
                <p class="mt-[20px] text-[17px] leading-[24px]">
                    A collection of funky vectorized scribbbles to spice up your design projects.
                </p>
                <buttonPlans class="px-[50px]">
                    <template v-slot:buttonName>Check it out</template>
                </buttonPlans>
            </div>
            <div class="
            flex flex-wrap justify-between 
            mt-[60px]"
            >
                <img class="funkyLogo" src="../assets/designjoy_funky_google.svg">
                <img class="funkyLogo" src="../assets/designjoy_funky_invision.svg">
                <img class="funkyLogo" src="../assets/designjoy_funky_legalzoom.svg">
                <img class="funkyLogo" src="../assets/designjoy_funky_verizon.svg">
                <img class="funkyLogo" src="../assets/designjoy_funky_jpmorgan.svg">
                <img class="funkyLogo" src="../assets/designjoy_funky_freelancer.svg">
            </div>
            <img src="../assets/designjoy_funky_image.svg" 
            class="
            max-w-[24vw] 
            absolute top-[0%] right-[0%]"
            />
        </div>

    </div>

</template>

<style>
.funky {
    background-image: url("../assets/designjoy_background_home.png");
    background-color: #fff;
}

.funkyHeader {
    font-family: "Grifter", sans-serif;
}

.funkyLogo {
    height: 26px;
    margin-right: 1vw;
}
</style>