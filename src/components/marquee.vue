<script setup lang="ts">
import marqueeItems from './marquee-items.vue';
</script>

<template>
    <div class="
    bg-black
    py-10
    overflow-hidden"
    >
        <div class="marquee 
        flex 
        w-[200%]">
            <marqueeItems/>
            <marqueeItems/>
        </div>
    </div>
</template>

<style>
.marquee {
    animation: marquee 20s linear infinite;
}

@keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}
</style>